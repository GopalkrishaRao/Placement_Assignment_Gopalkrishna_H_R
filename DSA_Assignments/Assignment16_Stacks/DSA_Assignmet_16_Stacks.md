#
* **Question 1**
Given an array, for each element find the value of the nearest element to the right which is having a frequency greater than that of the current element. If there does not exist an answer for a position, then make the value ‘-1’.

* **Answer:**

```
function findNearestGreaterFrequency(arr) {
  const frequencyMap = new Map();
  const stack = [];
  const result = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    const currentElement = arr[i];
    const currentFrequency = frequencyMap.get(currentElement) || 0;

    while (stack.length > 0 && currentFrequency >= frequencyMap.get(arr[stack[stack.length - 1]])) {
      stack.pop();
    }

    if (stack.length === 0) {
      result[i] = -1;
    } else {
      result[i] = arr[stack[stack.length - 1]];
    }

    stack.push(i);
    frequencyMap.set(currentElement, currentFrequency + 1);
  }

  return result;
};


const arr = [1, 1, 2, 3, 4, 2, 1];
const result = findNearestGreaterFrequency(arr);
console.log(result); 
// Output: [-1, -1, 1, 2, 2, 1, -1]


```

#
* **Question 2**

Given a stack of integers, sort it in ascending order using another temporary stack.

* **Answer:**

```
function sortStack(stack) {
  const tempStack = [];

  while (stack.length > 0) {
    const temp = stack.pop();

    while (tempStack.length > 0 && tempStack[tempStack.length - 1] > temp) {
      stack.push(tempStack.pop());
    }

    tempStack.push(temp);
  }

  return tempStack;
}

const stack1 = [34, 3, 31, 98, 92, 23];
const sortedStack1 = sortStack(stack1);
console.log(sortedStack1);
// Output: [3, 23, 31, 34, 92, 98]

```

#
* **Question 3**
Given a stack with push(), pop(), and empty() operations, The task is to delete the middle element of it without using any additional data structure.
* **Answer:**

```
function deleteMiddle(stack, k) {
  
  if (k === 1) {
    stack.pop();
    return;
  }

  const temp = stack.pop();
  deleteMiddle(stack, k - 1);
  stack.push(temp);
}

function deleteMiddleElement(stack) {
  const n = Math.ceil(stack.length / 2);
  deleteMiddle(stack, n); 
  return stack;
}

const stack1 = [1, 2, 3, 4, 5];
const modifiedStack1 = deleteMiddleElement(stack1);
console.log(modifiedStack1);
 // Output: [1, 2, 4, 5]
```

#
* **Question 4**

Given a Queue consisting of first **n** natural numbers (in random order). The task is to check whether the given Queue elements can be arranged in increasing order in another Queue using a stack. The operation allowed are:

1. Push and pop elements from the stack
2. Pop (Or Dequeue) from the given Queue.
3. Push (Or Enqueue) in the another Queue.

* **Answer:**

```
function checkQueueArrangement(queue) {
  const stack = [];
  const secondQueue = [];

  while (queue.length > 0) {
    const front = queue[0];

    if (stack.length > 0 && front >= stack[stack.length - 1]) {
      secondQueue.push(front);
      queue.shift();
    } else if (stack.length === 0 || front < stack[stack.length - 1]) {
      stack.push(front);
      queue.shift();
    } else {
      return "No";
    }
  }

  while (stack.length > 0) {
    secondQueue.push(stack.pop());
  }

  for (let i = 1; i < secondQueue.length; i++) {
    if (secondQueue[i] < secondQueue[i - 1]) {
      return "No";
    }
  }

  return "Yes";
}

const queue1 = [5, 1, 2, 3, 4];
const result1 = checkQueueArrangement(queue1);
console.log(result1);
 // Output: Yes

```

#
* **Question 5**
Given a number , write a program to reverse this number using stack.


* **Answer:**

```
function reverseNumber(number) {
  const numberString = number.toString();
  const stack = [];
  
  for (let i = 0; i < numberString.length; i++) {
    stack.push(numberString[i]);
  }
  
  let reversedString = '';
  
  while (stack.length > 0) {
    reversedString += stack.pop();
  }
  
  const reversedNumber = parseInt(reversedString, 10);
  
  return reversedNumber;
}

const number1 = 365;
const reversed1 = reverseNumber(number1);
console.log(reversed1); 
// Output: 563
```

#
* **Question 6**
Given an integer k and a queue** of integers, The task is to reverse the order of the first **k** elements of the queue, leaving the other elements in the same relative order.

Only following standard operations are allowed on queue.

- **enqueue(x) :** Add an item x to rear of queue
- **dequeue() :** Remove an item from front of queue
- **size() :** Returns number of elements in queue.
- **front() :** Finds front item.

* **Answer:**

```
function reverseFirstKElements(queue, k) {
  const stack = [];
  const tempQueue = [];

  for (let i = 0; i < k; i++) {
    stack.push(queue.shift());
  }

  while (queue.length > 0) {
    tempQueue.push(queue.shift());
  }

  while (stack.length > 0) {
    queue.push(stack.pop());
  }

  while (tempQueue.length > 0) {
    queue.push(tempQueue.shift());
  }

  return queue;
}
```


#
* **Question 7**
Given a sequence of n strings, the task is to check if any two similar words come together and then destroy each other then print the number of words left in the sequence after this pairwise destruction.
* **Answer:**

```
function countWordsLeft(sequence) {
  const stack = [];

  for (let i = 0; i < sequence.length; i++) {
    const currentWord = sequence[i];

    if (stack.length === 0 || currentWord !== stack[stack.length - 1]) {
      stack.push(currentWord);
    } else {
      stack.pop();
    }
  }

  return stack.length;
}

const sequence1 = ["ab", "aa", "aa", "bcd", "ab"];
const remainingWords1 = countWordsLeft(sequence1);
console.log(remainingWords1);
 // Output: 3

```

#
* **Question 8**

Given an array of integers, the task is to find the maximum absolute difference between the nearest left and the right smaller element of every element in the array.

**Note:** If there is no smaller element on right side or left side of any element then we take zero as the smaller element. For example for the leftmost element, the nearest smaller element on the left side is considered as 0. Similarly, for rightmost elements, the smaller element on the right side is considered as 0.

* **Answer:**

```
function maxAbsoluteDifference(arr) {
  const n = arr.length;
  const leftSmaller = new Array(n).fill(0);
  const rightSmaller = new Array(n).fill(0);
  const stack = [];

  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && arr[stack[stack.length - 1]] >= arr[i]) {
      stack.pop();
    }
    if (stack.length === 0) {
      leftSmaller[i] = 0;
    } else {
      leftSmaller[i] = arr[stack[stack.length - 1]];
    }
    stack.push(i);
  }

  stack.length = 0; // Clear the stack

  for (let i = n - 1; i >= 0; i--) {
    while (stack.length > 0 && arr[stack[stack.length - 1]] >= arr[i]) {
      stack.pop();
    }
    if (stack.length === 0) {
      rightSmaller[i] = 0;
    } else {
      rightSmaller[i] = arr[stack[stack.length - 1]];
    }
    stack.push(i);
  }

  let maxDiff = 0;

  for (let i = 0; i < n; i++) {
    const diff = Math.abs(leftSmaller[i] - rightSmaller[i]);
    if (diff > maxDiff) {
      maxDiff = diff;
    }
  }

  return maxDiff;
}


```