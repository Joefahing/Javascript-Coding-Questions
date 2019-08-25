/***
 * Question Write code to remove duplicates from an unsorted linked list 
 */


 class Node {
     constructor(value){
         this.val = value;
         this.next = null;
     }
 }

 class LinkedList{
    constructor(){
        this.head = null;
    }

    insertHead(value){
        let newNode = new Node(value);
        this.head = newNode;
    }

    insertEnd(...values){
        let tailNode = this.head;

        while(tailNode.next != null){
            tailNode = tailNode.next;
        }

        for(let i = 0; i < values.length; i++){
            tailNode.next = new Node(values[i]);
            tailNode = tailNode.next;
        }
    }   
}

LinkedList.prototype.printList = function(){

    let current = this.head
    let stack = [];

    while(current !== null){
        stack.push(current.val);
        current = current.next;
    }
    console.log(stack);
}

let list = new LinkedList();
list.insertHead(1);
list.insertEnd(3,4,5,6,5,7,9,6,4);
list.printList();

var removeDups = (root) => {
    let set = new Set();
    let current = root.head;
    let prev = null;

    while(current!== null){
        if(set.has(current.val)){
            prev.next = current.next;
        }else{
            set.add(current.val);
            prev = current;
        }
        current = current.next;
    }
}

removeDups(list);
list.printList();




