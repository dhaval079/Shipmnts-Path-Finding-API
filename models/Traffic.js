const mongoose = require('mongoose');

const trafficUpdateSchema = new mongoose.Schema({
  road: { type: mongoose.Schema.Types.ObjectId, ref: 'Road', required: true },
  timestamp: { type: Date, required: true },
  traffic_condition: { type: String, enum: ['clear', 'moderate', 'heavy'], required: true },
});

module.exports = mongoose.model('TrafficUpdate', trafficUpdateSchema);