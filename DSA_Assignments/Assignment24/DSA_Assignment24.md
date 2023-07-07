#
* **Question 1** <aside>
💡 **Roman to Integer**

Roman numerals are represented by seven different symbols: `I`, `V`, `X`, `L`, `C`, `D` and `M`.


* **Answer:**

```
function romanToInt(s) {
  const romanValues = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
    'IV': 4,
    'IX': 9,
    'XL': 40,
    'XC': 90,
    'CD': 400,
    'CM': 900
  };

  let total = 0;
  let i = 0;
  while (i < s.length) {
    if (i + 1 < s.length && romanValues[s.substring(i, i + 2)]) {
      total += romanValues[s.substring(i, i + 2)];
      i += 2;
    } else {
      total += romanValues[s.charAt(i)];
      i += 1;
    }
  }

  return total;
}

```

*  **Question 2**💡 **Longest Substring Without Repeating Characters**

Given a string `s`, find the length of the **longest substring** without repeating characters.

* **Answer:**

```
function lengthOfLongestSubstring(s) {
  let start = 0;
  let end = 0;
  let maxLen = 0;
  const seen = new Set();

  while (end < s.length) {
    if (!seen.has(s.charAt(end))) {
      seen.add(s.charAt(end));
      end++;
      maxLen = Math.max(maxLen, end - start);
    } else {
      seen.delete(s.charAt(start));
      start++;
    }
  }

  return maxLen;
}


```

#
* **Question 3**

💡 **Majority Element**

Given an array `nums` of size `n`, return *the majority element*.

The majority element is the element that appears more than `⌊n / 2⌋` times. You may assume that the majority element always exists in the array.


* **Answer:**

```
function majorityElement(nums) {
  let majority = null;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      majority = nums[i];
      count = 1;
    } else if (nums[i] === majority) {
      count++;
    } else {
      count--;
    }
  }

  return majority;
}


```
#
* **Question 4**

💡 **Group Anagram**

Given an array of strings `strs`, group **the anagrams** together. You can return the answer in **any order**.

An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

* **Answer:**

```
function groupAnagrams(strs) {
  const anagramMap = new Map();

  for (const str of strs) {
    const sortedStr = str.split('').sort().join('');
    if (!anagramMap.has(sortedStr)) {
      anagramMap.set(sortedStr, []);
    }
    anagramMap.get(sortedStr).push(str);
  }

  return Array.from(anagramMap.values());
}


```

#
* **Question 5**

💡 **Ugly Numbers**

An **ugly number** is a positive integer whose prime factors are limited to `2`, `3`, and `5`.

Given an integer `n`, return *the* `nth` ***ugly number***.


* **Answer:**

```
function nthUglyNumber(n) {
  const ugly = [1];
  let p2 = 0, p3 = 0, p5 = 0;

  for (let i = 1; i < n; i++) {
    const nextUgly = Math.min(ugly[p2] * 2, ugly[p3] * 3, ugly[p5] * 5);
    ugly[i] = nextUgly;

    if (nextUgly === ugly[p2] * 2) p2++;
    if (nextUgly === ugly[p3] * 3) p3++;
    if (nextUgly === ugly[p5] * 5) p5++;
  }

  return ugly[n - 1];
}

```

#
* **Question 6**

💡  **Top K Frequent Words**

Given an array of strings `words` and an integer `k`, return *the* `k` *most frequent strings*.

Return the answer **sorted** by **the frequency** from highest to lowest. Sort the words with the same frequency by their **lexicographical order**.


* **Answer:**

```
function topKFrequent(words, k) {
  const wordCount = new Map();

  for (const word of words) {
    wordCount.set(word, (wordCount.get(word) || 0) + 1);
  }

  
  const sortedWords = Array.from(new Set(words)).sort((a, b) => {
    const countDiff = wordCount.get(b) - wordCount.get(a);
    if (countDiff === 0) {
      return a.localeCompare(b); 
    }
    return countDiff; 
  });

  return sortedWords.slice(0, k);
}


```

#
* **Question 7**

💡 **Sliding Window Maximum**

You are given an array of integers `nums`, there is a sliding window of size `k` which is moving from the very left of the array to the very right. You can only see the `k` numbers in the window. Each time the sliding window moves right by one position.

Return *the max sliding window*.


* **Answer:**

```
function maxSlidingWindow(nums, k) {
  const maxValues = [];
  const window = [];

  for (let i = 0; i < nums.length; i++) {
    while (window.length > 0 && nums[i] >= nums[window[window.length - 1]]) {
      window.pop();
    }
    window.push(i);
    if (window[0] <= i - k) {
      window.shift();
    }
    if (i >= k - 1) {
      maxValues.push(nums[window[0]]);
    }
  }
  return maxValues;
}
```

#
* **Question 8**

💡 **Find K Closest Elements**

Given a **sorted** integer array `arr`, two integers `k` and `x`, return the `k` closest integers to `x` in the array. The result should also be sorted in ascending order.

An integer `a` is closer to `x` than an integer `b` if:

- `|a - x| < |b - x|`, or
- `|a - x| == |b - x|` and `a < b`

* **Answer:**

```
function findClosestElements(arr, k, x) {
  let left = 0;
  let right = arr.length - 1;

  while (right - left >= k) {
    const diffLeft = Math.abs(arr[left] - x);
    const diffRight = Math.abs(arr[right] - x);

    if (diffLeft <= diffRight) {
      right--;
    } else {
      left++;
    }
  }

  return arr.slice(left, right + 1);
}

```



