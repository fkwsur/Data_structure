class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(val) {
    const newno = new Node(val);
    if (this.length == 0) {
      this.head = newno;
      this.tail = newno;
    } else {
      this.tail.next = newno; //tail node1 <_ node  node1 next -> node2
      this.tail = newno;
    }
    this.length++;
  }

  printList() {
    if (this.length == 0) {
      console.log("list is empty");
      return;
    }
    let temp = this.head;
    while (temp != null) {
      //   console.log(temp)
      temp = temp.next;
    }
  }

  // pop(마지막 노드제거), popfirst(앞에는거제거), get(인덱스 위치의 노드 가져오기), set(업데이트), insert(넣기), remove(지우기), reverse()

  pop() {
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
      while (temp.next.next != null) {
        temp = temp.next;
      }
      let deleted_node = temp.next;
      temp.next = null;
      this.tail = temp;
      this.length = this.length - 1;
      return deleted_node.value;
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
          return "no index";
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
          return "no index";
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
      return;
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
        this.tail = newno;
        break;
      } else if (i == index - 1) {
        // 인덱스가 중간일 떄
        nextset = temp.next;
        temp.next = newno;
        newno.next = nextset;
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
    if (this.head == null || index < 0 || index >= this.length) {
      console.log(`인덱스가 비어있거나 유효하지 않습니다.`);
      return;
    }
    if (index === 0) {
      this.head = temp.next; // 첫 번째 노드를 삭제
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
        this.length--;
        return true;
      }
      temp = temp.next;
      i++;
    }
  }

  reverse() {
    let temp = this.head;
    if (this.head == null) {
      console.log(`인덱스가 비어있거나 유효하지 않습니다.`);
      return;
    }
    let i = 0;
    let last;
    let before;
    while (i < this.length) {
      if (i == 0) {
        last = new Node(temp.value);
        this.tail = temp
      }
      if (i > 0) {
        before = new Node(temp.value);
        before.next = last;
        last = before;
      }
      temp = temp.next;
      i++;
    }
    this.tail.next = null
    this.head = before;
    return true;
  }
}

let link = new LinkedList();

link.append(0);
link.append(1);
link.append(2);
link.append(3);
link.append(4);

// link.pop()
// link.popfirst()
// link.get(3)
// link.set(4, 100)
// link.insert(1, 5000);
// link.remove(4)
// link.reverse()

// console.log(link);
// console.log(link.head);
// console.log(link.head.next);
// console.log(link.head.next.next);
// console.log(link.head.next.next.next);
// console.log(link.head.next.next.next.next);
// // console.log(link.head.next.next.next.next.next);

// 복제와 참조
// let a = [1, 2, 3];
// let b;
// b = a;
// b.splice(1, 1); // 인덱스 1의 요소 삭제 (즉, 2를 삭제)
// console.log(a);
