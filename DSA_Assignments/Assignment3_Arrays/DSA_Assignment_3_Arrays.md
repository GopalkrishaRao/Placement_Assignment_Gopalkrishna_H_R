#
* **Question 1**
Given an integer array nums of length n and an integer target, find three integers
in nums such that the sum is closest to the target.
Return the sum of the three integers.

You may assume that each input would have exactly one solution.

Example 1:
Input: nums = [-1,2,1,-4], target = 1
Output: 2

Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

* **Answers**

```
function closestTarget(nums,target){
    nums.sort((a,b) => a-b)
    let diff = Infinity;

    for(let i = 0; i < nums.length; i++) {
        let j = i + 1;
        let k = nums.length - 1
        while(j < k) {
            let sum = nums[i]+nums[j]+nums[k]
            if(Math.abs(diff) > Math.abs(target-sum)) {
                diff = target - sum
            }
            if(sum < target) {
                j++
            } else {
                k--
            }
        }
    }
    return target - diff
};
let nums = [-1,2,1,-4];
let target = 1
console.log(closestTarget(nums,target));
//Output:2

```

#
* **Question 2**
Given an array nums of n integers, return an array of all the unique quadruplets
[nums[a], nums[b], nums[c], nums[d] such that:
           ● 0 <= a, b, c, d < n
           ● a, b, c, and d are distinct.
           ● nums[a] + nums[b] + nums[c] + nums[d] == target

You may return the answer in any order.

Example 1:
Input: nums = [1,0,-1,0,-2,2], target = 0
Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]

* **Answers**

```
function unique(nums,target){
    let resultArray=[];
    nums.sort((a, b)=>a - b);
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            let k=j+1;
            let l=nums.length-1;
            while(k<l){
                let value = nums[i]+nums[j]+nums[k]+nums[l];
                if(value === target){
                    resultArray.push([nums[i],nums[j],nums[k],nums[l]]);
                    while(k<l && nums[k] === nums[k+1]) k++;
                    while(k<l && nums[l] === nums[l-1]) l--;
                    k++;
                    l--;
                }else if(value > target){
                    l--;
                }else if(value<target){
                    k++;
                }
            }
            while(nums[j] === nums[j+1]) j++;
        }
        while(nums[i] === nums[i+1]) i++;
    };
    return resultArray;
};

let nums =  [1,0,-1,0,-2,2];
let target = 0;
console.log(unique(nums,target));
//Output: [ [ -2, -1, 1, 2 ], [ -2, 0, 0, 2 ], [ -1, 0, 0, 1 ] ]

```

#
* **Question 3**

💡 A permutation of an array of integers is an arrangement of its members into a
sequence or linear order.

For example, for arr = [1,2,3], the following are all the permutations of arr:
[1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1].

The next permutation of an array of integers is the next lexicographically greater
permutation of its integer. More formally, if all the permutations of the array are
sorted in one container according to their lexicographical order, then the next
permutation of that array is the permutation that follows it in the sorted container.

If such an arrangement is not possible, the array must be rearranged as the
lowest possible order (i.e., sorted in ascending order).

● For example, the next permutation of arr = [1,2,3] is [1,3,2].
● Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
● While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not
have a lexicographical larger rearrangement.

Given an array of integers nums, find the next permutation of nums.
The replacement must be in place and use only constant extra memory.

**Example 1:**
Input: nums = [1,2,3]
Output: [1,3,2]


* **Answers**

```
function next(nums){
    for (let i=nums.length-2; i>= 0; i--) {
        let curIndSwap = i;
        for (let j = i + 1; j < nums.length; j++) {
            if ((nums[j] > nums[i] && nums[j] < nums[curIndSwap]) || (nums[j] > nums[curIndSwap] && curIndSwap === i)) {
                curIndSwap = j;
            }
        }
        if (i !== curIndSwap) {
            [nums[i], nums[curIndSwap]] = [nums[curIndSwap], nums[i]];
            for (let k = i + 1; k < nums.length; k++) {
                for (let l = k + 1; l < nums.length; l++) {
                    if (nums[l] < nums[k]) {
                        [nums[k], nums[l]] = [nums[l], nums[k]];
                    }
                }
            }
            return nums;
        }
    }
    return (nums.sort((a, b) => a - b));
};
let nums =  [1,2,3];
console.log(next(nums));
//Output: [1,3,2]

```

