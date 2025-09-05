const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8000;
const code = require('./pair');

require('events').EventEmitter.defaultMaxListeners = 500;

const __path = process.cwd();

// Middleware first
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/code', code);

app.get('/pair', (req, res) => {
  res.sendFile(path.join(__path, 'pair.html'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__path, 'main.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`
Don't Forget To Give Star ‼️

𝙽𝙾𝚅𝙰-𝚇 𝙼𝙸𝙽𝙸 𝙱𝙾𝚃 𝚂𝚈𝚂𝚃𝙴𝙼
𝙽𝙾𝚅𝙰-𝚇 [𝙻𝙴𝙶𝙴𝙽𝙳 𝙾𝙵 𝚁𝚄𝙸𝙽)

Server running on http://localhost:${PORT}
`);
});
