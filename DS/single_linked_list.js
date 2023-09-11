class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let n = new Node(val);
    this.length++;

    if (this.length == 1) {
      this.tail = n;
      this.head = n;
    } else {
      this.tail.next = n;
      this.tail = n;
    }
  }

  pop() {
    if(this.head == null) return "no data";
    
    if(this.head == this.tail){
        this.length = 0;
        let n = this.head
        this.head = this.tail = null;
        return n;
    }

    let curr = this.head ;
    let newTail = curr;
    while(curr.next){
        newTail = curr;
        curr = curr.next;
    }

    this.tail = newTail;
    this.tail.next = null;

    this.length--;
    return curr;
  }

  shift(){
    if(!this.head) return undefined
    let head = this.head;
    this.head = this.head.next;
    this.length--;

    if(this.length ==0 ) this.tail = null;
    return head;
  }
  
  traverse() {
      let n = this.head;
      while (n) {
          console.log(n.val);
          n = n.next;
        }

        return this;
    }

    unshift(val){
        
        let newNode = new Node(val);
        
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
    }

    get(index){

        if(index < 0 || index > this.length -1 ) return undefined;

        let count = 0;
        let current = this.head;

        while(count < index){            
            current = current.next;
            count++;
        }

        return current;
    }

    set(index , val){
        let n = this.get(index);
        if(n){
            n.val = val; 
            return true;
        } 
        return false;
    }

    insert(index ,val){
        if(index < 0 || index > this.length ) return false;

        let current = this.head;
        let count = 0;
        while(count < index -1){
            current = current.next;
            count++;            
        }

        let newNode = new Node(val);
        newNode.next = current.next;
        if(index == 0){
            this.head = newNode;
        }else{
            current.next = newNode;
        }
        return true;
    }

    remove(index){
        if(index == 0) {
            this.shift();
            return true;
        }
        if(index == this.length){
            this.pop();
            return true;
        }
        if(index > this.length - 1 ||  index < 0){
            return false;
        }

        let preNode = this.get(index -1);
        let deleteNode = preNode.next;

        console.log(preNode);
        console.log(deleteNode);

        preNode.next = preNode.next.next;
        deleteNode.next = null;

        this.length--;
        return true;
    }

    reverse(){
  
        
        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let next ; 
        let prev = null;
        
        for(let i = 0; i < this.length ; i++){          
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }

        return this;
    }
 

    print(){
        let curr = this.head;
        let arr = [];
        while(curr){
            arr.push(curr.val)
            curr = curr.next;
        }

        console.log(arr);
    }
}

let list = new SingleLinkedList();

list.push("0");
list.push("1");
list.push("2");
list.push("3");
list.push("4");


list.reverse();

list.print();
