const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", (req, res) => {
  res.render("index", {
    title: "Express",
    change: "Add manual approval to CodePipeline",
    port: process.env.PORT
  });
});

module.exports = router;
