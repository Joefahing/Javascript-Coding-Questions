function Node(value) {
    this.val = value;
    this.right = this.left = null;
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    constructTree(values) {

        function append(values, index, root) {
            if (index < values.length) {
                root = new Node(values[index]);
                root.left = append(values, index * 2 + 1, root.left);
                root.right = append(values, index * 2 + 2, root.right);
            }
        }
        const root = this.root
        append(values, 0, root);
    }
}

const tree = new BinaryTree();
tree.constructTree([1, 2, 4, 5, 7, 9, 0]);
console.log(tree.root);