"use strict";

const { test } = require("tap");
const Fastify = require("fastify");
const App = require("../../app");

test("default root route", async t => {
  const fastify = Fastify();
  fastify.register(App);

  const res = await fastify.inject({
    url: "/"
  });
  t.deepEqual(JSON.parse(res.payload), { root: true });
});
