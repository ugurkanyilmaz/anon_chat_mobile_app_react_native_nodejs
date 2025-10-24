// Placeholder for DB connection (e.g., mongoose)
const mongoose = require('mongoose');
const logger = require('../utils/logger');

const connect = async (uri) => {
  try {
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    logger.info('MongoDB connected');
  } catch (err) {
    logger.error('MongoDB connection error', err);
    throw err;
  }
};

module.exports = { connect };
