function Node(value) {
    this.var = value;
    this.next = null;
};

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(values) {
        for (const value of values) {
            const newNode = new Node(value);

            if (this.head === null) {
                this.head = newNode;
                this.tail = this.head;
            }

            else {
                this.tail.next = newNode;
                this.tail = this.tail.next;
            }
        }
    }
}

module.exports = LinkedList;


