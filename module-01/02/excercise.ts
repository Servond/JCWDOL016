// soal no 1
const _number1: number = 25;

if (_number1 % 2 === 0) {
  console.log(`${_number1} -> even number`);
} else {
  console.log(`${_number1} -> odd number`);
}

console.log(
  _number1 % 2 === 0
    ? `${_number1} -> even number`
    : `${_number1} -> odd number`
);

// soal no 2
const _number2: number = 2;
let isPrime: boolean = true;

for (let i: number = 2; i < _number2; i++) {
  if (_number2 % i === 0) {
    isPrime = false;
    break;
  }
}
console.log(isPrime);

// soal no 3
const _number3: number = 3;
let _hasilSum: string = `${_number3} -> `;
let _sum: number = 0;
for (let i = 1; i <= _number3; i++) {
  _sum += i;
  _hasilSum += i === _number3 ? `${i} = ${_sum}` : ` ${i} + `;
}
console.log(_hasilSum);

// soal no 4
const _number4: number = 6;
let _hasilFact = `${_number4}! -> ${_number4} x`;
let _fact = _number4;
for (let i = _number4 - 1; i >= 1; i--) {
  _fact *= i;
  console.log(i);
  console.log(_fact);
  _hasilFact += i === 1 ? `${i} = ${_fact}` : ` ${i} x `;
}
console.log(_hasilFact);

// soal no 5
const _number5: number = 13;
let _fib: number = 0;
let _n1: number = 0;
let _n2: number = 1;
let _hasilFib = `${_number5} -> `;
console.log(_n1, _n2);

for (let i = 1; i <= _number5; i++) {
  _fib = _n1 + _n2;
  console.log(_fib);
  _n1 = _n2;
  console.log(_n1);
  _n2 = _fib;
  console.log(_n2);
  _hasilFib += i === _number5 ? `${_n1}` : `${_n1}, `;
}
console.log(_hasilFib);
