const LinkedList = require('./LinkedList');

//Question implement an algorithm to delete a node in 
//the middle (any node but the first and last node, not necessarily the exact middle) of a singly linked list, 
//given only access to that node

/**
 * @param {LinkedList}
 * @return {LinkedList}
*/

function deleteMiddle(node){
    node.val = node.next.val;
    node.next = node.next.next;
}

const list = new LinkedList();
list.append([1,2,4]);
let middle = list.head.next;
deleteMiddle(middle);
