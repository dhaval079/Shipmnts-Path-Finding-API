const Location = require('../models/Location');

exports.addLocation = async (req, res) => {
  try {
    const { name, latitude, longitude } = req.body;
    const location = new Location({ name, latitude, longitude });
    await location.save();
    res.status(201).json({ success: true, location });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};