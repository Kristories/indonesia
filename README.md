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
  - [ ] Bengkulu
  - [ ] Gorontalo
  - [ ] Jakarta
  - [ ] Jambi
  - [ ] Jawa Barat
  - [ ] Jawa Tengah
  - [ ] Jawa Timur
  - [ ] Kalimantan Barat
  - [ ] Kalimantan Selatan
  - [ ] Kalimantan Tengah
  - [ ] Kalimantan Timur
  - [ ] Kalimantan Utara
  - [ ] Kepulauan Bangka Belitung
  - [ ] Kepulauan Riau
  - [ ] Lampung
  - [ ] Maluku
  - [ ] Maluku Utara
  - [ ] Nusa Tenggara Barat
  - [ ] Nusa Tenggara Timur
  - [ ] Papua
  - [ ] Papua Barat
  - [ ] Riau
  - [ ] Sulawesi Barat
  - [ ] Sulawesi Selatan
  - [ ] Sulawesi Tengah
  - [ ] Sulawesi Tenggara
  - [ ] Sulawesi Utara
  - [ ] Sumatera Barat
  - [ ] Sumatera Selatan
  - [ ] Sumatera Utara
  - [ ] Yogyakarta

#### City / Regency
- [ ] Get all cities / regencies
- [ ] Search cities / regencies
- [ ] Get cities / regencies by name

#### Subdistrict (?)

#### Village (?)

## License

MIT © [Wahyu Kristianto](https://kristories.com)
