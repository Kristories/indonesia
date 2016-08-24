"use strict";

var Document = require('camo').Document;

class Province extends Document {
  constructor() {
    super();

    this.name   = String;
    this.iso    = String;
  }

  static collectionName() {
    return 'provinces';
  }
}

module.exports = Province;