#
* **Question 4**

Given a sorted array of distinct integers and a target value, return the index if the
target is found. If not, return the index where it would be if it were inserted in
order.

You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [1,3,5,6], target = 5
Output: 2

* **Answers**

```
function searchInsert (nums, target) {
    if (nums.includes(target)) {
      return nums.indexOf(target);
    } else {
      for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= target) {
          return i;
        }
      }
      return nums.length;
    }
  };

let nums = [1,3,5,6];
let target = 5;
console.log(searchInsert (nums, target));
//Output: 2

```

#
* **Question 5**

💡 You are given a large integer represented as an integer array digits, where each
digits[i] is the ith digit of the integer. The digits are ordered from most significant
to least significant in left-to-right order. The large integer does not contain any
leading 0's.

Increment the large integer by one and return the resulting array of digits.

**Example 1:**
Input: digits = [1,2,3]
Output: [1,2,4]

**Explanation:** The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].


* **Answers**

```
function plusOne(digits) {
    const n = digits.length;
  
    for (let i = n - 1; i >= 0; i--) {
      if (digits[i] === 9) {
        digits[i] = 0;
      } else {
        digits[i]++;
        return digits;
      }
    }
    digits.unshift(1);
    return digits;
  };


let  digits = [1,2,3]
console.log(plusOne(digits)); 
// Output: [1,2,4]

```

#
* **Question 6**

Given a non-empty array of integers nums, every element appears twice except
for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only
constant extra space.

Example 1:
Input: nums = [2,2,1]
Output: 1

* **Answers**

```
function singleNumber(nums){
    nums.sort((a, b) => a - b); 
    for (let i=0; i<nums.length; i+=2){ 
      if (nums[i] !== nums[i + 1]) {
        return nums[i];
      }
    }
    return nums[nums.length - 1];
}

let nums =  [2,2,1];
console.log(singleNumber(nums));
//Output: 1

```

#
* **Question 7**

You are given an inclusive range [lower, upper] and a sorted unique integer array
nums, where all elements are within the inclusive range.

A number x is considered missing if x is in the range [lower, upper] and x is not in
nums.

Return the shortest sorted list of ranges that exactly covers all the missing
numbers. That is, no element of nums is included in any of the ranges, and each
missing number is covered by one of the ranges.

Example 1:
Input: nums = [0,1,3,50,75], lower = 0, upper = 99
Output: [[2,2],[4,49],[51,74],[76,99]]

Explanation: The ranges are:
[2,2]
[4,49]
[51,74]
[76,99]

* **Answers**

```
function range(nums, lower, upper){
    let result = [];
    let start = lower;
  
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === start) {
        start++;
      } else if (nums[i] > start) {
        result.push([start, nums[i] - 1]);
        start = nums[i] + 1;
      }
    }
    if (start <= upper) {
      result.push([start, upper]);
    }
    return result;

}

let nums = [0,1,3,50,75];
let lower = 0;
let upper = 99;
console.log(range(nums, lower, upper));
// Output: [ [ 2, 2 ], [ 4, 49 ], [ 51, 74 ], [ 76, 99 ] ]

```

#
* **Question 8**

<aside>
💡 Given an array of meeting time intervals where intervals[i] = [starti, endi],
determine if a person could attend all meetings.

**Example 1:**
Input: intervals = [[0,30],[5,10],[15,20]]
Output: false

* **Answers**

```
function meetings(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    for (let i=1; i<intervals.length; i++){
      if (intervals[i][0] < intervals[i - 1][1]) {
        return false;
      }
    }
    return true;
  }
  
  let intervals = [[0, 30], [5, 10], [15, 20]];
  console.log(meetings(intervals));
  // Output: false

```