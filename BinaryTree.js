function TreeNode(value){
    this.value = value;
    this.right = this.left = null;
}

function constructBinaryTree(nums, level, root){
    
    if(level < nums.length){
        root = new TreeNode(nums[level]);
        root.right = constructBinaryTree(nums, 2*level+1, root.right);
        root.left = constructBinaryTree(nums, 2*level+2, root.left);
    }

    return root;
}

function BinaryTree(nums){
    this.root = constructBinaryTree(nums, 0, root);    
}

function height(treeRoot){
    if(treeRoot == null) return 0;
    return Math.max(height(treeRoot.right), height(treeRoot.left)) + 1;
}

let tree = new BinaryTree([4,2,3]);

console.log(height(tree.root));



