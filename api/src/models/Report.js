const mongoose = require('mongoose');

const ReportSchema = new mongoose.Schema({
  reporter: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  reported: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  reason: { type: String },
  status: { type: String, default: 'pending' },
}, { timestamps: true });

module.exports = mongoose.model('Report', ReportSchema);
