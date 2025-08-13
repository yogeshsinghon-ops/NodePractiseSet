const {sumRequestHandlers}=require("./sumRequestHandler");
const {subtractHandler}=require("./subtractHandler");
const {multiplyHandler}=require("./multiplyHandler");

const requestHAndler = (req, res) => {
  console.log(req.url, req.method);
  if (req.url == "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<html">
                    <head> 
                          <title>Welcome to calculator</title>
                    </head>
                    <body>
                            WelCome to Calculator</br>
                             <a href="/calculator" > Go to Calculator</a> 
                            
                    </body>
               </html>`);
               return res.end();
  }
  else if(req.url ==='/calculator'){
         res.setHeader("Content-Type", "text/html");
         res.write(`<html>
                     <head>
                         <title>Calculator  Page</title>
                     </head>
                     <body>
                      <form action="/calculate-Addition" method="POST">
                           <input type="text" name="first" placeholder="First Number">
                           <input type="text" name="second" placeholder="Second NUmber">

                           <input type="submit" value="Addition">


                       </form>
                       <form action="/calculate-subtraction" method="POST">
                          <input type="text" name="first" placeholder="First Number">
                           <input type="text" name="second" placeholder="Second NUmber">

                           <input type="submit" value="Subtraction">
                       </form>
                       <form action="/calculate-multiplication" method="POST">
                          <input type="text" name="first" placeholder="First Number">
                           <input type="text" name="second" placeholder="Second NUmber">

                           <input type="submit" value="multiply">
                       </form>
             
                    </body>
                   </html>
            `);
         return res.end();
  }
  else if(req.url==='/calculate-Addition' && req.method=="POST"){
    return  sumRequestHandlers(req,res);
     
  }
  else if(req.url==="/calculate-subtraction" && req.method == "POST"){
   return subtractHandler(req,res);
  }
  else if(req.url==="/calculate-multiplication" && req.method=="POST"){
   return multiplyHandler(req,res);
  }


};
module.exports = requestHAndler;

//exports.requestHandler=requestHAndler;
