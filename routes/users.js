const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("user list");
});
router.get("/new", (req, res) => {
  res.send("user form");
});

router
  .route("/:id")
  .get((req, res) => {
    res.send(`Get the user ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Update the user ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete the user ${req.params.id}`);
  });

module.exports = router;
