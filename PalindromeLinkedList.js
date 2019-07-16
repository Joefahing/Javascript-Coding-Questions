/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let arr = [];
    let current = head;
    
    while(current !== null){
        arr.push(current.val);
        current = current.next;
    }
    
    current = head;
    
    while(arr.length > 0 && current !== null){
        if(arr.pop() != current.val){
            return false;
        }  
        current = current.next;    
    }
    
    return true;
};