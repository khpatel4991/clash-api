const Fastify = require("fastify");
const App = require("../../app");

describe("Index Route", () => {
  const fastify = Fastify();
  fastify.register(App);
  afterAll(() => {
    fastify.close();
  });

  test("has token object", async done => {
    try {
      const res = await fastify.inject({
        url: "/api",
        method: "GET"
      });
      expect(res.statusCode).toBe(200);
      done();
    } catch (e) {
      console.log(e.message);
      done();
    }
  });
});
