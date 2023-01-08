// Implementing Queue using Linked List

class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Queue {
    constructor(){
      this.first = null;
      this.last = null;
      this.length = 0;
    }
    peek() {
      return this.first;
    }
    enqueue(value){
      const newNode = new Node(value);
      if (this.length === 0) {
        this.first = newNode;
        this.last = newNode;
      } else {
        this.last.next = newNode;
        this.last = newNode;
      }
      this.length++;
      return this;
    }
    dequeue(){
      if (!this.first) {
        return null;
      }
      if (this.first === this.last) {
        this.last = null;
      }
      const holdingPointer = this.first;
      this.first = this.first.next;
      this.length--;
      return this;
    }
    isEmpty(){
        return !this.length
    }
  }
  
  const myQueue = new Queue();
  console.log(myQueue.peek())
  console.log(myQueue.enqueue('Hi,'))
  console.log(myQueue.enqueue('I am'))
  console.log(myQueue.enqueue('Sajib.'))
  console.log(myQueue.peek())
  console.log(myQueue.dequeue())
  console.log(myQueue.dequeue())
  console.log(myQueue.dequeue())
  console.log(myQueue.peek())
  console.log(myQueue.isEmpty())

  
// Implementing Queue using Array

class Queue {
    constructor(){
      this.array = []
    }
    peek() {
      return this.array[0];
    }
    enqueue(value){
      return this.array.push(value)
    }
    dequeue(){
      if (!this.array) {
        return null;
      }
      return this.array.shift()
    }
    isEmpty(){
        return !this.array.length
    }
  }
  
  const myQueue = new Queue();
  console.log(myQueue.peek())
  console.log(myQueue.enqueue('Hi,'))
  console.log(myQueue.enqueue('I am'))
  console.log(myQueue.enqueue('Sajib.'))
  console.log(myQueue.peek())
  console.log(myQueue.dequeue())
  console.log(myQueue.dequeue())
  console.log(myQueue.dequeue())
  console.log(myQueue.peek())
  console.log(myQueue.isEmpty())