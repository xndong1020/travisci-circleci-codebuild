const app = require("../app.js");
const expect = require("chai").expect;
const request = require("supertest");

it(`should send back a text with content equals to 'respond with a resource'`, function() {
  request(app)
    .get("/users")
    .set("Content-Type", "application/json")
    .expect("Content-Type", /json/)
    .expect(200, function(err, res) {
      expect(res.text).to.equal("respond with a resource");
    });
});
