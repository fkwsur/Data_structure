class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return true;
  }

  printList() {
    if (this.length == 0) {
      console.log("list is empty");
      return;
    }
    let temp = this.head;
    while (temp != null) {
      console.log(temp)
      temp = temp.next;
    }
  }

  // pop(마지막 노드제거), popfirst(앞에는거제거), get(인덱스 위치의 노드 가져오기), set(업데이트), insert(넣기), remove(지우기), reverse()

  pop() {
    let temp = this.head;
    if (this.length == 0) {
      console.log("함수를 실행할 node가 없습니다.");
      return null;
    } else if (this.length == 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return temp;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      this.length--;
      return this.tail;
    }
  }

  popfirst() {
    let temp = this.head;
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return temp;
    } else if (this.length == 0) {
      console.log("함수를 실행할 node가 없습니다.");
      return null;
    } else {
      let deleted_node = temp;
      this.head = this.head.next;
      this.head.prev = null;
      this.length = this.length - 1;
      return deleted_node.value;
    }
  }

  get(index) {
    let temp = this.head;
    if (this.length == 1) {
      return temp;
    } else if (this.length == 0) {
      console.log("함수를 실행할 node가 없습니다.");
      return null;
    } else {
      let i = 0;
      while (i < index) {
        if (temp.next == null) {
          return null;
        }
        temp = temp.next;
        i++;
      }
      return temp;
    }
  }

  set(index, val) {
    let temp = this.head;
    if (this.length == 1) {
      return temp;
    } else if (this.length == 0) {
      console.log("함수를 실행할 node가 없습니다.");
      return null;
    } else {
      let i = 0;
      while (i < index) {
        if (temp.next == null) {
          return false;
        }
        temp = temp.next;
        i++;
      }
      temp.value = val;
      return true;
    }
  }

  insert(index, val) {
    let temp = this.head;
    if (this.head == null && index > 0) {
      console.log(`0번 인덱스가 비어있습니다. 0번부터 채워주세요`);
      return false;
    }
    if (index > this.length) {
      console.log(
        `기존 인덱스: ${this.length}, 추가하는 인덱스: ${index} 순차적으로 넣어주세요 `
      );
      return;
    }
    if (index == 0) {
      const newno = new Node(val);
      newno.next = temp;
      this.head = newno;
      this.length = this.length + 1;
      return true;
    }
    let nextset;
    const newno = new Node(val);
    let i = 0;
    while (temp != null) {
      if (index == this.length && temp.next == null) {
        // 인덱스가 마지막일 때
        temp.next = newno;
        newno.prev = this.tail;
        this.tail = newno;
        break;
      } else if (i == index - 1) {
        // 인덱스가 중간일 떄
        console.log(temp)
        nextset = temp.next; 
        temp.next = newno; 
        newno.prev = temp;
        newno.next = nextset; 
        if (nextset) nextset.prev = newno;
        break;
      }
      temp = temp.next;
      i++;
    }
    this.length = this.length + 1;
    return true;
  }

  remove(index) {
    let temp = this.head;
    if (this.length == 1 && index == 0) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return;
    }
    if (!this.head || index < 0 || index >= this.length) {
      console.log(`인덱스가 비어있거나 유효하지 않습니다.`);
      return false;
    }
    if (index === 0) {
      this.head = temp.next; // 첫 번째 노드를 삭제
      this.head.prev = null;
      this.length--;
      return true;
    }
    if (index === this.length - 1) {
      this.tail = this.tail.prev;
      this.tail.next = null;
      this.length--;
      return true;
    }
    let i = 0;
    let before;
    while (temp != null) {
      if (i == index - 1) {
        before = temp;
      }
      if (i == index) {
        before.next = temp.next;
        temp.next.prev = before;
        this.length--;
        return true;
      }
      temp = temp.next;
      i++;
    }
  }
}

// 리버스 만들어야 함

let link = new DoublyLinkedList();

link.append(0);
link.append(1);
link.append(2);

console.log(link);
