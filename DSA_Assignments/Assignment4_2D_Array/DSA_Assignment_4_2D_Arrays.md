#
* **Question 1**


💡 Given three integer arrays arr1, arr2 and arr3 **sorted** in **strictly increasing** order, return a sorted array of **only** the integers that appeared in **all** three arrays.

**Example 1:**

Input: arr1 = [1,2,3,4,5], arr2 = [1,2,5,7,9], arr3 = [1,3,4,5,8]

Output: [1,5]

**Explanation:** Only 1 and 5 appeared in the three arrays.


* **Answers**

```
function commonElements(arr1, arr2, arr3) {
  let common = [];
  let i = 0, j = 0, k = 0;

  while (i < arr1.length && j < arr2.length && k < arr3.length) {
    if (arr1[i] === arr2[j] && arr2[j] === arr3[k]) {
      common.push(arr1[i]);
      i++;
      j++;
      k++;
    } else if (arr1[i] < arr2[j]) {
      i++;
    } else if (arr2[j] < arr3[k]) {
      j++;
    } else {
      k++;
    }
  }
  return common;
}

  
  let arr1 =  [1,2,3,4,5]
  let arr2=  [1,2,5,7,9]
 let  arr3= [1,3,4,5,8]
console.log(commonElements(arr1, arr2, arr3));
// Output: [1,5]  
```

#
* **Question 2**
Given two **0-indexed** integer arrays nums1 and nums2, return *a list* answer *of size* 2 *where:*

- answer[0] *is a list of all **distinct** integers in* nums1 *which are **not** present in* nums2*.*
- answer[1] *is a list of all **distinct** integers in* nums2 *which are **not** present in* nums1.

**Note** that the integers in the lists may be returned in **any** order.

**Example 1:**

**Input:** nums1 = [1,2,3], nums2 = [2,4,6]

**Output:** [[1,3],[4,6]]

* **Answers**

```
function difference(nums1, nums2) {
  let arr1=[];
  let arr2=[];
  for (let i=0; i<nums1.length; i++) {
      let unique=true;
      for (let j=0, k=i+1; j<nums2.length+nums1.length; j++,k++) {
          if(nums1[i]===nums2[j] || nums1[i]==nums1[k]){
              unique=false;
          }
      }
      if(unique){
          arr1.push(nums1[i])
      }
  }
  for (let i=0; i <nums2.length; i++) {
      let unique=true
      for (let j=0,k=i+1; j<nums1.length+nums2.length; j++,k++) {
          if(nums1[j]==nums2[i] || nums2[i]==nums2[k]){
              unique=false;
          }
      }
      if(unique===true){
          arr2.push(nums2[i])
      }
  }
  return [arr1,arr2]
}

  
  let nums1 = [1,2,3]
  let nums2= [2,4,6]
  console.log(difference(nums1, nums2));
  //Output: [[1,3],[4,6]]

```

#
* **Question 3**

💡 Given a 2D integer array matrix, return *the **transpose** of* matrix.

The **transpose** of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.

**Example 1:**

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]

Output: [[1,4,7],[2,5,8],[3,6,9]]


* **Answers**

```
function transpose(matrix) {
  const  tranpsoed = []
  for(let i  = 0 ; i <matrix[0].length ;i++){
      const d = []
      for(let j = 0 ; j < matrix.length ; j++){
          d.push(matrix[j][i])
      }
      tranpsoed.push(d)
  }
  return tranpsoed
}
  
  let matrix = [[1,2,3],[4,5,6],[7,8,9]]
  console.log(transpose(matrix));
  //Output: [ [ 1, 4, 7 ], [ 2, 5, 8 ], [ 3, 6, 9 ] ]

```

#
* **Question 4**

💡 Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn) such that the sum of min(ai, bi) for all i is **maximized**. Return *the maximized sum*.

**Example 1:**

Input: nums = [1,4,3,2]

Output: 4


* **Answers**

```
const arraySplitSum = (nums)=>{
  nums.sort((a,b) => a-b)
    let sum = 0
    for(let i = 0; i<nums.length; i=i+2){
        sum += nums[i]
    }
    return sum
};

let nums = [1,4,3,2];
console.log(arraySplitSum(nums));
//Output: 4

```

#
* **Question 5**
💡 You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase **may be** incomplete.

Given the integer n, return *the number of **complete rows** of the staircase you will build*.


* **Answers**

```
function numbeofStairs(n) {
  let coin = 0;
    let count = 1;
    while (coin < n) {
        coin += count + 1;
        count++;
    }
    return count - 1;
}

let n=2;
console.log(numbeofStairs(n));
  // Output: 2;
```

#
* **Question 6**

💡 Given an integer array nums sorted in **non-decreasing** order, return *an array of **the squares of each number** sorted in non-decreasing order*.

**Example 1:**

Input: nums = [-4,-1,0,3,10]

Output: [0,1,9,16,100]


* **Answers**

```
function sortedSquare(nums) {
  let square=[]
  for(let i=0; i<nums.length; i++){
    square.push(nums[i]*nums[i])
  }
  return square.sort((a,b)=>a-b)
}

let nums=[-4,-1,0,3,10];
console.log(sortedSquare(nums));
// Output: [0,1,9,16,100]

```

#
* **Question 7**

💡 You are given an m x n matrix M initialized with all 0's and an array of operations ops, where ops[i] = [ai, bi] means M[x][y] should be incremented by one for all 0 <= x < ai and 0 <= y < bi.

Count and return *the number of maximum integers in the matrix after performing all the operations*
* Expample: 
**Input:** m = 3, n = 3, ops = [[2,2],[3,3]]

**Output:** 4

* **Answers**

```
function maxCoutn(m,n,ops){
  if (!ops.length) return m*n;
    
  let currentX = ops[0][0];
  let currentY = ops[0][1];

  for (let i=1; i<ops.length; i++) {
      if ((ops[i][0] >= currentX && ops[i][1] < currentY) || (ops[i][1] < currentY && ops[i][0] >= currentX)) {
          currentY = ops[i][1];
      }
      
      if ((ops[i][0] < currentX && ops[i][1] >= currentY) || (ops[i][1] >= currentY && ops[i][0] < currentX)) {
          currentX = ops[i][0];
      }
      
      if (ops[i][1] < currentY && ops[i][0] < currentX) {
          currentY = ops[i][1];
          currentX = ops[i][0];
      }
  }
  return currentX * currentY;
};

let m = 3;
let n = 3;
let ops = [[2,2],[3,3]];
console.log(maxCoutn(m,n,ops));

// Output: 4
```

#
* **Question 8**

Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

*Return the array in the form* [x1,y1,x2,y2,...,xn,yn].

**Example 1:**

**Input:** nums = [2,5,1,3,4,7], n = 3

**Output:** [2,3,5,4,1,7]

* **Answers**

```
function shuffle(nums, n){
  let newNums=[]
  for(let i=0; i<n; i++){
    newNums.push(nums[i]);
    newNums.push(nums[i+n])
  }
  return newNums
};

let nums = [2,5,1,3,4,7]
let n = 3
console.log(shuffle(nums, n));

//Output: [2,3,5,4,1,7]

```