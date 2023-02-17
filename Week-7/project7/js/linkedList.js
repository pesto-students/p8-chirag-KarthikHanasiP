// common file for linked List

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    append(element) {
        let node = new Node(element);
        let current = null;

        if(this.head === null) {
            this.head = node;
        } else {
            current = this.head;

            while(current.next !== null) {
                current = current.next;
            }
    
            current.next = node;
        }
        this.size++;
        
    }

    print() {
        return this.head;
    }

    reverseLinkedList() {
        let prev = null;
        let current = this.head;
        let next = null;

        while (current !== null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        return prev;
    }

    rotateLinkedList(k) {
        if (k === 0 || this.head === null) return
        let current = this.head;
        let count = 1;
        while(count < k && current !== null) {
            current = current.next;
            count++;
        }

        let kth = current;

        while(current !== null) {
            current = current.next;
        }

        // current.next = this.head;
        // console.log();
        this.head = kth.next;
        current = this.head;
        kth.next = null;

    }

    detectLoop() {
        let nodeS = this.head;
        let nodeF = this.head;

        while (nodeS !== null && nodeF !== null) {
            try {
                nodeS = nodeS.next;
                nodeF = nodeF.next.next;
            }

            catch {
                return false;
            }
            
            if(nodeS === nodeF) {
                return true;
            }

            // nodeS === nodeF ? return true : "";

        }

        return false;
    }
}

export default LinkedList;