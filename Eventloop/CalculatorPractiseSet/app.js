const http=require("http");
const requestHAndler=require("./requestHandler");
const server=http.createServer(requestHAndler);

const port=3005;
 server.listen(port,()=>{
    console.log(`your server is Running on http://localhost:${port}`); 
 });