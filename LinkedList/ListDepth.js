const constructBT = require("./BinaryTree");
const LinkedList = require("./LinkedList");


/*
Question:
Given a binary tree, design an algorithm whic creates a linked list of all the nodes 
at each depth
*/

/**
 * @param {Node}
 * @return {Array}
 */

 var listOfDpeth = function(root){
    const result = new Map();

    function preOrder(level, root, result){
        if(root === null){
            return;
        }
        if(!result.has(level)){
            result.set(level, [root.value]);

        }else{
            const list = result.get(level);
            list.push(root.value);
        }

        preOrder(level+1, root.left, result);
        preOrder(level+1, root.right, result);
    }

    preOrder(0, root, result);
    return result;
 }

const tree = constructBT([1,2,4,5,6,7,8]);
console.log(listOfDpeth(tree));