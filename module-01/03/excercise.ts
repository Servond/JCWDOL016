// soal no 1
const _number1: number = 9;
for (let i = 1; i <= 10; i++) {
  console.log(`${_number1} x ${i}`);
}

function multiplicationTable(number: number) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i}`);
  }
}

const funcExpress = function () {
  return;
};

const arrowFunc = () => {};

console.log(multiplicationTable(5));
console.log(multiplicationTable(9));

// soal no 2
// build in method
let _string1: string = "kasur ini rusaks";
console.log(_string1.split(" "));
console.log(_string1.split("").reverse().join(""));
let _reverseString1: string = _string1.split("").reverse().join();
console.log(_string1 === _reverseString1 ? "palindrome" : "not palindrome");

// looping
console.log(_string1.length / 2);
let _hasilPalindrome = "palindrome";
for (let i = 0; i < _string1.length / 2; i++) {
  console.log(_string1[i]);
  console.log(_string1[_string1.length - 1 - i]);
  if (_string1[i] !== _string1[_string1.length - 1 - i]) {
    _hasilPalindrome = "not palindrome";
    break;
  }
}

console.log(_hasilPalindrome);

// soal no 3
const cm = 50;
const cmToKm = cm / 100000;
console.log(cmToKm);

// soal no 4
const _number3 = 1000;
let numberToCurrency = _number3.toLocaleString("in-ID", {
  style: "currency",
  currency: "IDR",
});
console.log(numberToCurrency);

numberToCurrency = new Intl.NumberFormat("in-ID", {
  style: "currency",
  currency: "IDR",
}).format(_number3);
console.log(numberToCurrency);

// soal no 5
const _string5: string = "Hello world";
const searchString: string = "o";

console.log(_string5.replace(searchString, ""));
