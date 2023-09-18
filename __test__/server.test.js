const { expect } = require("@jest/globals");
const request = require("supertest");

describe("Testing Express Server", () => {
  const app = require("../src/server/server");

  const baseURL = "http://localhost:8080";

  test("should return 200", async () => {
    const response = await request(app).get("/test");

    expect(response.statusCode).toEqual(200);
    expect(response.body).toHaveProperty("status");
  });
});
