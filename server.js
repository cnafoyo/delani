let http = require('http');
let url = require('url');
let start = function (route,handle) {

    function onRequest(request, response) {
        let pathname = url.parse(request.url).pathname
        console.log("Request for" + pathname + "has been recieved.")

        route(handle,pathname);

        response.writeHead(200, { "content-type": "text/plain" });
        response.write("Hello World");
        response.end();
    }
    http.createServer(onRequest).listen(8003);
    console.log("Server has Started.")
}
exports.start = start;