// // callback

// function test(a: number, b: number) {
//   return a + b;
// }

// function tampilkan(sum: number) {
//   console.log(sum);
// }

// // let sum = test(5, 5);
// // tampilkan(sum);

// function test2(a: number, b: number, callback: (sum: number) => void) {
//   callback(a + b);
// }

// test2(5, 5, tampilkan);

// const arr: number[] = [1, 2, 3, 4];
// arr.map((i) => console.log(i));
// arr.find((i) => i == 3);

// // function sequence
// let result: string;

// function greet1(str: string) {
//   result = str;
// }

// function hello1() {
//   greet1("hello");
// }

// function arigatou() {
//   greet1("arigatou");
// }

// hello1();
// arigatou();
// console.log(result);

// asynchronus
console.log(1);
setTimeout(() => {
  console.log("Asynchronous");
}, 0);
console.log(2);

// Promise

const _promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = false;
    if (success) {
      resolve("janji ditepati");
    } else {
      reject("janji tidak ditepati");
    }
  }, 1000);
});

console.log(_promise);
_promise
  .then((res) => console.log(res))
  .catch((value) => console.log(value))
  .finally(() => console.log("janji selesai"));

// promises
function getData() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res.json();
    })
    .then((user) => {
      console.log(user);
    })
    .catch((err) => {
      console.log(err);
    });
}

getData();

// async await
// async function fetchData() {
//   try {
//     const result = await fetch("https://jsonplaceholder.typicode.com/users");
//     const parseJSON = await result.json();
//     console.log(parseJSON);
//   } catch (err: any) {
//     console.log(err.message);
//   }
// }

const fetchDataArrow = async () => {
  try {
    const result = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(result);
    const parseJSON = await result.json();

    if (!parseJSON) {
      throw new Error("Nama bukan budi");
    }

    // parseJSON.map((user) => {
    //   console.log(user.name);
    // });
  } catch (err: any) {
    console.log(err.message);
  }
};
fetchDataArrow();

//
// const obj = {
//     name
// }

// json

const _json = `{ "name": "budi" }`;
console.log(JSON.parse(_json).name);

const _text = {
  name: "budi",
};
console.log(JSON.stringify(_text));
