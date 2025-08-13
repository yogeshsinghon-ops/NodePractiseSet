const http = require("http");
const fs=require("fs");
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  if (req.url === "/home") {
    res.write(`<html> 
        <head>
           <b>Wel Come to Home Page</b>
        </head>        
        </html>`);
    return res.end();
  } else if (req.url === "/male") {
    res.write(`<html> 
        <head>
           <b>Wel Come to Male Page</b>
        </head>        
        </html>`);
    return res.end();
  } else if (req.url === "/female") {
    res.write(`<html>
             <head>
           <b>Wel Come to Femal Page</b>
        </head>
            
            </html>`);
    return res.end();
  } else if (req.url === "/kids") {
    res.write(`<html>
             <head>
           <b>Wel Come to Kids Page</b>
        </head>
            
            </html>`);
    return res.end();
  } else if (req.url === "/cart") {
    res.write(`<html>
           <head>
           <b>Wel come to cart secton</b>
           
           </head>
        </html>`);

    return res.end();

  } 

  res.write(`<html>
<head>
    
   
    <title>Myntra</title>
</head>
<body>
    <head>
        <nav>
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/male">Male</a></li>
                <li><a href="/female">Female</a></li>
                <li><a href="/kids">Kids</a></li>
                <li><a href="/cart">Cart</a></li>
            </ul>
        </nav>
    </head>
    
</body>
</html>`);
  return res.end();
});

//console.log(server);
const port = 3008;
server.listen(port, () => {
  console.log(`server running on : http://localhost:${port}`);
});
