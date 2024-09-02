// let x: number = 1,
//   y = 2;
// let pertambahan: number = x + y;
// console.log(pertambahan);

// x = 2;
// y = 3;
// pertambahan = x + y;
// console.log(pertambahan);

function pertambahan(x: number, y: number) {
  console.log(x);
  console.log(y);
  return x + y;
}

console.log(pertambahan(1, 3));
console.log(pertambahan(5, 6));
console.log(pertambahan(4, 4));

function pembagian(x: number, y: number, z: number) {
  return x / y / z;
}

console.log(pembagian(6, 2, 4));

function matematika(operasi: string, x: number, y: number) {
  if (operasi === "pertambahan") {
    return x + y;
  } else if (operasi === "pembagian") {
    return x / y;
  } else {
    return "masukkan operasi matematika yang benar";
  }
}

console.log(matematika("pembagian", 5, 6));

function cekString(x: any) {
  return typeof x === "string" ? true : false;
}

console.log(cekString(1));
console.log(cekString("a"));

const menyapa = function (nama: string) {
  const date = new Date();
  let message: string = "Selamat Sore";

  if (date.getHours() <= 10) {
    message = "Selamat Pagi";
  } else if (date.getHours() > 10 && date.getHours() < 15) {
    message = "Selamat Siang";
  } else if (date.getHours() >= 15 && date.getHours() < 19) {
    message = "Selamat Sore";
  } else {
    message = "Selamat Malam";
  }

  const sapa = `${message} ${nama}`;

  return sapa;
};

console.log(menyapa("David"));

// ... dalam parameter adalah rest parameter
const someFunc = function (x: number, y: number, ...z) {
  console.log(z);
  if (z.length > 0) {
    return true;
  } else {
    return false;
  }
};

console.log(someFunc(5, 6, 7, 8, 9, 0, 1, 2));
console.log(someFunc(2, 4));

const greetings = function (name: string) {
  function sayHello() {
    return `Hello ${name}`;
  }

  function welcome() {
    return "Welcome to Purwadhika";
  }

  return sayHello() + ", " + welcome();
};

console.log(greetings("Budi"));

// sayHello()
// welcome()

function closureFunc(name: string) {
  const defaultMessage: string = "Hello";

  return function () {
    return `${defaultMessage} ${name}`;
  };
}
let closure = closureFunc("david");
console.log(closure());

function multiply(x: number, y: number) {
  return x * y;
}

console.log(multiply(4, 5000));
console.log(multiply(4, 20000));

function multiplier(x: number) {
  return function (y: number) {
    return x * y;
  };
}

const mul3 = multiplier(3);
const mul4 = multiplier(4);
console.log(mul3(5));
console.log(mul4(5000));
console.log(mul4(20000));

function countDown(fromNumber: number = 10) {
  console.log(fromNumber);

  const nextNumber: number = fromNumber - 1;
  if (nextNumber > 0) {
    countDown(nextNumber);
  }
  return fromNumber;
}

console.log(countDown(3));

const greet = (name: string) => `Hello ${name}`;
console.log(greet("david"));
