const jwt = require('jsonwebtoken');
const config = require('../config/jwt');

module.exports = {
  sign: (payload) => jwt.sign(payload, config.secret, { expiresIn: config.expiresIn }),
  verify: (token) => jwt.verify(token, config.secret),
};
