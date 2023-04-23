const http = require('http');

const data = `[
    { "id": 1, "name": "Product A", "type": 1, "baseCost": 5, "additionalKwhCost": 22 },
    {
      "id": 2,
      "name": "Product B",
      "type": 2,
      "baseCost": 800,
      "additionalKwhCost": 30,
      "includedKwh": 4000
    }
  ]`;

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/electricity-tariffs') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(data);
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Endpoint Not Found' }));
  }
});

server.listen(3400, () => {
  console.log('Server is listening on port 3400');
});
