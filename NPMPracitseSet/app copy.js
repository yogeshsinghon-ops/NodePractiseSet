const http=require('http');
//const requestHandler=require('./index');
const server=http.createServer((req,res)=>{
    console.log(req);
});
const Port=3000;
server.listen(Port,()=>{
    console.log(`server is running at http://localhost:${Port}`);
});