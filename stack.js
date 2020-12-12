class Stack {
    
    constructor() {
        this._head = [];     
    }

    // places top element on stack
    push(item) {
        this._head.push(item);
    }

    // returns top element of stack
    pop() {
        if (this._head.length === 0) {
            return undefined;
        } else {
            return this._head.pop();
        }
    }

    getSize() {
        return this._head.length;
    }
}