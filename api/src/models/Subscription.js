const mongoose = require('mongoose');

const SubscriptionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  plan: { type: String },
  expiresAt: { type: Date },
}, { timestamps: true });

module.exports = mongoose.model('Subscription', SubscriptionSchema);
