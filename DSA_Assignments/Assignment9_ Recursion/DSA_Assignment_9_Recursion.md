#
* **Question 1**

Given an integer `n`, return *`true` if it is a power of two. Otherwise, return `false`*.

An integer `n` is a power of two, if there exists an integer `x` such that `n == 2x`.

**Example 1:**
Input: n = 1 
Output: true
* **Answers**

```
function isPowerOfTwo(n) {
    if (n === 1) {
      return true;
    } else if (n % 2 === 0 && n > 0) {
      return isPowerOfTwo(n / 2);
    } else {
      return false;
    }
  }

let n = 1 ;
console.log(isPowerOfTwo(n));
//Output: true
```

#
* **Question 2**
Given a number n, find the sum of the first natural numbers.

* **Answers**

```

function sum(n) {
   return (n===1) ? 1 : (n+sum(n-1))  
  }

let n = 4 ;
console.log(sum(n));
//Output: 10

```

#
* **Question 3**
Given a positive integer, N. Find the factorial of N. 

* **Answers**

```
function factorial(n) {
   return (n===1 || n===0) ? 1 : (n*factorial(n-1))  
  }

let n = 4 ;
console.log(factorial(n));
//Output:24
```

#
* **Question 4**
Given a number N and a power P, the task is to find the exponent of this number raised to the given power, i.e. N^P.

**Example 1 :** 

Input: N = 5, P = 2

Output: 25

* **Answers**

```
function powerOf(N , P) {
   if (P===0){
    return 1}
   else if(P===1) { return N
   }else{
    return N*powerOf(N, P-1)
   }
  }

let N = 5;
let P = 2;
console.log(powerOf(N, P));
//Output: 25

```

#
* **Question 5**

Given an array of integers **arr**, the task is to find maximum element of that array using recursion.

**Example 1:**

Input: arr = [1, 4, 3, -5, -4, 8, 6];
Output: 8

* **Answers**

```
function findMax(arr) {
  let start = 0;
  let end = arr.length - 1;

  if (start === end) {
    return arr[start];
  }

  let mid = Math.floor((start + end) / 2);
  let leftMax = findMax(arr.slice(start, mid + 1));
  let rightMax = findMax(arr.slice(mid + 1, end + 1));

  return Math.max(leftMax, rightMax);
}

let arr = [1, 4, 3, -5, -4, 8, 6];
console.log(findMax(arr));
// Output: 8
```

#
* **Question 6**
Given first term (a), common difference (d) and a integer N of the Arithmetic Progression series, the task is to find Nth term of the series.
* **Answers**

```
function findNthTerm(a, d, N) {
  if (N === 1) {
    return a;
  }
  return findNthTerm(a, d, N - 1) + d;
}
let a = 2;
let d = 1;
let N = 5;
console.log(findNthTerm(a, d, N));
//Output:6
```

#
* **Question 7**
Given a string S, the task is to write a program to print all permutations of a given string.

* **Answers**

```
function permutations(S) {
  function generatePermutations(str, current = "") {
    if (str.length === 0) {
      console.log(current);
      return;
    }

    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      let remainingStr = str.slice(0, i) + str.slice(i + 1);
      generatePermutations(remainingStr, current + char);
    }
  }

  generatePermutations(S);
}
let S = 'ABC';
permutations(S)
// Outptu: “ABC”, “ACB”, “BAC”, “BCA”, “CBA”, “CAB”

```

#
* **Question 8**
Given an array, find a product of all array elements.
* **Answers**

```
function arrayProduct(arr) {
  if (arr.length === 0) {
    return 1;
  }
  let firstElement = arr[0];
  let remainingElements = arr.slice(1);
  return firstElement * arrayProduct(remainingElements);
}
let arr= [1, 2, 3, 4, 5];
console.log(arrayProduct(arr));
//Output: 120

```