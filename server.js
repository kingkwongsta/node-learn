const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  console.log("hello world");
  res.render("index");
});

const userRouter = require("./routes/users");

app.use("/users/", userRouter);

app.listen(3001);
