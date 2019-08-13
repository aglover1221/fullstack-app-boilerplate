const redis = require("redis");
const client = redis.createClient(6379);

const oneDay = 86400;

exports.check = key => {
  client.get(`${key}`, (err, user) => {
    if (err) {
      return null;
    } else {
      return user;
    }
  });
};

exports.set = (key, value) => {
  client.set(`${key}`, value, "EX", oneDay);
};
