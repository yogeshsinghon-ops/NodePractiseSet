const subtractHandler=(req,res)=>{

    console.log("In the Subract Request",req.url);
    const body=[];
    let result;
    req.on('data',(chunk)=>{
        console.log(chunk);
        body.push(chunk);
        
    });
    req.on("end",()=>{
       const subBody= Buffer.concat(body).toString();
       console.log(subBody);
      const jsonBody= new URLSearchParams(subBody);
      console.log(jsonBody);
      const fullbody=Object.fromEntries(jsonBody);
      console.log(fullbody);
      result=parseInt(fullbody.first) - parseInt(fullbody.second);
      console.log(result);
      res.setHeader("Content-Type", "text/html");
      res.write(`<html">
                    <head> 
                          <title>Welcome to calculator</title>
                    </head>
                    <body>
                            <h1>Your Subtract result is Here ${result}</h1>
                            
                    </body>
               </html>`);
    });




}
exports.subtractHandler=subtractHandler;