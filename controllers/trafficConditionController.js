const Road = require('../models/Road');
const { Parser } = require('json2csv');

exports.getRoadTrafficCondition = async (req, res) => {
  try {
    const road = await Road.findById(req.params.id);
    if (!road) {
      return res.status(404).json({ success: false, message: 'Road not found' });
    }
    res.status(200).json({ success: true, traffic_condition: road.traffic_condition });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.generateTrafficReport = async (req, res) => {
  try {
    const roads = await Road.find().populate('start_location end_location');
    const fields = ['id', 'start_location.name', 'end_location.name', 'distance', 'traffic_condition'];
    const json2csvParser = new Parser({ fields });
    const csv = json2csvParser.parse(roads);
    res.header('Content-Type', 'text/csv');
    res.attachment('traffic_report.csv');
    return res.send(csv);
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};