const Fastify = require("fastify");
const App = require("../../app");

describe("GET /player", () => {
  const fastify = Fastify({
    logger: true
  });
  fastify.register(App);
  afterAll(() => {
    fastify.close();
  });

  test("Fail when no player tag", async done => {
    const res = await fastify.inject({
      method: "GET",
      url: "/api/player"
    });
    expect(res.statusCode).toBe(200);
    done();
  });

  test("get player stats with valid player tag", async done => {
    try {
      const playerTag = "#2YR0YURJV";
      // /api/player?playerTag=%232YR0YURJV
      const encodedPlayerTag = "%232YR0YURJV";
      const res = await fastify.inject({
        method: "GET",
        url: `/api/player?playerTag=${encodedPlayerTag}`
      });
      expect(res.statusCode).toBe(200);
      expect(res.player.tag).toBe(playerTag);
      done();
    } catch (e) {
      done();
    }
  });
});
