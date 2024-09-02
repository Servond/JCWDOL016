// variable _cuaca adalah variable global scope
let _cuaca: string = "hujan";

if (_cuaca == "hujan") {
  // variable _aksi adalah variable local scope
  const _aksi = "Kita tidak pergi jalan";
  console.log(_aksi);

  //   _cuaca = "tidak hujan";
} else {
  const _aksi: string = "Kita pergi jalan";
  console.log(_aksi);
}

// ternary operator
console.log(_cuaca == "hujan" ? "Kita tidak pergi jalan" : "Kita pergi jalan");
// console.log(_cuaca);

const _umur: number = 0;

let _aksi: string;
// chaining condition
if (_umur >= 17 && _umur < 21) {
  _aksi = "Sudah bisa buat KTP";
  console.log(_aksi);
} else if (_umur > 20) {
  _aksi = "Tidak bisa buat KTP";
  console.log(_aksi);
} else if (_umur < 17 && _umur > 0) {
  _aksi = "Belum Cukup Umur";
  console.log(_aksi);
} else {
  console.log("Belum Lahir");
}

// console.log(_umur >= 17 && _umur < 21 ? "Sudah bisa buat KTP" : (_umur > 20 ? "Tidak bisa buat KTP" : (_umur < 17 && _umur > 0)) )

const _buah: string = "pir";

// switch case digunakan untuk comparison === saja
switch (_buah) {
  case "apel":
    console.log("Harga buah apel = 5000");
    break;
  case "jeruk":
    console.log("Harga buah jeruk = 8000");
    break;
  default:
    console.log("Harga buah = 2000");
}
// falsy
if (false) {
  console.log("jalan");
}
if ("") {
  console.log("jalan");
}
if (2) {
  console.log("jalan");
}

// for loop
for (let i: number = 10; i > 0; i--) {
  if (i % 2 !== 0) continue;
  console.log(i);
}

// while loop
let _countdown: number = 0;
while (_countdown > 0) {
  console.log(_countdown);
  if (_countdown === 6) break;

  _countdown--;
}

// do while loop
_countdown = 0;
do {
  console.log(_countdown);
  if (_countdown === 6) break;

  _countdown--;
} while (_countdown > 0);
