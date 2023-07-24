console.log("Hello World");

const { v4: uuidv4 } = require("uuid");

// import { v4 as uuidv4 } from "uuid";
//this pattern of using packages or modules is called Common JS
//It allows us users to assign our modules functions to variable
//Where the package-name is inside the close and open parenthesis right after the keyword, "require"

console.log(uuidv4());
//function call
