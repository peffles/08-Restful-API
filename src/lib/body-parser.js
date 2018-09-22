'use strict';

const url = require('url');
const queryString = require('querystring');
const logger = require('./logger');

const bodyParser = module.exports = {};

bodyParser.parseAsync = (request) => {
  return new Promise((resolve, reject) => {
    logger.log(logger.INFO, `Original URL: ${request.url}`);
    request.url = url.parse(request.url);
    request.url.query = queryString.parse(request.url.query);

    console.log(request.url);
    console.log(request.url.query);

    if (request.method !== 'POST' && request.method !== 'PUT') {
      return resolve(request);
    }
    let completeBody = '';
    request.on('data', (buffer) => {
      completeBody += buffer.toString();
    });
    request.on('end', () => {
      try {
        request.body = JSON.parse(completeBody);
        return resolve(request);
      } catch (error) {
        return reject(error);
      }
    });
    return undefined;
  });
};
