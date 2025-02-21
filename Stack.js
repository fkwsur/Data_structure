class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
    this.length++;
    return true;
  }

  pop() {
    if (this.length == 0) return false;
    this.top = this.top.next;
    this.length--;
    return true;
  }

  peek() {
    if (this.length === 0) return null;
    return this.top.value;
  }

  isEmpty() {
    if (this.length == 0) return "empty";
    else return "not empty";
  }

  getSize() {
    return this.length;
  }
}

let stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3000);
stack.push(4);
stack.pop();
console.log(stack.peek());
