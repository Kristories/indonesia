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
    database    = db;
    var cities  = [];
    var query = {
      name : {
        $regex : new RegExp('^'+ name.toLowerCase() + '$', 'i')
      }
    };

    ProvinceModel.findOne(query).then(function(p) {
      if(p){
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
      } else {
        callback({});
      }
    });
  }).catch(err => {
    callback(err);
  });
};

/**
 * Search province
 * @param  {String}   name
 * @param  {Function} callback
 * @return {Array}
 */
exports.searchProvince = (name, callback) => {
  connect(uriConnection).then(function(db) {
    database  = db;
    var res   = [];
    var query = {
      name : new RegExp(name, 'i')
    };

    ProvinceModel.find(query, { populate : false }).then(function(p) {
      async.eachOf(p, function(value, key, cb) {
        res.push(_.pick(value, 'name', 'iso'));
        cb();
      }, function(err) {
        callback(_.sortBy(res, 'name'));
      });
    });
  }).catch(err => {
    callback(err);
  });
};

/**
 * Get cities and regencies
 * @param  {Function} callback
 * @return {Array}
 */
exports.getCities = (callback) => {
  connect(uriConnection).then(function(db) {
    var res   = [];
    database  = db;

    CityModel.find({}, { populate : true }).then(function(p) {
      async.eachOf(p, function(value, key, cb) {
        var pr      = _.pick(value, 'province');
        var ci      = _.pick(value, 'name');
        ci.province = pr.province.name;

        res.push(ci);
        cb();
      }, function(err) {
        callback(_.chain(res).sortBy('name').sortBy('province').value());
      });
    }).catch(err => {
      callback(err);
    });
  }).catch(err => {
    callback(err);
  });
};

/**
 * Get city or regency by name
 * @param  {String}   name
 * @param  {Function} callback
 * @return {Object}
 */
exports.getCity = (name, callback) => {
  connect(uriConnection).then(function(db) {
    database  = db;
    var query = {
      name : {
        $regex : new RegExp('^'+ name.toLowerCase() + '$', 'i')
      }
    };

    CityModel.findOne(query, { populate : true }).then(function(p) {
      if(p){
        var pr      = _.pick(p, 'province');
        var ci      = _.pick(p, 'name');
        ci.province = pr.province.name;

        callback(ci);
      } else {
        callback({});
      }
    }).catch(err => {
      callback(err);
    });
  }).catch(err => {
    callback(err);
  });
};
