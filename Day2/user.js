const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
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
  }
  if (req.url.toLowerCase() === "/submit-details" && "POST") {
    fs.writeFileSync("user.txt", "chinmayee mohanty");
    res.statusCode=302;
    res.setHeader('Location','/')
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
});
const PORT = 3001;
server.listen(PORT, () => {
  console.log(`server is running on address http://localhost:${PORT}`);
});
