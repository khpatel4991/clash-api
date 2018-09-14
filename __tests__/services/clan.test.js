const Fastify = require("fastify");
const App = require("../../app");

describe("Clan Path /api/clan", () => {
  const fastify = Fastify();
  fastify.register(App);
  afterAll(() => {
    fastify.close();
  });

  test("Fail when no clan tag", async done => {
    const res = await fastify.inject({
      method: "GET",
      url: "/api/clan"
    });
    expect(res.statusCode).toBe(404);
    done();
  });

  test("get clan with valid clan tag", async done => {
    const clanTag = "%23G8C00J";
    const res = await fastify.inject({
      method: "GET",
      url: `/api/clan?clanTag=${clanTag}`
    });
    expect(res.statusCode).toBe(200);
    done();
  });
});
