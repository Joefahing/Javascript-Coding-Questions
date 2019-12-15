function SegementTree(sum, start, end, right, left){
    this.sum = sum
    this.start = start
    this.end = end
    this.right = right !== null ? right : null;
    this.left = left !== null ? left : null;
}

var NumArray = function (array){


    const helper = (start, end, array) => {
        if(start === end){
            return new SegementTree(array[start], start, end, null, null);
        }

        const mid = Math.floor((start + end)/2);
        const left = helper(start, mid, array);
        const right = helper(mid+1, end, array);

        return new SegementTree(right.sum + left.sum , start, end, right, left);
    }

    this.root = helper(0, array.length-1, array);
}

NumArray.prototype.update = function (i, val){
   
    const helper = (node, i, val) =>{
        if(node.start ===i && node.end === i){
            node.sum = val;
            return val;
        }

        const right = node.right;
        const left = node.left;

        if(i >= right.start){
           node.sum =  helper(right, i, val) + left.sum;
        }
        else if(i <= left.end){
            node.sum = helper(left, i , val) + right.sum;
        }
        return node.sum;
    }
    helper(this.root, i, val);
}

NumArray.prototype.sumRange = function (i, j){
    
    const helper = (i, j, node) => {
        if(node.start === i  && node.end === j) return node.sum

        const mid = Math.floor((node.start + node.end)/2);

        if(i >= node.right.start) return helper(i, j, node.right);
        else if(j <= node.left.end) return helper(i, j, node.left);
        else return helper(i, mid, node.left) + helper(mid+1, j, node.right);
        
    }

    return helper(i, j, this.root);
}

const tree = new NumArray([4,2,3,5,1]);

tree.update(4, 2);
console.log(tree.sumRange(1,3));
