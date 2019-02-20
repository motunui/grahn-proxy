const path = require('path');
const express = require('express');
const config = require('./config');
const morgan = require('morgan');

const server = express();

server.use(morgan('dev'));
server.use('/', express.static(path.join(__dirname, '../public')));

server.disable('x-powered-by');

server.listen(config.PORT, () => {
  console.log(`Listening on port ${config.PORT}`);
});

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
