
'use strict';

const uuid = require('uuid/v1');

class Note {
  constructor(name, description) {
    this.id = uuid();
    this.timestamp = new Date();

    this.name = name;
    this.description = description;
  }
}

module.exports = Note;
