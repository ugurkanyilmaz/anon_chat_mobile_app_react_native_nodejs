const mongoose = require('mongoose');

const MessageLogSchema = new mongoose.Schema({
  messageId: { type: mongoose.Schema.Types.ObjectId, ref: 'Message' },
  deliveredAt: { type: Date },
  readAt: { type: Date },
}, { timestamps: true });

module.exports = mongoose.model('MessageLog', MessageLogSchema);
