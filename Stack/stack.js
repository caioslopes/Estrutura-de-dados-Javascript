class Stack {
  constructor() {
    this.count = 0;
    this.items = {};
  }

  push(element) {
    this.items[this.count] = element;
    this.count++;
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }

  peek() {
    if (this.isEmpty) {
      return undefined;
    }
    return this.items[this.count - 1];
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.count === 0;
  }

  clear() {
    while (!this.isEmpty()) {
      this.pop();
    }
  }

  toString() {
    if (this.isEmpty()) {
      return "";
    }
    let objString = `${this.items[0]}`;
    for (let i = 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }
}

/* Using data structure */
function decimalToBinary(decNumber) {
  const remStack = new Stack();

  let number = decNumber;
  let rem;
  let binaryString = "";

  while (number > 0) {
    rem = Math.floor(number % 2);
    remStack.push(rem);
    number = Math.floor(number / 2);
  }
  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString();
  }
  return binaryString;
}

/* console.log(decimalToBinary(233)); */

function baseConverter(decNUmber, base) {
  const remStack = new Stack();
  const digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let number = decNUmber;
  let rem;
  let baseString = "";
  if (!(base >= 2 && base <= 36)) {
    return "";
  }
  while (number > 0) {
    rem = Math.floor(number % base);
    remStack.push(rem);
    number = Math.floor(number / base);
  }
  while (!remStack.isEmpty()) {
    baseString += digits[remStack.pop()];
  }
  return baseString;
}

console.log(baseConverter(100345, 2));
console.log(baseConverter(100345, 8));
console.log(baseConverter(100345, 16));
console.log(baseConverter(100345, 35));
