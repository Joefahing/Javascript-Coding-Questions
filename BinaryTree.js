function TreeNode(value){
    this.value = value;
    this.right = this.left = null;
}

function constructBinaryTree(nums, level, root){
    
    if(level < nums.length){
        root = new TreeNode(nums[level]);
        root.left = constructBinaryTree(nums, 2*level+1, root.left);
        root.right = constructBinaryTree(nums, 2*level+2, root.right);
    }

    return root;
}

function height(treeRoot){
    if(treeRoot == null) return 0;
    return Math.max(height(treeRoot.right), height(treeRoot.left)) + 1;
}

module.exports = (nums) => {
    let root = null;
    root = constructBinaryTree(nums, 0, root);
    return root;    
}





