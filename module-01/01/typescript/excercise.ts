// soal no 1
let l1: number = 5;
let p1: number = 10;
const luasPersegiPanjang: number = p1 * l1;
console.log(luasPersegiPanjang);

// soal no 2
l1 = 3;
p1 = 5;
const perimeterPersegiPanjang: number = 2 * (p1 + l1);
console.log(perimeterPersegiPanjang);

// soal no 3
const r1: number = 5;
const pi: number = Math.PI;
console.log(pi);

// diameter
const diameterLingkaran: number = 2 * r1;
console.log(diameterLingkaran);

// circumference
const circumferenceLingkaran: number = pi * diameterLingkaran;
console.log(circumferenceLingkaran);

// area
const luasLingkaran: number = pi * Math.pow(r1, 2);
console.log(luasLingkaran);

// soal no 4
const a1: number = 80;
const a2: number = 65;
const sudutTerakhirSegitiga: number = 180 - (a1 + a2);
console.log(sudutTerakhirSegitiga);

// soal no 5
const days5: number = 400;
const years: number = Math.floor(days5 / 365);
const months: number = Math.floor((days5 % 365) / 30);
console.log(days5 % 365);
const days: number = Math.floor((days5 % 365) % 30);
console.log(`${days5} days -> ${years} year, ${months} month, ${days} day`);

// soal no 6
const date1: Date = new Date("2022-01-20");
const date2: Date = new Date("2022-03-30");
const perbedaanDate = (date2.getTime() - date1.getTime()) / (24 * 3600 * 1000);
console.log(perbedaanDate);
