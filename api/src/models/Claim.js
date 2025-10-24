const mongoose = require('mongoose');

const ClaimSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  reason: { type: String },
  status: { type: String, default: 'open' },
}, { timestamps: true });

module.exports = mongoose.model('Claim', ClaimSchema);
