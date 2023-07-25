console.log("Hello World");

const express = require("express");
const app = express();
const PORT = 3000;
app.get("/", (req, res) => {
  res.send("HELLO WORLD FROM BROWSER");
});

app.post("/", (req, res) => {
  res.send("THIS IS A POST REQUEST 2.0");
});

app.listen(PORT, () => {
  console.log("App listening on PORT: " + PORT);
});
