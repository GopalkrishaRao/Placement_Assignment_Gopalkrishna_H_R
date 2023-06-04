#
* **Question 1**

A permutation perm of n + 1 integers of all the integers in the range [0, n] can be represented as a string s of length n where:

- s[i] == 'I' if perm[i] < perm[i + 1], and
- s[i] == 'D' if perm[i] > perm[i + 1].

Given a string s, reconstruct the permutation perm and return it. If there are multiple valid permutations perm, return **any of them**.

* **Answers**

```
function diStringMatch(s) {
    let count1 = -1;
  let count2 = s.length+1;
  const resArr = [];
  for (let i=0; i<=s.length; i++) {
    if (s[i] === "I") {
      count1 = count1+1;
      resArr.push(count1);
    } else {
      count2 = count2-1;
      resArr.push(count2);
    }
  }
  return resArr;
};
let s = "IDID";
console.log(diStringMatch(s));
//Output:[0,4,1,3,2]

```

#
* **Question 2**
You are given an m x n integer matrix matrix with the following two properties:

- Each row is sorted in non-decreasing order.
- The first integer of each row is greater than the last integer of the previous row.

Given an integer target, return true *if* target *is in* matrix *or* false *otherwise*.

You must write a solution in O(log(m * n)) time complexity.

* **Answers**

```
function  searchMatrix(matrix, target) {
    for (let i=0; i<matrix.length; i++){
        for(let j=0; j<matrix[i].length; j++){
            if( matrix[i][j]===target){
                return true
            }
        }
    }
        return false
};

let matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]];
let target = 3;

console.log(searchMatrix(matrix, target));
// Output: true

```

#
* **Question 3**

Given an array of integers arr, return *true if and only if it is a valid mountain array*.

Recall that arr is a mountain array if and only if:

- arr.length >= 3
- There exists some i with 0 < i < arr.length - 1 such that:
    - arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
    - arr[i] > arr[i + 1] > ... > arr[arr.length - 1]


* **Answers**

```
function isMountainArray(arr){
    for(let i=0; i<arr.length; i++){
        if (arr.length < 3) return false;

    let isGoingUp;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i+1] && arr[i+1] > arr[i] && (isGoingUp || isGoingUp === undefined)) {
            isGoingUp = true;
        } else if (arr[i+1] && arr[i+1] < arr[i] && isGoingUp) {
            isGoingUp = false;
        } else if (arr[i+1] && arr[i+1] < arr[i] && isGoingUp === false) {
            isGoingUp = false;
        } else if (arr[i+1]) {
            return false;
        }
    }
    return isGoingUp === false;
}

}
let arr = [2,1];
console.log(isMountainArray(arr));
//Output: true

```

#
* **Question 4**

Given a binary array nums, return the maximum length of a contiguous subarray with an equal number of 0 and 1.

* **Answers**

```

function findMaxLength(nums) {
    let res = 0;
    let sum = 0;
    let map = new Map();
    map.set(0, -1);

    for(let i=0 ; i<nums.length ; i++){
        if(nums[i] === 0){
            sum -= 1;
        }else{
            sum += 1;
        }
        if(map.has(sum)){
            let len = i - map.get(sum);
            res = Math.max(res, len);
        }else{
            map.set(sum , i);
        }
    }
    return res;
};
let nums=[0,1];
console.log(findMaxLength(nums));
//Output: 2

```

#
* **Question 5**

The **product sum** of two equal-length arrays a and b is equal to the sum of a[i] * b[i] for all 0 <= i < a.length (**0-indexed**).

- For example, if a = [1,2,3,4] and b = [5,2,3,1], the **product sum** would be 1*5 + 2*2 + 3*3 + 4*1 = 22.

Given two arrays nums1 and nums2 of length n, return *the **minimum product sum** if you are allowed to **rearrange** the **order** of the elements in* nums1.

**Example 1:**

**Input:** nums1 = [5,3,4,2], nums2 = [4,2,2,5]

**Output:** 40

* **Answers**

```
function minProductSum(nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  let result = 0;
  const n = nums1.length;
  for (let i = 0; i < n; i++) {
    result += nums1[i] * nums2[n - 1 - i];
  }
  return result;
}
let nums1 = [5, 3, 4, 2];
let nums2 = [4, 2, 2, 5];
console.log(minProductSum(nums1, nums2));
// Output:40

```

#
* **Question 6**

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

#
* **Question 7**

Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

* **Answers**

```
function generateMatrix(n) {
    let count =1;
    let left =0;
    let right =n-1;
    let bottom = n-1;
    let top = 0;
    let dir = 0;
    let save = Array.from(Array(n),()=>new Array(n).fill(0))

    while(count <= n*n){
        if(dir == 0){
            for(let i =left; i<=right; i++){
                save[top][i] = count;
                count++
            }
            top++
            dir++
        }
        if(dir == 1){
            for(let i =top; i<=bottom; i++){
                save[i][right] = count;
                count++
            }
            right--
            dir++        
        }
        if(dir == 2){
            for(let i =right; i>=left; i--){
                save[bottom][i] = count;
                count++
            }
            bottom--
            dir++        
        }
        if(dir == 3){
            for(let i =bottom; i>=top; i--){
                save[i][left] = count;
                count++
            }
            left++
            dir++        
        }
        dir = 0;
    }
    return save;
};
let n=3;
console.log(generateMatrix(n));
//Output: [[1,2,3],[8,9,4],[7,6,5]]



```

#
* **Question 8**

Given two sparse matrices mat1 of size m x k and mat2 of size k x n, return the result of mat1 x mat2. You may assume that multiplication is always possible.

* **Answers**

```
function multiplyMatrices(mat1, mat2) {
  const m = mat1.length;
  const k = mat1[0].length;
  const n = mat2[0].length;
  
  const result = Array.from({ length: m }, () => Array(n).fill(0));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let sum = 0;
      for (let l = 0; l < k; l++) {
        if (mat1[i][l] !== 0 && mat2[l][j] !== 0) {
          sum += mat1[i][l] * mat2[l][j];
        }
      }
      result[i][j] = sum;
    }
  }

  return result;
}


```