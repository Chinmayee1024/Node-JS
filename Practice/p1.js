const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/home") {
    res.write("<h1>WElcome to home page</h1>");
    return res.end();
  } else if (req.url === "/men") {
    res.write("<h1>WElcome to men section page</h1>");
    return res.end();
  } else if (req.url === "/women") {
    res.write("<h1>WElcome to women section page</h1>");
    return res.end();
  } else if (req.url === "/kids") {
    res.write("<h1>WElcome to kids section page</h1>");
    return res.end();
  } else if (req.url === "/cart") {
    res.write("<h1>WElcome to cart</h1>");
    return res.end();
  }

  res.write(
    `
   <!DOCTYPE html>
<html lang="en">
<head>
 <style>

 </style>
    <title>Myntra</title>
</head>
<body>
    <head>
        <nav>
            <ul>
                <li> <a href="/home">Home</a> </li>
                <li> <a href="/men">Men</a></li>
                <li> <a href="/women">Women</a></li>
                <li> <a href="/kids">Kids</a></li>
                <li> <a href="/cart">Cart</a></li>
            </ul>
        </nav>
    </head>
</body>
</html>
    
    `
  );
});
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Your server is listening on address http://localhost:${PORT}`);
});
