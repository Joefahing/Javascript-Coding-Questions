/*
 * Notes: The heap data structure is build on a complete binary tree 
 * a binary tree where every level is full except for the last level.
 * 
 * Heap data structure is usally implement with array instead of linked list because
 * array provides O(1) access where as linked list is O(n). Therefore, if we implement
 * heap with linked list the complexity will be O(n^2lgn) instead of O(nlgn);
 * 
 * Another interested property of complete binary tree is, the root node can be represented
 * by index, and its sub children can be represented by 2*index and 2*index+1 where index
 * is the current position of root node.
 * 
*/

 



function minHeapify(arr, index){
    
    let min = index;
    let left = 2 * index + 1;
    let right = 2 * index + 2;


    if(left < arr.length && arr[left] < arr[min]) min = left;
    if(right < arr.length && arr[right] < arr[min]) min = right;

    if(min != index){

        let temp = arr[min];
        arr[min] = arr[index];
        arr[index] = temp;

        minHeapify(arr, min)
    }
}

let arr = [3,6,20,5,2,8,4,19];
minHeapify(arr, 1);
console.log(arr)