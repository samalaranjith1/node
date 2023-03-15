 const http =require('http');

 const server =http.createServer((req,res)=>{
   if(req.url==='/'){
      res.end("welcome to our home page");
   }
   if(req.url==='/about'){
      res.end("welcome to our about page");
   }
   res.end(`
      <h1>Oops.., The page you are looking is not available</h1>
      <a href='/'>Back to home</a>`
   )
 })
 server.listen(5000)