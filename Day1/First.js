console.log("hello world");
const fs = require("fs");

fs.writeFile("out.txt", "hey it's a text file", (err) => {
  if (err) {
    console.log("Error occurred");
  } else {
    console.log("file written successfully");
  }
});
