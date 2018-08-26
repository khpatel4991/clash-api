const Fastify = require("fastify");
const App = require("../../app");

describe("GET /player", () => {
  const fastify = Fastify();
  fastify.register(App);
  afterAll(() => {
    fastify.close();
  });

  test("Fail when no player tag", async done => {
    const res = await fastify.inject({
      method: "GET",
      url: "/player"
    });
    expect(res.statusCode).toBe(422);
    done();
  });

  test("get player stats with valid player tag", async done => {
    const playerTag = "%232YR0YURJV";
    const res = await fastify.inject({
      method: "GET",
      url: `/player?playerTag=%232YR0YURJV`
    });
    console.info(res.payload);
    expect(res.statusCode).toBe(200);
    done();
  });
});
