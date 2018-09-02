const jwt = require("jsonwebtoken");
const axios = require("axios");

const CLASH_API_KEY = process.env.CLASH_API_KEY;

module.exports = async function(fastify, opts, next) {
  fastify.get("/", async function(request, reply) {
    try {
      // Some promise if u want
      return { cards: true, serverTime: new Date() };
    } catch (err) {
      reply.code(500).send(`Please contact support ${err.message}`);
    }
  });
};
