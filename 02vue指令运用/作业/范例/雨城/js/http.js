const http = require('http');

let app = http.createServer((req, res) => {
    res.writeHead(200,{ 'content-Type': 'text/html;charset=utf-8' });
    res.write('fighting');
    res.end();
});

app.listen(7001);