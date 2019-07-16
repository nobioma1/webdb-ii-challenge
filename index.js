const express = require('express');
const server = require('./api/server');

const PORT = 4000;

server.listen(PORT, () => {
  console.log(`server live on port ${PORT}`);
});
