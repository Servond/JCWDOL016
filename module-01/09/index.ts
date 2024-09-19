// Brute force O(N^2)

function checkDuplicateBruteForce(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) return true;
    }
  }
  return false;
}

console.log(checkDuplicateBruteForce([1, 4, 5, 6, 7, 3]));

// Optimize with Extra Memory
// Time complexity O(N);
// Space complexity O(N);

function checkDuplicateExtraMemory(arr: number[]) {
  //   const unique = new Set();
  //   for (let i = 0; i < arr.length; i++) {
  //     if (unique.has(arr[i])) return true;
  //     else unique.add(arr[i]);
  //   }

  // time complexity O(1)
  // space complexity O(N)
  const unique = new Set(arr);
  console.log(unique.size);
  console.log(arr.length);
  if (unique.size === arr.length) return false;
  else return true;
}

console.log(checkDuplicateExtraMemory([1, 4, 2, 5, 3, 6, 6]));

// Optimize without extra memory
// time complexity 0(N Log N)
function checkDuplicateWithoutExtraMemory(arr: number[]) {
  arr.sort();
  console.log(arr);
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) return true;
  }
  return false;
}

console.log(checkDuplicateWithoutExtraMemory([5, 4, 2, 6, 3, 6]));

// Linear Search
function linearSearch(arr: number[], x: number) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([4, 3, 6, 4, 2, 1], 2));

// binary search
function binarySearch(arr: number[], l: number, r: number, x: number) {
  if (r >= l) {
    let mid = l + Math.floor((r - l) / 2);
    console.log(mid);

    if (arr[mid] === x) return mid;

    if (arr[mid] > x) return binarySearch(arr, l, mid - 1, x);

    return binarySearch(arr, mid + 1, r, x);
  }

  return -1;
}
let _arr = [1, 2, 3, 20, 40, 60, 100];

console.log(binarySearch(_arr, 0, _arr.length - 1, 100));

// Bubble sort
function bubbleSort(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      console.log(j);
      if (arr[j + 1] < arr[j]) {
        console.log([arr[j + 1], arr[j]]);
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
        console.log(arr);
      }
    }
  }
  return arr;
}

console.log(bubbleSort([5, 4, 3, 6, 2, 8]));
