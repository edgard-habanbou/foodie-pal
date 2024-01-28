const request = require("supertest");
const app = require("../index");

describe("Authentication Routes", () => {
  it("Registers a new user successfully", async () => {
    const newUser = {
      email: "test@example.com",
      password: "testpassword",
      firstName: "John",
      lastName: "Doe",
      gender: 0,
    };

    const res = await request(app).post("/auth/register").send(newUser);

    expect(res.status).toBe(200);
    expect(res.body.message).toBe("user created successfully");
    expect(res.body.user).toBeDefined();
    expect(res.body.token).toBeDefined();
  });
});
