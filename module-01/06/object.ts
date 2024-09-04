// const sepatu = "adidas";
// const hargaAdidas = 50000;
// const tipeAdidas = "Vmax";
// const sepatu2 = "adidas";
// const hargaAdidas2 = 100000;
// const tipeAdidas2 = "tinggi";

interface ISepatu {
  merk: string;
  harga: number;
  tipe: string;
}

interface ISendal {
  merk: string;
  harga: number;
}

const sepatu: ISepatu = {
  merk: "adidas",
  harga: 50000,
  tipe: "vmax",
};

// const sendal: ISendal = {
//   merk: "puma",
//   harga: 20000,
// };

console.log(sepatu.harga);
console.log(sepatu.merk);

function tampilkanSepatu(sepatu: ISepatu) {
  const sendal: ISendal = {
    merk: "puma",
    harga: 20000,
  };
  console.log(sepatu.merk);
  console.log(sendal.merk);
}

function pertambahan(x: number, y: number) {
  return x + y;
}

console.log(tampilkanSepatu({ merk: "adidas", harga: 50000, tipe: "VMAX" }));

// type Name = string;
// const name: Name = "david";
type Cars = {
  merk: string;
  harga: number;
};

const car: Cars = {
  merk: "BMW",
  harga: 50000000,
};

function tampilkanMobil(car: Cars) {
  console.log(car);
}

tampilkanMobil({ merk: "BMW", harga: 50000 });

interface Products {
  merk: string;
  harga: number;
}

interface IElektronik extends Products {
  watt: number;
}

interface IDapur extends Products {
  tipe: string;
}

const kulkas: IElektronik = {
  merk: "Toshiba",
  harga: 500000,
  watt: 225,
};

interface IUser {
  name: string;
  umur: number;
  tempatTinggal: {
    alamat: string;
    alamatLengkap: {
      kodePos: number;
    };
  };
  greet: () => void;
}

const user: IUser = {
  name: "david",
  umur: 52,
  tempatTinggal: {
    alamat: "jakarta",
    alamatLengkap: {
      kodePos: 11242,
    },
  },
  //   jenisKelamin: "pria", tidak diperbolehkan karena interface IUser tidak ada tipe jenisKelamin
  greet() {
    console.log(`hello ${this.name}, umur kamu ${this.umur}`);
  },
};

console.log(user.greet());
console.log(user.name);
console.log(user["name"]);
console.log(user.tempatTinggal.alamatLengkap?.kodePos);

function tambahkanAngka(x: number): number {
  let angka: number = 0;

  return (angka += x);
}

const angka = tambahkanAngka(5);
console.log(angka);

// console.log(tambahkanAngka(5));
// console.log(angka);

const newUser = { ...user };
newUser.name = "budi";
console.log(user);
console.log(newUser);

let _name: string = "budi";
_name = "david";
console.log(_name);

let _newName = _name;
_newName = "budi";
console.log(_newName);
console.log(_name);

function tampilkanNameDanUmur(user: IUser): void {
  const { name, umur } = user;

  console.log(name);
  console.log(umur);
}

console.log(tampilkanNameDanUmur(user));
console.log(user);

function example(...a: number[]) {
  console.log(a);
}

console.log(example(1, 2, 3, 4, 5, 6));

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3);
arr3[0] = 5;
console.log(arr1);
console.log(arr3);

// interface d {
//     name: string
// }

// interface c {
//     harga: number
// }

// interface b {
//     tipe: string
// }

// interface a extends b, c, d {

// }

type c = {
  name: string;
};

type b = {
  tipe: string;
};

type a = c | b;

const newA: a = {
  tipe: "budi",
  name: "dodi",
};

let _str: string | number = 5;
