const Fastify = require("fastify");
const App = require("../../app");

describe("GET /cards", () => {
  const fastify = Fastify();
  fastify.register(App);
  afterAll(() => {
    fastify.close();
  });

  test("Get list of cards", async done => {
    const res = await fastify.inject({
      method: "GET",
      url: "/cards"
    });
    expect(res.statusCode).toBe(200);
    expect(JSON.parse(res.payload).cards.length).toBeGreaterThan(0);
    done();
  });
});
