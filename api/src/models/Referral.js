const mongoose = require('mongoose');

const ReferralSchema = new mongoose.Schema({
  referrer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  referredEmail: { type: String },
  accepted: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model('Referral', ReferralSchema);
