class Heap{
    constructor(){
        this.data = [94,92,73,32,55,54,7,25,28];
    }

    fixHeap(){
        let Idx = this.data.length - 1;
        let element = this.data[Idx]
        let parentIdx;
        let parent;
         while(Idx >= 0){
            parentIdx = Math.floor((Idx-1)/2);
            parent = this.data[parentIdx];

            if(element > parent){
                this.data[Idx] = parent;
                this.data[parentIdx] = element;
                Idx = parentIdx;
            }else{
                return true;
            }
        }
    }

    insert(value){
        this.data.push(value);

        this.fixHeap();
    }

    bubbleDown(){

        let parent = this.data[0];
        let parentIdx = 0;
        let leftIdx,rightIdx;
        let leftElement, rightElement;
        let length = this.data.length;
        let swap;

        while(parentIdx < length){
            leftIdx = ( parentIdx * 2 ) + 1;
            rightIdx = ( parentIdx * 2 ) + 2;
            parent = this.data[parentIdx];

            leftIdx < length ?  leftElement = this.data[leftIdx] : leftElement = null;
            rightIdx < length ?  rightElement = this.data[rightIdx] : rightElement = null;


            if(leftElement > rightElement && leftElement > parent && leftElement!= null){
                swap = this.data[leftIdx];
                this.data[leftIdx] = this.data[parentIdx];
                this.data[parentIdx] = swap;
                parentIdx = leftIdx;
            }else if(rightElement > leftElement && rightElement > parent && rightElement != null){
                swap = this.data[rightIdx];
                this.data[rightIdx] = this.data[parentIdx];
                this.data[parentIdx] = swap;
                parentIdx = rightIdx;
            }else{
                return
            }
        }

    }

    bubbleDownRecurcive(rootIdx){
        let parentIdx = rootIdx;
        let parent = rootIdx;
        let leftIdx,rightIdx;
        let leftElement, rightElement;
        let length = this.data.length;
        let swap;

        while(parentIdx < length){
            leftIdx = ( parentIdx * 2 ) + 1;
            rightIdx = ( parentIdx * 2 ) + 2;
            parent = this.data[parentIdx];

            leftIdx < length ?  leftElement = this.data[leftIdx] : leftElement = null;
            rightIdx < length ?  rightElement = this.data[rightIdx] : rightElement = null;


            if(leftElement > rightElement && leftElement > parent && leftElement!= null){
                swap = this.data[leftIdx];
                this.data[leftIdx] = this.data[parentIdx];
                this.data[parentIdx] = swap;
                this.bubbleDownRecurcive(leftIdx);
            }else if(rightElement > leftElement && rightElement > parent && rightElement != null){
                swap = this.data[rightIdx];
                this.data[rightIdx] = this.data[parentIdx];
                this.data[parentIdx] = swap;
                this.bubbleDownRecurcive(rightIdx);
            }else{
                return
            }
        }
    }

    remove(){

        let root = this.data.pop();        
        
        if(this.data.length > 0){
            this.data[0] = root;
            this.bubbleDownRecurcive(0);
        }

        return root;
    }
}

let h = new Heap();

h.remove();
console.log(h.data);