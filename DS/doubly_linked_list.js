class Node {
  constructor(val) {
    this.next = null;
    this.prev = null;
    this.val = val;
  }
}

class List {
  constructor(val) {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let node = new Node(val);
    this.length++;
    if (this.length == 1) {
      this.head = node;
      this.tail = node;

      return this;
    }

    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }
    if (this.length == 1) {
      let preNode = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return preNode;
    }

    let preNode = this.tail.prev;
    this.tail.prev.next = null;
    this.tail.prev = null;
    this.tail = preNode;
    this.length--;

    return preNode;
  }

  shift() {
    if (!this.head) return undefined;
    let shiftNode = this.head;
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return shiftNode;
    }

    // this.head.next = null;
    this.head = this.head.next;
    this.head.prev = null;
    shiftNode.next = null;
    this.length--;

    return shiftNode;
  }

  // insert at the beggining
  unshift(val) {
    let newNode = new Node(val);

    if (this.length === 0) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    
    if (index > this.length / 2) {
      let count = this.length-1;
      let temp = this.tail;
      while (count != index) {
        temp = temp.prev;
        count--;
      }
      return temp;
    } else {
      let count = 0;
      let temp = this.head;
      while (count != index) {
        temp = temp.next;
        count++;
      }
      return temp;
    }
  }

  set(index,val){
    let current = this.get(index);
    if(current != undefined){
      current.val = val;
      return true;
    }
    return false;
  }

  insert(index,val){

    if(index > this.length - 1  || index < 0) return undefined;

    if(index == 0) {
      this.unshift(val) 
      return true;
    }
    if(index == this.length){
      this.push(val)
      return true;
    }

    let newNode = new Node(val);
    let current = this.get(index);
    let prev = current.prev;


    newNode.next = current;
    newNode.prev = prev;

    current.prev = newNode;
    prev.next = newNode;

    this.length++;
    return true;
  }
  
  remove(index){

    if(index < 0 || index >= this.length) return false;
    if(index ==0 ) return this.shift();
    if(index == this.length -1 ) return this.pop();

    let deletedNode = this.get(index);

    deletedNode.prev.next = deletedNode.next;
    deletedNode.next.prev = deletedNode.prev;

    deletedNode.next = null;
    deletedNode.prev = null;
    this.length--;

    return true;
  }

  print() {
    let n = this.head;

    while (n) {
      console.log(n.val);
      n = n.next;
    }
  }
}

let list = new List();
list.push(0);
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);



list.print();
console.log("======");

list.remove(7);

list.print();

