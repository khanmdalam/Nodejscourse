const { createServer } = require('node:http');
const fs=require('fs');

const hostname = '127.0.0.1';

const port = 4000;

const server = createServer((req, res) => {
  console.log(req.url);
   if(req.url=='/about'){
    res.statusCode=200;
    const data =fs.readFileSync('index.html');
    res.end(data.toString());
  }

  // if(req.url=='/'){
  //   res.statusCode=200;
  //   res.end("hi , noor alam");

  // }

  else if(req.url=='/home'){
    res.statusCode=200;
    res.end("hi kaif and noor ");

  }

  else if(req.url=='/aboutss'){
    res.statusCode=200;
    const data =fs.readFileSync('index.html');
    res.end(data.toString());
  }
  
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
 // res.end('<h1> this is noor alam </h1>');
 //res.end( " this is noor alam");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
