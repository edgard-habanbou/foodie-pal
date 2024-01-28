const request = require("supertest");
const app = require("../index");

describe("User Tests", () => {
  let userToken;
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
    userToken = res.body.token;
  });

  it("Logs in a user successfully", async () => {
    const userCredentials = {
      email: "test@example.com",
      password: "testpassword",
    };

    const res = await request(app).post("/auth/login").send(userCredentials);

    expect(res.status).toBe(200);
    expect(res.body.token).toBeDefined();
    expect(res.body.user).toBeDefined();
    userToken = res.body.token;
  });

  it("Returns an error if email is missing", async () => {
    const userCredentials = {
      password: "testpassword",
    };

    const res = await request(app).post("/auth/login").send(userCredentials);

    expect(res.status).toBe(400);
    expect(res.body.message).toBe("all fields are required");
  });

  it("Returns an error if email is invalid", async () => {
    const userCredentials = {
      email: "invalidemail",
      password: "testpassword",
    };

    const res = await request(app).post("/auth/login").send(userCredentials);

    expect(res.status).toBe(400);
    expect(res.body.message).toBe("Invalid email");
  });

  it("Returns user information for valid token", async () => {
    const res = await request(app)
      .post("/auth/check")
      .send({ token: userToken });

    expect(res.status).toBe(200);
    expect(res.body.user).toBeDefined();
  });

  it("Returns an error message for missing token", async () => {
    const res = await request(app).post("/auth/check").send({});

    expect(res.status).toBe(400);
    expect(res.body.message).toBe("token is required");
  });

  it("Returns an error message for invalid token", async () => {
    const invalidToken = "invalid_token";

    const res = await request(app)
      .post("/auth/check")
      .send({ token: invalidToken });

    expect(res.status).toBe(400);
    expect(res.body.message).toBe("Invalid token");
  });

  it("should add or edit subDocument", async () => {
    const response = await request(app)
      .post("/subdocument")
      .set("Authorization", `Bearer ${userToken}`)
      .send({
        subDocument: {
          DietairyPreferences: {
            restrictions: "Vegetarian",
            allergies: "Nuts",
            cuisinePreferences: "lebanese",
            flavorPreferences: ["Sweet", "Spicy"],
          },
        },
      });

    expect(response.status).toBe(200);
    expect(response.body.updatedUser).toBeDefined();
  });

  it("should delete subDocument", async () => {
    const response = await request(app)
      .post("/subdocument/delete")
      .set("Authorization", `Bearer ${userToken}`)
      .send({
        subDocument: {
          DietairyPreferences: {},
        },
      });

    expect(response.status).toBe(200);
    expect(response.body.user).toBeDefined();
  });

  it("Deletes the current user", async () => {
    const res = await request(app)
      .delete("/profile/user")
      .set("Authorization", `Bearer ${userToken}`);

    expect(res.status).toBe(200);
    expect(res.body.message).toBe("User deleted");
  });
});

describe("Stats Tests", () => {
  let AdminToken;

  it("Logs in a Admin successfully", async () => {
    const adminCredentials = {
      email: "admin@gmail.com",
      password: "P@ssword123",
    };

    const res = await request(app)
      .post("/auth/login/admin")
      .send(adminCredentials);

    expect(res.status).toBe(200);
    expect(res.body.token).toBeDefined();
    expect(res.body.user).toBeDefined();
    AdminToken = res.body.token;
  });

  it("responds with stats when user is admin", async () => {
    const response = await request(app)
      .post("/stats/getstats")
      .set("Authorization", "Bearer " + AdminToken)
      .send();
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("role", "admin");
  });

  it("responds with 403 when user is not admin", async () => {
    const response = await request(app)
      .post("/stats/getstats")
      .set("Authorization", "Bearer " + AdminToken + "jsq")
      .send();
    expect(response.statusCode).toBe(403);
  });

  it("responds with users when user is admin", async () => {
    const response = await request(app)
      .post("/stats/getusers")
      .set("Authorization", "Bearer " + AdminToken)
      .send();
    expect(response.statusCode).toBe(200);
  });

  it("responds with 403 when user is not admin", async () => {
    const response = await request(app)
      .post("/stats/getusers")
      .set("Authorization", "Bearer " + AdminToken + "jsq")
      .send();
    expect(response.statusCode).toBe(403);
  });
});
