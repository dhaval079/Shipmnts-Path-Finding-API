const Road = require('../models/Road');
const Location = require('../models/Location');

// Helper function to build the graph
const buildGraph = (roads) => {
  const graph = {};
  roads.forEach(road => {
    if (!graph[road.start_location.toString()]) graph[road.start_location.toString()] = {};
    if (!graph[road.end_location.toString()]) graph[road.end_location.toString()] = {};
    
    graph[road.start_location.toString()][road.end_location.toString()] = road.distance;
    graph[road.end_location.toString()][road.start_location.toString()] = road.distance; // Assuming roads are bidirectional
  });
  return graph;
};

// Simple Dijkstra's algorithm
const dijkstra = (graph, start, end) => {
  const distances = {};
  const previous = {};
  const nodes = new Set(Object.keys(graph));

  // Initialize distances
  for (let node of nodes) {
    distances[node] = node === start ? 0 : Infinity;
  }

  while (nodes.size > 0) {
    const closest = [...nodes].reduce((a, b) => distances[a] < distances[b] ? a : b);

    if (closest === end) {
      const path = [];
      let current = end;
      while (current) {
        path.unshift(current);
        current = previous[current];
      }
      return { path, distance: distances[end] };
    }

    nodes.delete(closest);

    for (let neighbor in graph[closest]) {
      const alt = distances[closest] + graph[closest][neighbor];
      if (alt < distances[neighbor]) {
        distances[neighbor] = alt;
        previous[neighbor] = closest;
      }
    }
  }

  return null; // No path found
};

exports.getShortestPath = async (req, res) => {
  try {
    const { start_location_id, end_location_id } = req.query;
    
    // Fetch all roads
    const roads = await Road.find();
    
    // Build the graph
    const graph = buildGraph(roads);
    
    // Calculate shortest path
    const result = dijkstra(graph, start_location_id, end_location_id);
    
    if (!result) {
      return res.status(404).json({ success: false, message: "No path found between the given locations" });
    }

    // Estimate time (assuming average speed of 50 km/h)
    const estimatedTime = result.distance / 50; // in hours
    
    res.status(200).json({
      success: true,
      path: result.path,
      total_distance: result.distance,
      estimated_time: estimatedTime
    });
  } catch (error) {
    console.error('Error in getShortestPath:', error);
    res.status(400).json({ success: false, message: error.message });
  }
};