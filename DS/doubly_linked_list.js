class Node{
    constructor(val){
        this.next = null;
        this.prev = null;
        this.val = val;
    }
}

class List{
    constructor(val){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let node = new Node(val);
        this.length++;
        
        if(this.length == 1){
            this.head = node;
            this.tail = node;
            return this;
        }
        
        this.tail.next = node;
        node.prev = this.tail;
        node.next = null;
        
        this.tail = node;
    }

    print(){
        let n = this.head;

        while(n){
            console.log(n.val);
            n = n.next;
        }
    }
}


let list = new List();
list.push(1)
list.push(2)
list.push(3)
// list.push(4)
// list.push(5)
console.log(list);
list.print();