#
* **Question 1**

Given a non-negative integer `x`, return *the square root of* `x` *rounded down to the nearest integer*. The returned integer should be **non-negative** as well.

You **must not use** any built-in exponent function or operator.

 * **Answer:**

```
function sqrt(x) {
  if (x === 0) {
    return 0;
  }

  let guess = x;
  let nextGuess = (guess + x / guess) / 2;

  while (nextGuess < guess) {
    guess = nextGuess;
    nextGuess = (guess + x / guess) / 2;
  }

  return Math.floor(guess);
}
let x = 25;
console.log(sqrt(x));  
// Output: 5


```

#
* **Question 2**

A peak element is an element that is strictly greater than its neighbors.

Given a **0-indexed** integer array `nums`, find a peak element, and return its index. If the array contains multiple peaks, return the index to **any of the peaks**.

You may imagine that `nums[-1] = nums[n] = -∞`. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.

You must write an algorithm that runs in `O(log n)` time.

 * **Answer:**

```
function findPeakElement(nums) {
    let start = 0, end = nums.length - 1;
    while (start < end) {
        let mid = Math.floor((start + end) / 2);
        if (mid === 0) {
            return nums[0] >= nums[1] ? 0 : 1;
        }
        if (mid === end) {
            return nums[end - 1] >= nums[end - 2] ? end - 1 : end - 2;
        }

        if (nums[mid] > nums[mid + 1] && nums[mid] > nums[mid - 1]) {
            return mid;
        }
        if (nums[mid] < nums[mid - 1]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return start;
};

```
#
* **Question 3**
Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

 * **Answer:**
```
function missingNumber(nums) {
    nums.sort((a,b)=>a-b)
    if(nums[0]!=0){
        return 0
    }else{
        for (i=0; i<nums.length; i++) {
        if(nums[i+1]-nums[i]!==1){
            return nums[i]+1
        }
    }
    }
};
```

#
* **Question 4**
Given an array of integers `nums` containing `n + 1` integers where each integer is in the range `[1, n]` inclusive.

There is only **one repeated number** in `nums`, return *this repeated number*.

You must solve the problem **without** modifying the array `nums` and uses only constant extra space.

 * **Answer:**
```
function findDuplicate(nums) {
  let a = 0,
   b = 0;
 while (true) {
   a = nums[a];
   b = nums[nums[b]];

   if (a === b) break;
 }
 let newa = 0;
 while (a !== newa) {
   a = nums[a];
   newa = nums[newa];
 }
 return newa;
};

let nums = [1,3,4,2,2];
console.log(findDuplicate(nums));
//Output: 2

```
#
* **Question 5**

Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

 * **Answer:**
```
function intersection(nums1, nums2) {
  let uniqueEle = [];
  for(i=0; i<nums1.length; i++){
      for(j=0; j<nums2.length; j++){
          if(nums1[i]===nums2[j]){
              uniqueEle.push(nums1[i])
          }
      }
  }
  return [...new Set(uniqueEle)]
};



```

#
* **Question 6**

Suppose an array of length `n` sorted in ascending order is **rotated** between `1` and `n` times. For example, the array `nums = [0,1,2,4,5,6,7]` might become:

- `[4,5,6,7,0,1,2]` if it was rotated `4` times.
- `[0,1,2,4,5,6,7]` if it was rotated `7` times.

Notice that **rotating** an array `[a[0], a[1], a[2], ..., a[n-1]]` 1 time results in the array `[a[n-1], a[0], a[1], a[2], ..., a[n-2]]`.

Given the sorted rotated array `nums` of **unique** elements, return *the minimum element of this array*.

You must write an algorithm that runs in `O(log n) time.`

 * **Answer:**
```
function findMin(nums) {
     return Math.min(...nums)
};

```
#
* **Question 7**
Given an array of integers `nums` sorted in non-decreasing order, find the starting and ending position of a given `target` value.

If `target` is not found in the array, return `[-1, -1]`.

You must write an algorithm with `O(log n)` runtime complexity.

 * **Answer:**
```
var searchRange = function(nums, target) {
      let presentinIndex =[]
    for(i=0; i<nums.length; i++){
        if(nums[i]===target){
            presentinIndex.push(i)
        }  
    }
    if(presentinIndex.length===0){
        return [-1,-1]
    }else if(presentinIndex.length===1 && presentinIndex[0]===0){
        presentinIndex.push(0)
        return presentinIndex
    }
    else if(presentinIndex.length===1 && presentinIndex[0]!==0){
        presentinIndex.push(presentinIndex[0])
        return presentinIndex
    }
    else{

        return [presentinIndex[0], presentinIndex[presentinIndex.length-1]]
    }
};
```

#
* **Question 8**
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.s

 * **Answer:**

```
function intersect(nums1, nums2) {
     nums1.sort((a,b) => a-b);
     nums2.sort((a,b) => a-b);
	
    let i = 0;
    let j = 0;
    let result = [];
    
    while(i<nums1.length && j<nums2.length) {
        if(nums1[i] < nums2[j]){
            i++;
        } else if(nums1[i] > nums2[j]) {
            j++;
        } else {
            result.push(nums1[i]);
            i++;
            j++;
        }
    }
    
    return result;
};

```