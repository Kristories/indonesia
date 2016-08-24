"use strict";

var database;
var connect       = require('camo').connect;
var dataPath      = __dirname + '/data';
var uriConnection = 'nedb://' + dataPath;
var ProvinceModel = require('./models/Province');
var CityModel     = require('./models/City');
var _             = require('underscore');
var async         = require('async');

/**
 * Get provinces
 * @param  {Function} callback
 * @return {Array}
 */
exports.getProvinces = (callback) => {
  connect(uriConnection).then(function(db) {
    var res   = [];
    database  = db;
    ProvinceModel.find({}, { populate : false }).then(function(p) {
      async.eachOf(p, function(value, key, cb) {
        res.push(_.pick(value, 'name', 'iso'));
        cb();
      }, function(err) {
        callback(_.sortBy(res, 'name'));
      });
    }).catch(err => {
      callback(err);
    });
  }).catch(err => {
    callback(err);
  });
};

/**
 * Get province by name
 * @param  {String}   name
 * @param  {Boolean}  withCities
 * @param  {Function} callback
 * @return {Object}
 */
exports.getProvince = (name, withCities, callback) => {
  if(Object.prototype.toString.call(withCities) == "[object Function]"){
    callback    = withCities;
    withCities  = false;
  }
  else{
    withCities  = _.isBoolean(withCities) ? withCities : false;
  }

  connect(uriConnection).then(function(db) {
    var cities  = [];
    database    = db;

    ProvinceModel.findOne({ name : new RegExp(name, 'i') }).then(function(p) {
      if(withCities){
        CityModel.find({ province: p._id }, { populate : false }).then(function(c) {
          async.eachOf(c, function(value, key, cb) {
            cities.push(_.pick(value, 'name'));
            cb();
          }, function(err) {
            p.cities = _.sortBy(cities, 'name');
            callback(_.pick(p, 'name', 'iso', 'cities'));
          });
        });
      }
      else {
        callback(_.pick(p, 'name', 'iso'));
      }
    });
  }).catch(err => {
    callback(err);
  });
};
