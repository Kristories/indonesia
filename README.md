# Indonesia

> Territories of Indonesia

[![NPM Version](https://img.shields.io/npm/v/indonesia.svg?maxAge=2592000)](https://www.npmjs.com/package/indonesia)
[![NPM Downloads](https://img.shields.io/npm/dt/indonesia.svg?maxAge=2592000)](https://www.npmjs.com/package/indonesia)

- **34** Provinces
- **416** Regencies
- **98** Cities
- **514** Regencies and Cities

## Installation

```js
$ npm install --save indonesia
```

### Usage

```js
var indonesia = require('indonesia');

// Get all provinces
indonesia.getProvinces(function(res){
  console.log(res);
});

// Get province by name
indonesia.getProvince('aceh', function(res){
  console.log(res);
});

// Get province by name (include cities and regencies)
indonesia.getProvince('aceh', true, function(res){
  console.log(res);
});

// Search province
indonesia.searchProvince('riau', function(res){
  console.log(res);
});

// Get all cities and regencies
indonesia.getCities(function(res){
  console.log(res);
});

// Get city or regency by name
indonesia.getCity('kota ADMINISTRASI jAkArtA SElataN', function(res){
  console.log(res);
});

// Search city or regency
indonesia.searchCity('kota Bek', function(res){
  console.log(res);
});
```

## To-do
#### Province
- [x] Get all provinces
- [x] Search province
- [x] Get province by name
- [x] Get province by name (include cities / regencies)
  - [x] Aceh
  - [x] Bali
  - [x] Banten
  - [x] Bengkulu
  - [x] Gorontalo
  - [x] Jakarta
  - [x] Jambi
  - [x] Jawa Barat
  - [x] Jawa Tengah
  - [x] Jawa Timur
  - [x] Kalimantan Barat
  - [x] Kalimantan Selatan
  - [x] Kalimantan Tengah
  - [x] Kalimantan Timur
  - [x] Kalimantan Utara
  - [x] Kepulauan Bangka Belitung
  - [x] Kepulauan Riau
  - [x] Lampung
  - [x] Maluku
  - [x] Maluku Utara
  - [x] Nusa Tenggara Barat
  - [x] Nusa Tenggara Timur
  - [x] Papua
  - [x] Papua Barat
  - [x] Riau
  - [x] Sulawesi Barat
  - [x] Sulawesi Selatan
  - [x] Sulawesi Tengah
  - [x] Sulawesi Tenggara
  - [x] Sulawesi Utara
  - [x] Sumatera Barat
  - [x] Sumatera Selatan
  - [x] Sumatera Utara
  - [x] Yogyakarta

#### City / Regency
- [x] Get all cities / regencies
- [x] Search cities / regencies
- [x] Get cities / regencies by name

#### Subdistrict (?)

#### Village (?)

## License

MIT © [Wahyu Kristianto](https://kristories.com)
