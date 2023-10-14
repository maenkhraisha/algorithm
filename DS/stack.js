class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val){
        let node = new Node(val);
        if(this.first == null){
            this.first = node;
            this.last = node;
        }else{
            node.next = this.first;
            this.first = node;
        }
        this.size++;
        return true;
    }
    pop(){
        
        let temp = this.first;
        if(this.size == 0){
            return false;            
        }
        
        if(this.size ==1){
            this.first = null;
            this.last = null;            
        }else{
            this.first = this.first.next;
        }

        this.size--;
        return temp;

    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val){
        let node = new Node(val);

        if(this.size == 0){
            this.first = node;
            this.last = node;
        }else{
            this.last.next = node;
            this.last = node;
        }
        
        this.size++;
        return true;
    }
    dequeue(){
        let node = this.first;

        if(this.size == 0) return false;
        if(this.size == 1 ) {
            this.last = null;
        }

        this.first = this.first.next;
        

        this.size--;
        return node;

    }

    print(){
        let n = this.first;

        while (n) {
          console.log(n.val);
          n = n.next;
        }
    }
}


let q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.enqueue(5);
q.enqueue(6);

q.dequeue();
q.dequeue();
q.dequeue();
q.dequeue();
q.dequeue();
q.dequeue();
q.dequeue();


console.log(q.dequeue());

q.print()
// console.log(q.dequeue());


