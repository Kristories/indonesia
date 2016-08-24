"use strict";

var Document = require('camo').Document;

class City extends Document {
  constructor() {
    super();

    this.name = String;
  }

  static collectionName() {
    return 'cities';
  }
}

module.exports = City;
