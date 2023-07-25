console.log("Hello World");

const express = require("express");
const app = express();
const PORT = 3000;
app.get("/", (req, res) => {
  res.send("HELLO WORLD FROM BROWSER");
});
app.listen(PORT, () => {
  console.log("App listening on PORT: " + PORT);
});
