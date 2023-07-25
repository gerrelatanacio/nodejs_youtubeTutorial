console.log("Hello World");

const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 3000;

const Customers = [
  {
    "name": "Gerrel Atanacio",
    "industry": "Information Technology",
    "occupation": "Software Engineer",
    "age": 30,
    "married": false,
  },
  {
    "name": "Levin de Leon",
    "industry": "Information Technology",
    "occupation": "Software Engineer",
    "age": 30,
    "married": false,
  },
  {
    "name": "Rosem Karl Palo",
    "industry": "Information Technology",
    "occupation": "Software Engineer",
    "age": 31,
    "married": false,
  },
];

app.get("/", (req, res) => {
  res.send("Welcome to HOME");
});

app.get("/api/customers", (req, res) => {
  res.send({ customers: Customers });
});

app.post("/api/customers", (req, res) => {
  console.log(req.body);
  //shows not on the browser console but on the server console
  res.send(req.body);
});

app.post("/", (req, res) => {
  res.send("THIS IS A POST REQUEST 2.0");
});

app.listen(PORT, () => {
  console.log("App listening on PORT: " + PORT);
});
