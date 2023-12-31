const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

app.post('/jump', (req, res) => {
  const { message } = req.body;

  // Do something with the information about the button press
  console.log('Action:', message);

  // Send a response if needed
  res.json({ message: 'Button press received successfully' });
});


// Inicie o servidor

server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
