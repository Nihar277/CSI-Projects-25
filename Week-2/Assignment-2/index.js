const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    const query = parsedUrl.query;

    // Set response header
    res.setHeader('Content-Type', 'text/plain');

    if (pathname === '/create') {
        const filePath = path.join(__dirname, query.filename);
        fs.writeFile(filePath, query.content || '', (err) => {
            if (err) {
                res.statusCode = 500;
                return res.end('Error creating file');
            }
            res.end('File created successfully');
        });

    } else if (pathname === '/read') {
        const filePath = path.join(__dirname, query.filename);
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                res.statusCode = 404;
                return res.end('File not found');
            }
            res.end(data);
        });

    } else if (pathname === '/delete') {
        const filePath = path.join(__dirname, query.filename);
        fs.unlink(filePath, (err) => {
            if (err) {
                res.statusCode = 404;
                return res.end('File not found or already deleted');
            }
            res.end('File deleted successfully');
        });

    } else {
        res.statusCode = 400;
        res.end('Invalid endpoint. Use /create, /read, or /delete');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at Port ${PORT}`);
});
