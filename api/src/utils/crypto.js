const bcrypt = require('bcryptjs');

module.exports = {
  hash: (s) => bcrypt.hashSync(s, 10),
  compare: (s, hash) => bcrypt.compareSync(s, hash),
};
