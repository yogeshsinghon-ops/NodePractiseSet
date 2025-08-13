const http=require('http');
const fs=require('fs');
const { text } = require('stream/consumers');


const server=http.createServer((req,res)=>{
   // console.log(req.url,req.method,req.headers,req.method);
    if(req.url==='/'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head> <title>Complete Codding</title></head>');
        res.write('<body>Ente your Detail</body>');
        res.write('<form  action="/submitDetails" method="POST">');
        res.write('<input Type="text" name="username" placeholder="Enter your Name"></br>');
        res.write('<label for="gender">Gender</label>');
        res.write('<input type="radio" name="gender" id="male" value="male">');
        res.write('<label for="male" >Male</label>');
        res.write('<input type="radio" id="female" name="gender" value="female">');
        res.write('<label for="female"> Female </label>');
        res.write('<button type="submit" value="submit"> Submit</button>');
        res.write('</form>');
        res.write('</html>'); 
        return res.end();  
    }  
else  if(req.url ==='/submitDetails' ){
    const body=[];
    req.on("data",chunk=>{
        console.log(chunk);
        body.push(chunk);

    });

    req.on("end",()=>{
                const parsebody=Buffer.concat(body).toString();
                console.log(parsebody);
                const params=new URLSearchParams(parsebody);
                //const jsonObject={};

               //for(const [key,value] of params.entries()){
                //    jsonObject[key]=value;
                //}


                const jsonObject=Object.fromEntries(params);
                console.log(jsonObject);
                const jsonStringyfy=JSON.stringify(jsonObject);
                console.log(jsonStringyfy);

                fs.writeFileSync("Danish.txt", jsonStringyfy );

    });
               //fs.writeFileSync("6Danish.txt","Yogesh Singh");
               res.statusCode = 302;
               res.setHeader('Location','/');

             
        }
            res.setHeader('Content-Type','text/html');
                res.write('<html>');
                res.write('<head> <title>Complete Codding</title></head>');
                res.write('<body>Like Share Subscribe</body>');
                
        
                res.write('</html>'); 

                return res.end(); 
    
    
    }  );

const Port=3000;
server.listen(Port,()=>{
   console.log(`server is running at http://localhost:${Port}`);
});

//module.exports=requestHandler;