const ws = new WebSocket('ws://localhost:8080');
ws.onopen = () => {
  ws.send('Hello server');
};
ws.onerror = (error) => {
  console.error(error);
};
ws.onclose = () => {
  console.log('Connection closed.');
};
ws.onmessage = (data) => {
  console.log(data);
};
