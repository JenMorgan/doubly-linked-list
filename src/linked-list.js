const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    append(data) {
        var nodeToAdd = new Node(data);

        if (this.length > 0) {
            while (nodeToAdd.next) {
                nodeToAdd = nodeToAdd.next;
            }
            this._tail.next = nodeToAdd;
            nodeToAdd.prev = this._tail;
            this._tail = nodeToAdd;
        }
        else {
            this._tail = nodeToAdd;
            this._head = nodeToAdd;
        }
        this.length++;
        return nodeToAdd;
        return this;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        var nodeToSearch=this._head;
        var length = this.length;
    if (length === 0 || index < 0 || index > length) {
        return false;
    }

    else {
        var x = 0;
        while (x!=index) {
            nodeToSearch = nodeToSearch.next;
            x++;
        }
        return nodeToSearch.data;
    }
    }

    insertAt(index, data) {
        var nodeToAdd=new Node(data);
        var nodeToSearch = this._head;
        if (index >= 0) {
            var x = 0;
            while (x!=index) {
                nodeToSearch = nodeToSearch.next;
                x++
            }
            nodeToSearch.data= nodeToAdd.data;
        }

        else {
            return -1;
        }
        return this;
    }

    isEmpty() {
        return this.length === 0;
    }

    clear() {
        var nodeToDelete = this._head;
        var nodeToDeletePrev=null;
        while (nodeToDelete.next) {
            nodeToDeletePrev = nodeToDelete;
            nodeToDelete = nodeToDelete.next;
            nodeToDeletePrev=null;
            this._head=nodeToDelete;
            this.length--;
        }
        nodeToDeletePrev=null;
        nodeToDelete=null;
        this._tail = null;
        this.length--;
    }

    deleteAt(x) {
        var length = this._length;
        var nodeToDelete = this._head;
        var nodeToDeletePrev = null;

        if (x > length) {
            console.log("Error occurred, Node isn’t exist");
        }
        if (x === 1) {
            this._head = nodeToDelete.next;
            this.length--;
            return this._head;
        }
        if (x === this.length) {
            this._tail = nodeToDelete.prev;
            this.length--
            return this._tail;
        }

        for (var i = 1; i < x; i++) {
            nodeToDeletePrev = nodeToDelete;
            nodeToDelete = nodeToDelete.next;
        }
        nodeToDeletePrev.next = nodeToDelete.next;
        nodeToDelete = null;
        this.length--
        return nodeToDelete;
        return this;
    }

    reverse() {
        while (!this._head) {
            var save = this_head.next;
            this._head.next = this._head.prev;
            this._head.prev=save;
            if (!save) {
                break;
            }
            this._head=save;
        }
        return this._head;
        return this;
    }

    indexOf(dataWeAreLookingFor) {
        var nodeIndexOf = this._head;
        var length = this.length;
        for (var i = 0; i < length; i++) {
            if (nodeIndexOf.data === dataWeAreLookingFor) {
                return i;
                break;
            }
            else {
                nodeIndexOf=nodeIndexOf.next;
            }
        
        }
        if (i=length) {
            return -1;
        }
    }
}

module.exports = LinkedList;