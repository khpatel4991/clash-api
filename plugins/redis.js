const fp = require("fastify-plugin");
const Redis = require("ioredis");

module.exports = fp(async function(fastify, opts, next) {
  let client = opts.client || null;
  const close = (fastify, done) => fastify.redis.quit(done);
  if (!client) {
    try {
      client = new Redis(opts);
    } catch (err) {
      return next(err);
    }
  }

  fastify.decorate("redis", client).addHook("onClose", close);
  next();
});
