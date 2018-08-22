const Fastify = require("fastify");
const App = require("../../app");

describe("GET /player/{playerTag}", () => {
  const fastify = Fastify();
  fastify.register(App);
  afterAll(() => {
    fastify.close();
  });

  test("Get player profile", async done => {
    const res = await fastify.inject({
      method: "GET",
      url: "/player"
    });
    expect(res.statusCode).toBe(200);
    expect(JSON.parse(res.payload).cards.length).toBeGreaterThan(0);
    done();
  });
});
