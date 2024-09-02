let sepatu = "Adidas";
let sepatu2 = "Nikee";
console.log(sepatu);

let listSepatu: string[] = ["Adidas", "Nikee", "Puma", "Reebook"];
console.log(listSepatu[2]);
console.log(listSepatu.length);

let listAngka: number[] = [1, 2, 3];

for (let i = 0; i <= listSepatu.length; i++) {
  console.log(i);
  console.log(listSepatu[i]);
}

let listArray: number[][] = [
  [1, 2],
  [3, 4],
  [5, 6, 7, 8],
];

for (let i: number = 0; i < listArray.length; i++) {
  for (let j: number = 0; j < listArray[i].length; j++) {
    console.log(listArray[i][j]);
  }
}

// array build in method pop
console.log(listSepatu);
console.log(listSepatu.pop());
console.log(listSepatu);
console.log(listSepatu.pop());
console.log(listSepatu);
let _sepatu = listSepatu.pop();
console.log(_sepatu);
console.log(listSepatu);

// array build in method push
listSepatu.push("reebook");
console.log(listSepatu);
listSepatu.push("Converse");
console.log(listSepatu);

// array build in method shift
listSepatu.shift();
console.log(listSepatu);

// array build in method unshift
listSepatu.unshift("Adidas");
console.log(listSepatu);

// array build in method reverse
listSepatu.reverse();
console.log(listSepatu);

// array build in method concat
let _arr1 = [1, 2];
let _arr2 = [3, 4];

console.log(_arr1.concat(_arr2));

// for of loop
let _buah = ["jeruk", "apel", "mangga"];

for (let buah of _buah) {
  console.log(buah);
}
