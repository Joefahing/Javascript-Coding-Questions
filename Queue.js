function ListNode(value){
    this.value = value;
    this.next = null;
}

class Queue {

    constructor(value){
        this.headNode = new ListNode(value);
        this.tailNode = this.headNode;
    }

    enqueue(value){
        this.tailNode.next = new ListNode(value);
        this.tailNode = this.tailNode.next;
    }

    dequeue(){
        if(this.headNode == null) return null;

        let temp = this.headNode;
        this.headNode = this.headNode.next;

        return temp.value;
    }
}

let queue = new Queue(0);
queue.enqueue(1);
queue.enqueue(3);
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())




