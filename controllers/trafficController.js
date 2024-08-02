const TrafficUpdate = require('../models/Traffic');

exports.updateTraffic = async (req, res) => {
  try {
    const { road_id, timestamp, traffic_condition } = req.body;
    const trafficUpdate = new TrafficUpdate({
      road: road_id,
      timestamp,
      traffic_condition
    });
    await trafficUpdate.save();
    res.status(201).json({ success: true, trafficUpdate });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};