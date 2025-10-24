// Placeholder redis client
const Redis = require('ioredis');

let client = null;

const connect = (options) => {
  client = new Redis(options);
  client.on('connect', () => console.log('Redis connected'));
  client.on('error', (err) => console.error('Redis error', err));
  return client;
};

module.exports = { connect, getClient: () => client };
