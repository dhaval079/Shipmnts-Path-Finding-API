const Road = require('../models/Road');

exports.addRoad = async (req, res) => {
  try {
    const { start_location_id, end_location_id, distance, traffic_condition } = req.body;
    const road = new Road({
      start_location: start_location_id,
      end_location: end_location_id,
      distance,
      traffic_condition,
      user: req.user.id
    });
    await road.save();
    res.status(201).json({ success: true, road });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};