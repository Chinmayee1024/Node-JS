const fs = require("fs");
const { buffer } = require("stream/consumers");
const userRequestHandler = (req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>chinmayee mohanty</title></head>");
    res.write("<body><h1>Enter your details</h1>");
    res.write("<form action='/submit-details' method='POST'>");

    res.write(
      '<input type="text" name="user name" placeholder="username"><br>'
    );
    res.write('<label for="Gender">Gender:</label>');
    res.write(' <label for="male">Male</label>');
    res.write(' <input type="radio" id="male" name="gender" value="male">');
    res.write('<label for="female">Female</label>');
    res.write(
      ' <input type="radio" id="female" name="gender" value="female"><br>'
    );
    res.write('<button type="submit">Submit</button>');
    res.write("</form>");
    res.write("</body>");
    res.write("</head>");
    return res.end();
  } else if (req.url.toLowerCase() === "/submit-details" && "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const fullBody = Buffer.concat(body).toString();
      console.log(fullBody);
      const params = new URLSearchParams(fullBody);
      console.log(params);
      // const bodyObject = {};
      // for (const [key, value] of params.entries()) {
      //   bodyObject[key] = value;
      //   console.log(bodyObject);
      // }
      const bodyObject = Object.fromEntries(params);
      console.log(bodyObject);

      fs.writeFileSync("user.txt", JSON.stringify(bodyObject));
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
  }
  {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>chinmayee mohanty</title></head>");
    res.write("<body><h1>like share subscribe</h1></body>");
    res.write("</head>");
    return res.end();
  }

  // process.exit();  //stop event loop
};

module.exports = userRequestHandler;
 