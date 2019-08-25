/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */

 /*
 Base on the property of binary tree, where right node of root is bigger than root and left node of root
 is smaller then root. If value of root node is smaller than min range, we want to check the right node vice versa
 The time complexity for this problem is O(n) where if the range include all value of nodes, it will visit all the
 node once. The space complexity is O(1) because I didnot create any variables.
  */
var rangeSumBST = function(root, L, R) {
    if(root === null){
        return 0;   
    }
    
    else if(root.val < L){
        return rangeSumBST(root.right, L, R);
    }
    
    else if(root.val > R){
        return rangeSumBST(root.left, L, R);
    }
    
    else{
        return root.val + rangeSumBST(root.right, L, R) +
               rangeSumBST(root.left, L, R);
    }
};