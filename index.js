class Node {
  constructor(val){
    this.val = val
    this.next = null
  }
}
class Stack {
  constructor(){
    this.top = null
  }

  push(val){
    const pushNode = new Node(val);
    pushNode.next = this.top;
    this.top = pushNode;
    return this;
  }

  pop(){
    if (!this.top) return null
    const popNode = this.top;
    this.top = popNode.next;
    popNode.next = null;
    return popNode;
  }
}

// const stack = new Stack()
// console.log('______')
// console.log(stack)
// stack.push(30)
// console.log('______')
// console.log(stack)
// console.log('______')
// console.log(stack.pop())
// console.log('______')
// console.log(stack)
// console.log('______')
// console.log(stack.pop())
// console.log('______')
// console.log(stack)
// console.log('______')
// console.log(stack.pop())

// Queues first in first out => like in a line
// enqueue => putting somenthing "in" (same as unshift())
// deQueue => removing something from the front (same as pop())  push and pop
//

class Queue {
  constructor(){
    this.head = null;
    // this.tail = null;
  }

  enqueue(val){
    const newQueue = new Node(val);
    newQueue.next = this.head;
    this.head = newQueue;
    return this
  }

  deQueue(){
    if (!this.head) return false
    let node = this.head.next
    while (node){
      node = node.next
    }

    return node

  }




}

const queue = new Queue()

// console.log(queue.enqueue(2))
console.log("--")
console.log(queue.enqueue(1))
console.log("--")
// console.log(queue)
console.log(queue.deQueue())