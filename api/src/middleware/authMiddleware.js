const jwtUtils = require('../utils/jwt');

module.exports = (req, res, next) => {
  const auth = req.headers.authorization;
  if (!auth) return res.status(401).json({ error: 'Unauthorized' });
  const token = auth.replace(/^Bearer\s+/i, '');
  try {
    req.user = jwtUtils.verify(token);
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};
