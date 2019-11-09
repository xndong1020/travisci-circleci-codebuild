var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", {
    title: "Express",
    change: "Add manual approval to CodePipeline",
    port: process.env.PORT
  });
});

module.exports = router;
