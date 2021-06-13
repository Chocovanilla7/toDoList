const express = require("express");

const app = express();
var items = [];

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const date = new Date();

  const option = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  var Day = date.toLocaleDateString("us-en", option);

  res.render("list", { TodayDay: Day, ITEMS: items });
});

app.post("/", (req, res) => {
  console.log(res.statusCode);
  items.push(req.body.item);
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("server is up and running on port 3000");
});
