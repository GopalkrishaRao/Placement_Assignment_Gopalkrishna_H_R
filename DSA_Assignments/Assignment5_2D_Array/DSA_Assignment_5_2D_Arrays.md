#
* **Question 1**

Convert 1D Array Into 2D Array

You are given a **0-indexed** 1-dimensional (1D) integer array original, and two integers, m and n. You are tasked with creating a 2-dimensional (2D) array with  m rows and n columns using **all** the elements from original.

The elements from indices 0 to n - 1 (**inclusive**) of original should form the first row of the constructed 2D array, the elements from indices n to 2 * n - 1 (**inclusive**) should form the second row of the constructed 2D array, and so on.

Return *an* m x n *2D array constructed according to the above procedure, or an empty 2D array if it is impossible*.

* **Answers**

```
function arrayConvert(original, m, n){
  if (original.length !== (m*n)) return []
    let result = []
    let arr = []
    for (let i=0; i<original.length; i++){
        arr.push(original[i])
        if (arr.length === n){
            result.push(arr)
            arr = []
        }
    }
    return result
};
let original = [1,2,3,4];
let m = 2;
let n = 2;
console.log(arrayConvert(original, m, n));
// Output: [[1,2],[3,4]]

```

#
* **Question 2**

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
* **Question 3**

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
* **Question 4**
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
* **Question 5**

Given two integer arrays arr1 and arr2, and the integer d, *return the distance value between the two arrays*.

The distance value is defined as the number of elements arr1[i] such that there is not any element arr2[j] where |arr1[i]-arr2[j]| <= d.

* **Answers**

```
function findTheDistanceValue(arr1, arr2, d) {
     return arr1.filter(n1 => arr2.every(n2 => Math.abs(n1 - n2) > d)).length
};


let arr1 = [4,5,8];
let arr2 = [10,9,1,8];
let d = 2;
console.log(findTheDistanceValue(arr1, arr2, d));

//Output: 2
```

#
* **Question 6**

💡 **Question 6**

Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears **once** or **twice**, return *an array of all the integers that appears **twice***.

You must write an algorithm that runs in O(n) time and uses only constant extra space.

**Example 1:**

**Input:** nums = [4,3,2,7,8,2,3,1]

**Output:**

[2,3]

* **Answers**

```
function findDuplicates(nums) {
    nums.sort((a,b)=>a-b)
    let duplicates=[]
    for(i=0; i<nums.length; i++){
        if(nums[i]-nums[i+1]===0){
            duplicates.push(nums[i])
        }
    }
    return duplicates
};

let  nums = [4,3,2,7,8,2,3,1];

console.log(findDuplicates(nums));
// Output: [2,3]

```

#
* **Question 7**

Suppose an array of length n sorted in ascending order is **rotated** between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

- [4,5,6,7,0,1,2] if it was rotated 4 times.
- [0,1,2,4,5,6,7] if it was rotated 7 times.

Notice that **rotating** an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of **unique** elements, return *the minimum element of this array*.

You must write an algorithm that runs in O(log n) time.

* **Answers**

```
function findMin(nums) {
    return Math.min(...nums)  
};

let  nums = [3,4,5,1,2];
console.log(findMin(nums));
//Output: 1

```

#
* **Question 8**

An integer array original is transformed into a **doubled** array changed by appending **twice the value** of every element in original, and then randomly **shuffling** the resulting array.

Given an array changed, return original *if* changed *is a **doubled** array. If* changed *is not a **doubled** array, return an empty array. The elements in* original *may be returned in **any** order*.

**Example 1:**

**Input:** changed = [1,3,4,2,6,8]

**Output:** [1,3,4]

* **Answers**

```
function findOriginalArray(changed) {
    if (changed.length % 2 === 1) return [];
    let numRep = true;
    changed.sort((a,b)=>a-b) 
    let i = 0;
    while (i < changed.length){
        let pos = changed.indexOf(changed[i]*2, i+1); 
        if (pos === -1){
            numRep = false; 
            break;
        } else {
            changed.splice(pos,1); 
            i++;
        } 
    }
    return (numRep ? changed : []);
};

let  changed = [1,3,4,2,6,8];
console.log(findOriginalArray(changed));
//Outpur: [1,3,4]

```