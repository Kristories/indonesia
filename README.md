# Indonesia

## Installation

```js
$ npm install --save indonesia
```

### Usage

```js
var indonesia = require('indonesia');

// Get all provinces
indonesia.getProvinces(function(provinces){
  console.log(provinces);
});

// Get province by name
indonesia.getProvince('aceh', function(province){
  console.log(province);
});

// Get province by name (include cities / regencies)
indonesia.getProvince('aceh', true, function(province){
  console.log(province);
});
```

## To-do
#### Province
- [x] Get all provinces
- [ ] Search province
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
- [ ] Get all cities / regencies
- [ ] Search cities / regencies
- [ ] Get cities / regencies by name

#### Subdistrict (?)

#### Village (?)

## License

MIT © [Wahyu Kristianto](https://kristories.com)
