'use strict';

const RedPanda = require('../model/redPanda');
const app = require('../lib/router');
const logger = require('../lib/logger');

const redPandastorage = [];

const sendStatus = (statusCode, message, response) => {
  logger.log(logger.INFO, `Responding with a ${statusCode} status code due to ${message}`);
  response.writeHead(statusCode);
  response.end();
};

const sendJSON = (statusCode, data, response) => {
  logger.log(logger.INFO, `Responding with a ${statusCode} status and the following data`);
  logger.log(logger.INFO, JSON.stringify(data));

  response.writeHead(statusCode, { 'Content-Type': 'application/json' });
  response.write(JSON.stringify(data));
  response.end();
};

app.post('/api/redPandas', (request, response) => {
  if (!request.body) {
    sendStatus(400, 'Body not found', response);
    return undefined;
  }
  if (!request.body.name) {
    sendStatus(400, 'Name not found', response);
    return undefined;
  }

  if (!request.body.description) {
    sendStatus(400, 'Description not found', response);
    return undefined;
  }
  const panda = new RedPanda(request.body.name, request.body.description);
  redPandastorage.push(panda);
  sendJSON(200, panda, response);
  return undefined;
});
