class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.length = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.length == 0) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
    this.length++;
    return true;
  }

  dequeue() {
    if (this.length == 0) return false;
    this.front = this.front.next;
    if (this.front == null) this.rear = null;
    this.length--;
    return true;
  }

  peek() {
    if (this.length === 0) return null;
    return this.front.value;
  }

  isEmpty() {
    if (this.length == 0) return "empty";
    else return "not empty";
  }

  getSize() {
    return this.length;
  }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue();
console.log(queue);
