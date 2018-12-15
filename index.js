const http = require('http');
const port = process.env.PORT || 3000;

var fs = require('fs');

const server = http.createServer((req, res) => {
    

    if (req.url === "/cool") {
        fs.readFile("cool.html", (err, data) => {
            if (err) {
                res.writeHead(404);
                res.write("Not Found!");
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
                res.end();
            }
        });
    } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>This is the default response!</h1>');
    }
});
server.listen(port, () => {
    console.log('Server running at port ' + port);
})