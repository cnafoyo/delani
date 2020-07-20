let http = require('http');
let url = require ('url');
let start=function(){

function onRequest(request, response) {
    let pathname = url.parse(request.url).pathname
    console.log(pathname)
    console.log("Request recieved!");
    response.writeHead(200, { "content-type": "text/plain" });
    response.write("Hello World");
    response.end();
}
http.createServer(onRequest).listen(8003);
console.log("Server has Started.")
}
exports.start=start;