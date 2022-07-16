

class Node { 
    constructor(value, next = null) { 
        this.value = value; 
        this.next = next; 
    } 
} 

class LinkedList { 
    constructor(value) { 
        let node = new Node(value);
        // node.next = node; 
        this.head = node; 
        this.tail = node; 
        this.length = 1; 
    } 

    append(value) { 
        let node = new Node(value);
        this.tail.next = node; 
        this.tail = node; 
        // this.tail.next = this.head; 
        this.length++; 
    } 

    appendMultiple(arr) { 
        for(let i = 0; i < arr.length; i++) { 
            this.append(arr[i])
        } 
    } 

    prepend(value) { 
        let node = new Node(value, this.head);
        this.head = node; 
        // this.tail.next = node; 
        this.length++; 
    } 

    print() { 
        let data = this.head; 
        while(data) { 
            console.log(data.value);
            data = data.next; 
            // 50, 3, 100, 200, 65, 50, 23
        } 
    } 

    #getPrevious(index) { 
        index = index - 1; 

        let data = this.head; 
        while(index) { 
            data = data.next; 
            index--; 
        } 

        return data; 
    } 

    #getCurrentNode(index) { 
        let data = this.head; 
        while(index) { 
            data = data.next; 
            index--; 
        } 

        return data; 
    } 

    insertAtPosition(value, index) { 
        if(index === 0) this.prepend(value); 
        else if(index === this.length) this.append(value); 
        else { 
            let previousNode = this.#getPrevious(index); // 4
            let newNode = new Node(value, previousNode.next); 
            previousNode.next = newNode; 
            this.length++; 
        } 
    } 

    updateAtPosition(value, index) { 
        if(index === 0) { 
            this.head.value = value; 
        } 
        else if(index === this.length) { 
            this.tail.value = value; 
        } 
        else { 
            let currentNode = this.#getCurrentNode(index);
            currentNode.value = value; 
        } 
    } 

    deleteAtPosition(index) { 
        if(index === 0) { 
            head = head.next; 
        } 
        else if(index === this.length-1) { 
            let lastNode = this.#getPrevious(index)
            lastNode.next = null
            this.tail = lastNode
        } 
        else { 
            let node = this.#getPrevious(index)
            node.next = node.next.next; 
        } 
        this.length--; 
    } 

    reverseLL() { 
        if(this.length === 1) {} 
        else if(this.length === 2) { 
            // swap values with temp variables 
        } 
        else { 
            let preNode = this.head; 
            let currentNode = this.head.next; 

            while(currentNode) { 
                let nextNode = currentNode.next; 

                currentNode.next = preNode; 

                preNode = currentNode; 
                currentNode = nextNode; 
            } 

            this.head.next = null; 
            this.head = preNode; 
        } 
    } 
} 

let list = new LinkedList(100); 
list.append(5)
list.prepend(3)
list.append(23)
list.insertAtPosition(50, 0)
list.insertAtPosition(50, 4)
list.insertAtPosition(65, 4)
list.updateAtPosition(200, 3)
list.reverseLL()
list.print();



// 1. Linear search
// 2. Binary search
// 3. kadanes algo
// 4. pre-computation 
// 5. Two pointer algo 
// 6. Big number 
// 7. OOP basic 
// 8. Linked list 


