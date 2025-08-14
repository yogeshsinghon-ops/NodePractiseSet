const http=require('http');
const fs=require('fs');
const { text } = require('stream/consumers');

//console.log(http);


const requestHandler=(req,res)=>{
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
    req.on("data",(chunk)=>{
        console.log(chunk);
        body.push(chunk);

    });

    req.on("end",()=>{
                const parsebody=Buffer.concat(body).toString();
                console.log(parsebody);
                const params=new URLSearchParams(parsebody);
                //const jsonObject={};

               // for(const [key,value] of params.entries()){
                 //   jsonObject[key]=value;
                //}

                const bodyObject=Object.fromEntries(params);
                //console.log(jsonObject);
                const jsonStringyfy=JSON.stringify(bodyObject);
                console.log(jsonStringyfy);

                //fs.writeFileSync("userDetailff3631.txt", jsonStringyfy);
                fs.writeFile('User.txt',jsonStringyfy,error=>{
                    console.log("Sucessfully return");
                    res.statusCode=302;
                    res.setHeader('Location','/');
                    return res.end();
                });

        });
               //fs.writeFileSync("userDetail4.txt","Yogesh Singh");
               // res.statusCode = 302;
             //  res.setHeader('Location','/');

             
    } else{
            res.setHeader('Content-Type','text/html');
                res.write('<html>');
                res.write('<head> <title>Complete Codding</title></head>');
                res.write('<body>Like Share Subscribe</body>');
                
        
                res.write('</html>'); 

                return res.end(); 
    
        }
            
    
    }  ;




module.exports=requestHandler;