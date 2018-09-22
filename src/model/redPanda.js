'use strict';

const uuid = require('uuid/v1');

class RedPanda {
  constructor(name, description) {
    this.id = uuid();
    this.timestamp = new Date();

    this.name = name;
    this.description = description;
  }
}

module.exports = RedPanda;
