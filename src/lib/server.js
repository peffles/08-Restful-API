'use strict';

const http = require('http');
const logger = require('./logger');
const router = require('./router');
require('../route/redPanda-router');

const app = http.createServer(router.findAndExecuteRoutes);

const server = module.exports = {};

server.start = (port = 3000) => {
  return app.listen(port, () => {
    logger.log(logger.INFO, `Server is up and listening on PORT: ${port}`);
  });
};
