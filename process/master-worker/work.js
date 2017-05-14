let http = require('http');

let port  = Math.round((1+Math.random())*1000);
http.createServer(function (req, res) {
    console.log(process.pid);
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('hello world');
}).listen(port,function () {
console.log('---- server start port :'+port);
});