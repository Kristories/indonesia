"use strict";

var Document = require('camo').Document;
var Province = require('./Province');

class City extends Document {
  constructor() {
    super();

    this.name     = String;
    this.province = Province;
  }

  static collectionName() {
    return 'cities';
  }
}

module.exports = City;
