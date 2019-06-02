var Tree = require('./BinaryTree');

let rootNode = Tree([1,2,3,4,5,6]);

let inOrder = (node) => {
    
    if(node != null){
        inOrder(node.left);
        console.log(node.value);
        inOrder(node.right);
    }
}

let preOrder = (node, arr) =>{
    
    if(node != null){
        arr.push(node.value)
        preOrder(node.left, arr);
        preOrder(node.right, arr);
    }
}

let postOrder = (node) =>{
    if(node != null){
        postOrder(node.left);
        postOrder(node.right);
        console.log(node.value);
    }
}

