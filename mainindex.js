const server = require('http');
const fs = require('fs');

const serverPort = 8081;
const serverHost = "127.0.0.1"
const myServer = server.createServer((req, res) => {

    const readyFile = (statusCode,fileLocation) =>{
        fs.readFile(fileLocation, (err, data) => {
            res.writeHead(statusCode, {
                'Content-Type': 'text/html'
            });
            res.write(data);
            res.end();
        })
    }

    if (req.url == '/') {
        readyFile(200,"./views/index.html");
    }
    if (req.url == '/about') {
        readyFile(200,"./views/about.html");
    }
    if (req.url == '/contact') {
        readyFile(200,"./views/contact.html");
    }

});

myServer.listen(serverPort, serverHost, () => {
    console.log(`Server is runnig at http://${serverHost}:${serverPort}`);
});