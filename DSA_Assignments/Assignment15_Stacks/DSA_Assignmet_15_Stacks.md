#
* **Question 1**
Given an array arr[ ] of size N having elements, the task is to find the next greater element for each element of the array in order of their appearance in the array.Next greater element of an element in the array is the nearest element on the right which is greater than the current element.If there does not exist next greater of current element, then next greater element for current element is -1. For example, next greater of the last element is always -1.

* **Answer:**

```
function findNextGreaterElements(arr) {
  const stack = [];
  const result = new Array(arr.length).fill(-1);
  
  for (let i = arr.length - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] <= arr[i]) {
      stack.pop();
    }
    
    if (stack.length) {
      result[i] = stack[stack.length - 1];
    }
    
    stack.push(arr[i]);
  }
  
  return result;
}

const arr = [1, 3, 2, 4];
console.log(findNextGreaterElements(arr));

Output: [3, 4, 4, -1]
```

#
* **Question 2**
 Given an array a of integers of length n, find the nearest smaller number for every element such that the smaller element is on left side.If no small element present on the left print -1.
* **Answer:**

```
function findNearestSmallerElements(a) {
  const stack = [];
  const result = [];

  for (let i = 0; i < a.length; i++) {
    while (stack.length && stack[stack.length - 1] >= a[i]) {
      stack.pop();
    }
    if (stack.length) {
      result.push(stack[stack.length - 1]);
    } else {
      result.push(-1);
    }

    stack.push(a[i]);
  }
  return result;
}

```

#
* **Question 3**

Implement a Stack using two queues q1 and q2.

* **Answer:**

```
class StackUsingQueues {
  constructor() {
    this.q1 = [];
    this.q2 = [];
  }

  push(value) {
    this.q1.push(value);
  }

  pop() {
    if (this.isEmpty()) {
      return 'Error: Stack underflow';
    }

    while (this.q1.length > 1) {
      this.q2.push(this.q1.shift());
    }

    return this.q1.shift();
  }

  top() {
    if (this.isEmpty()) {
      return 'Error: Stack underflow';
    }

    while (this.q1.length > 1) {
      this.q2.push(this.q1.shift());
    }

    const topElement = this.q1.shift();
    this.q2.push(topElement);
    this.q1 = this.q2;
    this.q2 = [];

    return topElement;
  }

  isEmpty() {
    return this.q1.length === 0 && this.q2.length === 0;
  }
}

```

#
* **Question 4**
You are given a stack St. You have to reverse the stack using recursion.


* **Answer:**

```
class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return 'Error: Stack underflow';
    }
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

function reverseStack(stack) {
  if (stack.isEmpty() || stack.items.length === 1) {
    return;
  }

  const temp = stack.pop();
  reverseStack(stack);
  insertAtBottom(stack, temp);
}

function insertAtBottom(stack, element) {
  if (stack.isEmpty()) {
    stack.push(element);
    return;
  }

  const temp = stack.pop();
  insertAtBottom(stack, element);
  stack.push(temp);
}

```

#
* **Question 5**

You are given a string S, the task is to reverse the string using stack.

* **Answer:**

```
class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return 'Error: Stack underflow';
    }
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

function reverseString(string) {
  const stack = new Stack();

  
  for (let i = 0; i < string.length; i++) {
    stack.push(string[i]);
  }

  let reversedString = '';

  while (!stack.isEmpty()) {
    reversedString += stack.pop();
  }

  return reversedString;
}
```

#
* **Question 6**
Given string S representing a postfix expression, the task is to evaluate the expression and find the final value. Operators will only include the basic arithmetic operators like *, /, + and -.
* **Answer:**

```
class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return 'Error: Stack underflow';
    }
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

function evaluatePostfixExpression(expression) {
  const stack = new Stack();

  for (let i = 0; i < expression.length; i++) {
    const char = expression[i];

    if (isOperand(char)) {
      stack.push(parseInt(char));
    } else if (isOperator(char)) {
      const operand2 = stack.pop();
      const operand1 = stack.pop();

      const result = performOperation(operand1, operand2, char);
      stack.push(result);
    }
  }

  return stack.pop();
}

function isOperand(char) {
  return !isNaN(parseInt(char));
}

function isOperator(char) {
  return char === '+' || char === '-' || char === '*' || char === '/';
}

function performOperation(operand1, operand2, operator) {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    case '/':
      return operand1 / operand2;
    default:
      return null;
  }
}


const postfixExpression = "231*+9-";
const result = evaluatePostfixExpression(postfixExpression);
console.log(result);

//Output: -4
```

#
* **Question 7**

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the `MinStack` class:

- `MinStack()` initializes the stack object.
- `void push(int val)` pushes the element `val` onto the stack.
- `void pop()` removes the element on the top of the stack.
- `int top()` gets the top element of the stack.
- `int getMin()` retrieves the minimum element in the stack.

You must implement a solution with `O(1)` time complexity for each function.

* **Answer:**

```
class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(val) {
    this.stack.push(val);

    
    if (this.minStack.length === 0 || val <= this.getMin()) {
      this.minStack.push(val);
    }
  }

  pop() {
    const popped = this.stack.pop();

    if (popped === this.getMin()) {
      this.minStack.pop();
    }
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}

```

#
* **Question 8**
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
* **Answer:**

```
function trapWater(height) {
  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let totalWater = 0;

  while (left <= right) {
    if (height[left] <= height[right]) {
      if (height[left] > leftMax) {
        leftMax = height[left];
      } else {
        totalWater += leftMax - height[left];
      }
      left++;
    } else {
      if (height[right] > rightMax) {
        rightMax = height[right];
      } else {
        totalWater += rightMax - height[right];
      }
      right--;
    }
  }

  return totalWater;
}

const height = [4, 2, 0, 3, 2, 5];
const waterTrapped = trapWater(height);
console.log(waterTrapped); 
// Output: 9

```