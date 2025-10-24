module.exports = {
  secret: process.env.JWT_SECRET || 'changeme',
  expiresIn: '7d',
};
