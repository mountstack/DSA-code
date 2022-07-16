
class Node { 
    constructor(value, next = null, pre = null) { 
        this.value = value; 
        this.next = next; 
        this.pre = pre; 
    } 
}

class LinkedList { 
    length = 0; 

    constructor(value) { 
        let node = new Node(value); 
        this.head = node; 
        this.tail = node; 
        this.length++; 
    } 

    append(value) { 
        let node = new Node(value); 
        this.tail.next = node; 
        node.pre = this.tail; 
        this.tail = node; 
        this.length++; 
    } 

    // prepend() 
    // insertAt() 
    // removeAt() 
    // updateAt() 
    // print() 
} 


let list = new LinkedList(10); 

list.append(20)

list
