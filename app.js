const http=require('http');
const requestHandler=require('./index');
const server=http.createServer(requestHandler);
const Port=3000;
server.listen(Port,()=>{
    console.log(`server is running at http://localhost:${Port}`);
});