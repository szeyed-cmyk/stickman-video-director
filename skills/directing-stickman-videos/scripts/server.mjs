import http from 'node:http';

const port = process.env.PORT || 10000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('ok');
});

server.listen(port, '0.0.0.0', () => {
  console.log(`Stickman runtime ready on port ${port}`);
});
