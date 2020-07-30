const http = require("http");
console.log("step 1")

http.createServer(
    (req,res) => {
        const path = req.url.toLowerCase();
            switch(path) {
            case '/':
                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.end('Home page');
                break;
            case '/about':
                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.end('About page');
                break;
            default:
                res.writeHead(404, {'Content-Type': 'text/plain'});
                res.end('Not found');
                break;
            }
         console.log("step 2")
    res.writeHead(200, {'Content-Type': 'tex/plain'});
    res.end("Aloha World");
    }
).listen(process.env.PORT || 3000);

console.log("step 3")
