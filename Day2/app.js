const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>chinmayee mohanty</title></head>");
    res.write("<body><h1>Welcome to home</h1></body>");
    res.write("</head>");
    return res.end();
  } else if (req.url === "/about") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>About</title></head>");
    res.write("<body><h1>Know About Me</h1></body>");
    res.write("</head>");
    return res.end();
  } else if (req.url === "/skills") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>skills</title></head>");
    res.write("<body><h1>Skills</h1></body>");
    res.write("</head>");
    return res.end();
  } else if (req.url === "/project") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>project</title></head>");
    res.write("<body><h1>Know about my project</h1></body>");
    res.write("</head>");
    return res.end();
  } else if (req.url === "/explore") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>explore</title></head>");
    res.write("<body><h1>explore my latest work</h1></body>");
    res.write("</head>");
    return res.end();
  } else {
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
