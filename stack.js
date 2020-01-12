class _Node {
    constructor(data, next) {
        this.data = data
        this.next = next
    }
}

class Stack {
    constructor() {
        this.top = null
    }
    push(data) {
        if (this.top === null) {
            this.top = new _Node(data, null)
            return this.top
        }
        const node = new _Node(data, this.top)
        this.top = node
    }
    pop() {
        const node = this.top
        this.top = node.next
        return node.data
    }
}

const starTrek = new Stack
['Kirk', 'Spock', 'McCoy', 'Scotty'].forEach(n => starTrek.push(n))

function peek(stack) {
    return stack.top
}

function isEmpty(stack) {
    if (stack.top === null) {
        return true
    } else {
        return false
    }
}

function display(stack) {
    let current = stack.top
    let result = []
    let count = 0
    while (current.next !== null) {
        result.push(current.data)
        count++
        current = current.next
    }
    //return `The stack has ${count} values — here they are: ${result}`
    return result
}

starTrek.pop().pop()

display(starTrek)

function is_palindrome(s) {
    const stack = new Stack
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')
    let inputArr = []
    for (let i = 0; i < s.length; i++) {
        inputArr.push(s[i])
    }
    inputArr.forEach((l, i) => {
        stack.push(l)
        inputArr.unshift()
        if (display(stack).length === inputArr.length) {
            if (display(stack).join('') === s) {
                return true
            }
            return false
        }
    })
}

//4. Matching parentheses in an expression
function checkPar(exp) {
    const checkStack = new Stack
    for (let i = 0; i < exp.length; i++) {
        if (exp[i] === '(') {
            checkStack.push(exp[i])
        } else if (exp[i] === ')') {
            if (!checkStack.pop()) {
                return `Missing ')' at position ${i}`
            }
        }
    }
    
}