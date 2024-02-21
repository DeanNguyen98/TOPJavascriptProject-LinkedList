class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class Linkedlist {
    constructor() {
        this.head = null;
    }
    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            return;
        } 
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }
    prepend(value) {
        const newNode = new Node(value, this.head);
        this.head = newNode;
    }
    size() {
        let count = 0;
        let current = this.head;
        while (current) {
            count++;
            current = current.next;
        }
        return count;
    }
    gethead() {
        return this.head;
    }
    tail() {
        let current = this.head;
        while (current && current.next) {
            current = current.next;
        }
        return current;
    }
    at(index) {
        let count = 0;
        let current = this.head;
        while (current) {
            if (count === index) {
                return current;
            }
            count++;
            current = current.next;
            return current;
        }
        return null;
    }
    pop() {
        if (!this.head) return null;
        if(!this.head.next) {
            const popValue = this.head.value;
            this.head = null;
            return popValue;
        }
        let current = this.head;
        let previous = null;
        while (current.next) {
            previous = current;
            current = current.next;
        }
        const popvalue = current.value;
        previous.next = null;
        return popvalue;
    }
    find(value) {
        let index = 0
        let current = this.head;
        while(current) {
            if (current.value === value) return index;
            index++;
            current = current.next
        }
        return null;
    }
    contains(value) {
        let current = this.head;
        while(current) {
            if (current.value === value) return true;
            current = current.next;
        }
        return false;
    }
    toString() {
        let result = '';
        let current = this.head;
        while(current) {
            result += `(${current.value}) ->`
            current = current.next;
        }
        result += 'null';
        return result;
    }
    
}

const linkedList = new Linkedlist();

linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.prepend(0);
linkedList.append(4);

console.log(linkedList.toString()); // (0) -> (1) -> (2) -> (3) -> (4) -> null
console.log(linkedList.size()); // 5
console.log(linkedList.head.value); // 0
console.log(linkedList.tail().value); // 4
console.log(linkedList.at(2).value); // 2
console.log(linkedList.pop()); // 4
console.log(linkedList.contains(2)); // true
console.log(linkedList.contains(5)); // false
console.log(linkedList.find(2)); // 2
console.log(linkedList.find(5))