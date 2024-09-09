// deklarasi class

// // function example(name: string) {}

// // example("david");

interface IUsers {
  umur: number;
  greeting: (message: string) => string;
}

class User implements IUsers {
  // tanda # didepan property artinya ini adalah private property, dimana hanya bisa diakses
  // didalam class itu sendiri
  // private property tidak perlu ditulis kedalam interface
  #name;
  umur;

  constructor(paramName: string, paramUmur: number) {
    this.#name = paramName;
    this.umur = paramUmur;
  }

  greeting(message: string): string {
    this.getEmail();
    return `${message} ${this.#name}, umur kamu ${this.umur}`;
  }

  private getEmail() {
    console.log("email didapatkan");
  }
}

// initialisasi object berdasarkan class user
const userA: IUsers = new User("david", 22);
const userB: IUsers = new User("Budi", 55);
// // console.log(userA.#name);
console.log(userA.greeting("Hello"));
// // console.log(userA.)
console.log(userB.greeting("Halo"));

// // const obj = {
// //   name: "david",
// //   umur: 22,
// //   bayar()
// // };
// // obj.name = "budi";
// // console.log(obj);

// // const obj2 = {
// //     name: "budi",
// //     umur
// //     bayar()
// // }
// // const a = "b";

// static method pada sebuah class

class DB {
  static b = "c";
  static #connection = "";

  static #initializeConnection() {
    const randomNum = Math.ceil(Math.random() * 100);
    DB.#connection = `New database connection ${randomNum}`;
  }

  static getConnection() {
    if (!DB.#connection) {
      DB.#initializeConnection();
    }

    return DB.#connection;
  }
}
console.log(Boolean(0));

console.log(DB.getConnection());
console.log(DB.getConnection());

// const baju = [
//   {
//     tipe: "kaos",
//     ukuran: 42,
//     unit: "cm",
//   },
//   {
//     tipe: "kaos",
//     ukuran: 43,
//     unit: "inch",
//   },
// ];

class Baju {
  tipe: string;
  ukuran: number;
  unit: string;

  constructor(tipe: string, ukuran: number, unit: string) {
    this.tipe = tipe;
    this.ukuran = ukuran;
    this.unit = unit;
  }
}

const bajuTommy = new Baju("kaos", 42, "cm");
console.log(bajuTommy.tipe, bajuTommy.ukuran + bajuTommy.unit);

// getter & setter method
const users = {
  firstName: "john",
  lastName: "smith",

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  set fullName(value: string) {
    const split = value.split(" ");
    console.log(split);
    this.firstName = split[0];
    this.lastName = split[1];
  },

  fullname(value: string) {
    const split = value.split(" ");
    this.firstName = split[0];
    this.lastName = split[1];
  },

  printFullname() {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(users.firstName);
console.log(users.fullName);
users.fullName = "Lara croft";
console.log(users.fullName);

users.fullname("john smith");
console.log(users.printFullname());

// interface IProduct {
//   productName: string;
//   price: number;
//   brand: string;
// }

// // konsep inheritance pada class

// class Product implements IProduct {
//   productName;
//   price;
//   brand;

//   constructor(paramName: string, paramPrice: number, paramBrand: string) {
//     this.productName = paramName;
//     this.price = paramPrice;
//     this.brand = paramBrand;
//   }
// }

// interface ICar {
//   nyalakanWiper: () => string;
// }

// class Car extends Product implements ICar {
//   constructor(paramName: string, paramPrice: number, paramBrand: string) {
//     super(paramName, paramPrice, paramBrand);
//   }

//   nyalakanWiper() {
//     return "Wiper nyala";
//   }
// }

// const newCar = new Car("Brio", 1000000, "Honda");
// console.log(newCar.productName);
// console.log(newCar.nyalakanWiper());

// interface ICarElectric {
//   baterai: string;
// }

// class CarElectric extends Car implements ICar {
//   baterai;
//   constructor(
//     paramName: string,
//     paramPrice: number,
//     paramBrand: string,
//     baterai: string
//   ) {
//     super(paramName, paramPrice, paramBrand);
//     this.baterai = baterai;
//   }
// }

// const newCarElectric = new CarElectric("Ioniq", 50000, "Hyundai", "lithium");
// console.log(newCarElectric);
// console.log(newCarElectric.nyalakanWiper());

// interface IBike {
//   goes: () => string;
// }

// class Bike extends Product implements IBike {
//   constructor(paramName: string, paramPrice: number, paramBrand: string) {
//     super(paramName, paramPrice, paramBrand);
//   }

//   goes() {
//     return "sepeda berjalan";
//   }
// }

// const newBike = new Bike("fiksi", 50000, "uni");
// console.log(newBike);
// console.log(newBike.goes());

const arr: any = [5, "5", { a: "string" }];

// split string to array
const _string = "hello world";
console.log(_string.split(" "));

let arrNum = [
  { x: 5, y: 6 },
  { x: 10, y: 12 },
];
let sum = 0;

arrNum.forEach((obj) => {
  sum += obj.x + obj.y;
});
console.log(sum);

arrNum.map((obj) => {
  sum += obj.x + obj.y;
});

console.log(sum);
