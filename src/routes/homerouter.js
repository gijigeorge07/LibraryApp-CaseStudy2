const express = require("express");
const homeRouter = express.Router();

// Part #2 Point 6

function router(nav) {
  homeRouter.get("/", function (req, res) {
    res.render("home", { nav });
  });

  return homeRouter;
}

module.exports = router;
