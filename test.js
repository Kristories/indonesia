var chai      = require('chai');
var assert    = chai.assert;
var indonesia = require('.');

describe('indonesia', function() {

  it("getProvinces()", function(done) {
    indonesia.getProvinces(function(res){
      try {
        assert.lengthOf(res, 34);
        done();
      } catch (x) {
        done(x);
      }
    });
  });

  it("getProvince('Aceh')", function(done) {
    indonesia.getProvince('Aceh', function(res){
      try {
        assert.equal(res.iso, 'AC')
        done();
      } catch (x) {
        done(x);
      }
    });
  });

  it("getProvince('aceh', true)", function(done) {
    indonesia.getProvince('aceh', true, function(res){
      try {
        assert.lengthOf(res.cities, 23);
        done();
      } catch (x) {
        done(x);
      }
    });
  });

  it("searchProvince('Riau')", function(done) {
    indonesia.searchProvince('Riau', function(res){
      try {
        assert.lengthOf(res, 2);
        done();
      } catch (x) {
        done(x);
      }
    });
  });

  it("getCities()", function(done) {
    indonesia.getCities(function(res){
      try {
        assert.lengthOf(res, 514);
        done();
      } catch (x) {
        done(x);
      }
    });
  });

  it("getCity('Kota Kediri')", function(done) {
    indonesia.getCity('Kota Kediri', function(res){
      try {
        assert.equal(res.province, 'Jawa Timur');
        done();
      } catch (x) {
        done(x);
      }
    });
  });

  it("searchCity('bEk')", function(done) {
    indonesia.searchCity('bEk', function(res){
      try {
        assert.lengthOf(res, 2);
        done();
      } catch (x) {
        done(x);
      }
    });
  });

});
