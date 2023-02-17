// common file for Stack and Queue

class Stack {
    constructor() {
        this.data = [];
    }

    push(element) {
        this.data.push(element);
    }

    print() {
        return this.data;
    }
    pop() {
        this.data.pop();
    }

    parenthesisChecker() {
        const dataLength = this.data.length;
        let stack = this.data;
        let newStack = [];
        for(let i = 0; i < dataLength; i++) {

            if(stack[i] === '(' || stack[i] === '[' || stack[i] === '{') {
                newStack.push(stack[i]);
                continue;
            }

            if (newStack.length === 0)
                return false;

            let check;
            switch (stack[i]) {
                case ')':
                    check = newStack.pop();
                    if (check === '{' || check === '[')
                        return false;
                    break;
            
                case '}':
                    check = newStack.pop();
                    if (check === '(' || check === '[')
                        return false;
                    break;
            
                case ']':
                    check = newStack.pop();
                    if (check === '(' || check === '{')
                        return false;
                    break;
            }
        }
        return newStack.length === 0;
    }

    nextGreaterElement() {

        const dataLength = this.data.length;
        if(!dataLength) return;

        let arr = this.data;

        const s = [];
        s.push(arr[0]);
        
        for (let i = 1; i < dataLength; i++) {
            let sLength = s.length-1;
            while (s.length > 0 && s[sLength] < arr[i]) {
                console.log( s[sLength] + " -> " + arr[i]);
                s.pop();
            }

            s.push(arr[i]);
        }
        
        while (s.length !== 0) {
            console.log( s[s.length-1] + " -> " + -1);
            s.pop();
        }
    }
}

class Queue {
    constructor() {
        this.s1 = [];
        this.s2 = [];
    }

    enqueue(element) {
        this.s1.push(element);
    }

    dequeue() {
        if(this.s2.length === 0) {
            if(this.s1.length === 0) {
                return false;
            }

            while(this.s1.length > 0) {
                // const popElement = this.s1.pop();
                this.s2.push(this.s1.pop());
            }
        }
    }

    printS1() {
        return this.s1;
    }

    printS2() {
        return this.s2;
    }
}

export {Stack, Queue};