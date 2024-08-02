const mongoose = require('mongoose');

const roadSchema = new mongoose.Schema({
  start_location: { type: mongoose.Schema.Types.ObjectId, ref: 'Location', required: true },
  end_location: { type: mongoose.Schema.Types.ObjectId, ref: 'Location', required: true },
  distance: { type: Number, required: true },
  traffic_condition: { type: String, enum: ['clear', 'moderate', 'heavy'], default: 'clear' },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

module.exports = mongoose.model('Road', roadSchema);