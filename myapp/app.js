const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact page</h1>");
});

// "/con?tact" cotact & contact
// "/con+tact" connntact & contact
// "/con*tact" connnn123tact & contact

app.use((req, res, next) => {
  console.log("Проміжне ПЗ");
  next();
});
