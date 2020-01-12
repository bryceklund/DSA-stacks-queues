class _Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
    }
    enqueue(data) {
        const node = new _Node(data)
        if (this.first === null) {
            this.first = node
        }
        if (this.last) {
            this.last.next = node
        }
        this.last = node
    }
    dequeue() {
        if (this.first === null) {
            return
        }
        const node = this.first
        this.first = this.first.next
        if (node === this.last) {
            this.last = null
        }
        return node.value
    }
}

const starTrekQ = new Queue
['Kirk', 'Spock', 'Uhura', 'Sulu', 'Checkov'].forEach(n => Queue.enqueue(n))

function peek(queue) {
    if (!queue.first) {
        return 'Queue is empty!'
    } else {
        return queue.first
    }
}

function isEmpty(queue) {
    if (!queue.first) {
        return true
    } else {
        return false
    }
}

function display(queue) {
    if (!queue.first) {
        return 'Queue is empty!'
    }
    const result = []
    while (queue.first !== null) {
        result.push(queue.dequeue())
    }
    return result
}

starTrekQ.dequeue()
starTrekQ.dequeue()
display(starTrekQ)

/*
Queue implementation with two stacks

to enqueue:
-iterate through the main stack, popping everything off and pushing to the buffer stack
-push the desiredd value to the main stack
-iterate through the buffer stack, popping everything off and pushing back to the main stack

to dequeue:
pop from the main stack :)
*/

