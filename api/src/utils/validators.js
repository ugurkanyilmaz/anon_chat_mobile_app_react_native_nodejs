module.exports = {
  isEmail: (s) => typeof s === 'string' && /@/.test(s),
};
