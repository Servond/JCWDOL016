let _string: string = "Ini adalah sebuah string";
console.log(_string);

// string built in method
let _tempString = _string.slice(5, 8);
console.log(_tempString);
console.log(_string.toUpperCase());
console.log(_string.trim());
console.log(_string + "5");
console.log(_string.concat("5"));
console.log(_string.replace("a", "*"));
console.log(_string.replace(/[a, b]/g, "*"));

// template literals
console.log(`variable ${_string}`);

// multiline string
let _loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit
    , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, 
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    Excepteur sint occaecat cupidatat non proident, 
    sunt in culpa qui officia deserunt mollit anim id est laborum.`;

console.log(_loremIpsum);

let _number: number = 5.625;
console.log(_number);
// number built in method
console.log(_number.toString());
console.log(_number.toExponential(2));
console.log(_number.toFixed(2));

// global built in method
let _stringAngka: string = "5.6";
console.log(Number(_stringAngka));
console.log(parseInt(_stringAngka));
console.log(parseFloat(_stringAngka));
console.log(String(5));

// date data type
let _now: Date = new Date();
console.log(_now.toLocaleDateString("in-Id"));
let _date: Date = new Date("2024-01-01");
console.log(_date.toLocaleDateString());

let _boolean: boolean = true;
console.log(_boolean);

// operand
let x: number = 5;
let y: number = 10;

// binary, memiliki lebih dari 1 operand
// contoh dibawah operand = x dan y
const _addition = x + y;
console.log(_addition);

// unary, hanya memiliki 1 operand
// contoh dibawah operand = x
const _minus = -x;
console.log(_minus);

// modify in place
console.log(x);
x += x; // x = x + x; // x = 5 + 5;
console.log(x);
console.log(y);
y -= 2; // y = y - 2; // y = 10 - 2;
console.log(y);

// increment & decrement
let _counter: number = 1;
_counter++; // _counter += 1; // _counter = _counter + 1 // _counter = 1 + 1;
console.log(_counter);
_counter--; // _counter -= 1; // _counter = _counter - 1 // _counter = 2 - 1;
console.log(_counter);

// comparison operators
let _buah1: string = "jeruk";
let _buah2: string = "apel";
let _angka1: number = 10;
let _angka2: number = 10;

// comparison == akan mengecek dua buah value tanpa melihat tipe data
console.log(_buah1 == _buah2);
console.log(_angka1 == _angka2);

// comparison === akan mengecek dua buah value dan melihat tipe datanya
console.log(_angka1 === _angka2);

// comparison != akan mengecek dua buah value tanpa melihat tipe data
console.log(_buah1 != _buah2);

// comparison !== akan mengecek dua buah value dan melihat tipe datanya
console.log(_angka1 !== _angka2);

// comparison >
console.log(_angka1 > _angka2);

// comparison >=
console.log(_angka1 >= _angka2);

// comparison <
console.log(_angka1 < _angka2);

// comparison <=
console.log(_angka1 <= _angka2);
