const app = require("../app.js");
const expect = require("chai").expect;
const request = require("supertest");

it("should send back a status 200", function() {
  request(app)
    .get("/")
    .set("Content-Type", "application/json")
    .expect("Content-Type", /json/)
    .expect(200, function(err, res) {
      expect(res.statusCode).to.equal(200);
    });
});
