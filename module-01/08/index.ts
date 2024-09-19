// Stack data structure

interface IStack {
  push: (element: number) => void;
  pop: () => void;
  showElements: () => number[];
}

class Stack implements IStack {
  #maxSize: number;
  #container: number[];

  constructor(maxSize: number = 10) {
    this.#maxSize = maxSize;
    this.#container = [];
  }

  #isFull() {
    return this.#container.length >= this.#maxSize;
  }

  #isEmpty() {
    return this.#container.length === 0;
  }

  push(element: number) {
    if (this.#isFull()) {
      console.log("sudah penuh");
    } else {
      this.#container.push(element);
    }
  }

  pop() {
    if (this.#isEmpty()) {
      console.log("sudah kosong");
    } else {
      this.#container.pop();
    }
  }

  showElements() {
    return this.#container;
  }
}

const newStack = new Stack(6);
newStack.push(10);
newStack.push(5);
newStack.push(8);
newStack.push(4);
newStack.push(7);
newStack.push(4);
newStack.push(1);
newStack.push(1);

let show = newStack.showElements();
console.log(show);
newStack.pop();
newStack.pop();
newStack.pop();
newStack.pop();
newStack.pop();
newStack.pop();
newStack.pop();
newStack.push(1);
console.log(newStack.showElements());

// queue data structure

interface IQueue {
  enqueue: (element: number) => void;
  dequeue: () => number | undefined;
  showElements: () => number[];
}

class Queue implements IQueue {
  #maxSize: number;
  #container: number[];

  constructor(maxSize: number = 10) {
    this.#maxSize = maxSize;
    this.#container = [];
  }

  #isFull() {
    return this.#container.length >= this.#maxSize;
  }

  #isEmpty() {
    return this.#container.length === 0;
  }

  enqueue(element: number) {
    if (this.#isFull()) {
      console.log("sudah penuh");

      return;
    }
    this.#container.push(element);
  }

  dequeue() {
    if (this.#isEmpty()) {
      console.log("sudah kosong");

      return;
    }
    return this.#container.shift();
  }

  showElements() {
    return this.#container;
  }
}

const newQueue = new Queue();
newQueue.enqueue(1);
newQueue.enqueue(2);
newQueue.enqueue(3);
newQueue.enqueue(4);
newQueue.enqueue(5);
newQueue.enqueue(6);
newQueue.enqueue(7);
newQueue.enqueue(8);
newQueue.enqueue(9);
newQueue.enqueue(10);
newQueue.enqueue(11);
console.log(newQueue.showElements());
console.log(newQueue.dequeue());
console.log(newQueue.dequeue());
console.log(newQueue.dequeue());
console.log(newQueue.dequeue());
console.log(newQueue.dequeue());
console.log(newQueue.showElements());

// Set data structure
const sneakers = ["adidas", "nikee", "reebok", "adidas"];
sneakers.push("reebok");
console.log(sneakers);

const cars = new Set(["bmw", "mercedes", "volkswagen", "bmw"]);
console.log(cars);
cars.add("mercedes");
cars.add("honda");
console.log(cars);
cars.delete("mercedes");
console.log(cars);
cars.forEach((i, idx) => {
  console.log(i);
});

// hash table / map data structure

const obj = {
  name: "budi",
  umur: 22,
};
obj.name = "jojo";
obj.umur = 22;
console.log(obj);

const map = new Map();
map.set("budi", { umur: 25 });
console.log(map.get("budi"));
map.set(obj, "ini jojo");
console.log(map.get(obj));

map.set({ name: "dodi" }, 55);
console.log(map.get({ name: "dodi" }));

let keyArray = [5, 5];
map.set(keyArray, 55);
console.log(map.get(keyArray));
map.forEach((i) => {
  console.log(i);
});

for (let data of map) {
  console.log(data);
}

const arr = [5, 2, 4];
console.log(arr);

// Linked List

const linkListSingle = {
  head: {
    value: "a",
    next: {
      value: "b",
      next: {
        value: "c",
        next: {
          value: "d",
          next: {
            value: "e",
            next: null,
          },
        },
      },
    },
  },
};
