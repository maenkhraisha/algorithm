class Node {
  constructor(val, prio) {
    this.value = val;
    this.priority = prio;
  }
}

class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  bubbleUp() {
    let childIdx = this.queue.length - 1;
    while (childIdx > 0) {
      let parentIdx = Math.floor((childIdx - 1) / 2);
      let childPriority = this.queue[childIdx].priority;
      let parentPriority = this.queue[parentIdx].priority;

      if (childPriority < parentPriority) {
        let swap = this.queue[childIdx];
        this.queue[childIdx] = this.queue[parentIdx];
        this.queue[parentIdx] = swap;
        childIdx = parentIdx;
      } else {
        return;
      }
    }
  }
  bubbleDown() {
    let parent = this.queue[0];
    let parentIdx = 0;
    let leftIdx, rightIdx;
    let leftElement, rightElement;
    let length = this.queue.length;
    let swap;

    while (parentIdx < length) {
      leftIdx = parentIdx * 2 + 1;
      rightIdx = parentIdx * 2 + 2;
      parent = this.queue[parentIdx].priority;

      leftIdx < length ? (leftElement = this.queue[leftIdx].priority) : (leftElement = null);
      rightIdx < length ? (rightElement = this.queue[rightIdx].priority) : (rightElement = null);

      if (
        leftElement < rightElement &&
        leftElement < parent &&
        leftElement != null
      ) {
        swap = this.queue[leftIdx];
        this.queue[leftIdx] = this.queue[parentIdx];
        this.queue[parentIdx] = swap;
        parentIdx = leftIdx;
      } else if (
        rightElement < leftElement &&
        rightElement < parent &&
        rightElement != null
      ) {
        swap = this.queue[rightIdx];
        this.queue[rightIdx] = this.queue[parentIdx];
        this.queue[parentIdx] = swap;
        parentIdx = rightIdx;
      } else {
        return;
      }
    }
  }

  enqueue(val, prio) {
    let node = new Node(val, prio);
    this.queue.push(node);
    this.bubbleUp();
  }

  dequeue() {
    let root = this.queue.pop();

    if (this.queue.length > 0) {
      this.queue[0] = root;
      this.bubbleDown();
    }

    return root;
  }
}

let q = new PriorityQueue();
q.enqueue("gym", 23);
q.enqueue("pray", 10);
q.enqueue("car", 32);
q.enqueue("eat", 12);
q.enqueue("work", 41);
q.enqueue("fuck", 5);
q.dequeue();

console.log(q.queue);
