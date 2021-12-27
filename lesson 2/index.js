const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = 'localhost';
const port = 3000;


const server = http.createServer((req, res) => {
  if(req.method == 'GET'){
    var fileurl;
    if(req.url == '/') fileurl = '/index.html';
    else fileurl = req.url;
    var filePath = path.resolve('./public/'+fileurl);
    const fileExt = path.extname(filePath);
    if(fileExt == '.html')
    {
      fs.exists(filePath, (exists) => {
        if(!exists)
        {
          res.statusCode = 404;
          res.setHeader('Content-Type', 'text/html');
          res.end("<html><body>Error 404:"+req.method+" not supported</body></html>");
        }
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream(filePath).pipe(res);
      })
    }
    else{
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/html');
      res.end("<html><body>Error 999: "+fileurl+" is not a html file.</body></html>");
    }
  }
  else{
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.end("<html><body>Error 404:"+req.method+" not supported</body></html>");
  }
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});