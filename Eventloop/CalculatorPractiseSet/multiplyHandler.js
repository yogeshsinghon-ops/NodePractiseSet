const multiplyHandler=(req,res)=>{
    const body=[];
    req.on("data",(chunk)=>{
        body.push(chunk);
    });

    req.on("end",()=>{
        const multiString=Buffer.concat(body).toString();
       const bodyJson= new URLSearchParams(multiString);
       const fullBody=Object.fromEntries(bodyJson);
       const result=parseInt(fullBody.first) * parseInt(fullBody.second);
       res.setHeader("Content-Type", "text/html");
       res.write(`<html">
                    <head> 
                          <title>Welcome to calculator</title>
                    </head>
                    <body>
                            <h1>Your result is Here ${result}</h1>
                            
                    </body>
               </html>`);
    });

}
exports.multiplyHandler=multiplyHandler;