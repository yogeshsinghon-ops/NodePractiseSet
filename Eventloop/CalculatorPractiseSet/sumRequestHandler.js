const sumRequestHandlers=(req,res)=>{
    console.log("In Sum Requiest",req.url);
    const body=[];
    req.on('data',(chunk)=>{
          body.push(chunk);
    });
    req.on('end',()=>{
        const fullbody=Buffer.concat(body).toString();
        const params=new URLSearchParams(fullbody);
         const bodyObject=Object.fromEntries(params);
           console.log(bodyObject);
         const result=parseInt(bodyObject.first) + parseInt(bodyObject.second);
         console.log(result);
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

exports.sumRequestHandlers=sumRequestHandlers;
