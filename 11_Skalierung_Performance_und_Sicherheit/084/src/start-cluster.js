const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  for (let i = 0; i < numCPUs; i++) {
    console.log(`Worker ${i + 1} started`);
    cluster.fork();
  }
  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
  });
} else {
  // Einzelne Worker teilen sich eine TCP-Verbindung
  http
    .createServer((request, response) => {
      console.log(
        `Worker ${cluster.worker.id} (${process.pid}) handle request`
      );
      const content = 'Hallo Welt';
      response.writeHead(200, {
        'Content-Length': content.length,
        'Content-Type': 'text/plain'
      });
      response.end(content);
      // Simulierter Absturz
      process.exit(1);
    })
    .listen(3000);
}
