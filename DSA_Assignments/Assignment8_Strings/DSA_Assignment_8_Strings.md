#
* **Question 1**
Given two strings s1 and s2, return *the lowest **ASCII** sum of deleted characters to make two strings equal*.

**Example 1:**

**Input:** s1 = "sea", s2 = "eat"

**Output:** 231

* **Answers**

```
function minimumDeleteSum(s1, s2) {
    const sumASCII = (target) => {
		return target.reduce((sum, str) => sum + str.charCodeAt(0), 0);
	};
	const S1_LENGTH = s1.length;
	const S2_LENGTH = s2.length;
	const sumS1 = sumASCII([...s1]);
	const sumS2 = sumASCII([...s2]);
	const dp = Array(S1_LENGTH).fill('').map(_ => Array(S2_LENGTH).fill(0));

	for (let m = 0; m < S1_LENGTH; m++) {
		for (let n = 0; n < S2_LENGTH; n++) {
			dp[m][n] = s1[m] === s2[n]
				? (dp[m - 1]?.[n - 1] ?? 0) + s1[m].charCodeAt(0)
				: Math.max(dp[m - 1]?.[n] ?? 0, dp[m][n - 1] ?? 0);
		}
	}
	return sumS1 + sumS2 - 2 * dp[S1_LENGTH - 1][S2_LENGTH - 1];
    
};
let s1 = "sea";
let s2 = "eat";
consloe.log(minimumDeleteSum(s1, s2));
//Output: 231
```

#
* **Question 2**

Given a string s containing only three types of characters: '(', ')' and '*', return true *if* s *is **valid***.

The following rules define a **valid** string:

- Any left parenthesis '(' must have a corresponding right parenthesis ')'.
- Any right parenthesis ')' must have a corresponding left parenthesis '('.
- Left parenthesis '(' must go before the corresponding right parenthesis ')'.
- '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string "".

**Example 1:**

**Input:** s = "()"

**Output:**

true

* **Answers**

```
function checkValidString(s) {
    let left_min = 0;
    let left_max = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(') {
            left_min++;
            left_max++;
        }
        if (s[i] == ')') {
            left_min--;
            left_max--;

        }
        if (s[i] == '*') {
            left_min--;
            left_max++;
        }
        if (left_min < 0) {
            left_min = 0
        }
        if (left_max < 0) {
            return false;
        }
    }
    if (left_min == 0 || left_max == 0) {
        return true;
    }
    else {
        return false;
    }
};

let s = "()";
console.log(checkValidString(s));
//Output: true
```

#
* **Question 3**
Given two strings word1 and word2, return *the minimum number of **steps** required to make* word1 *and* word2 *the same*.

In one **step**, you can delete exactly one character in either string.

**Example 1:**

**Input:** word1 = "sea", word2 = "eat"

**Output:** 2

* **Answers**

```
function minDistance(word1, word2) {
    let length1 = word1.length, length2 = word2.length;
    
    let x = new Array(length1).fill(0).map(() => new Array(length2).fill(-1));
    
    let lcs = (i = 0, j = 0) => {
        if(i == length1 || j == length2) return 0;
        
        if(x[i][j] != -1) return x[i][j];
        
        if(word1[i] == word2[j]) {
            return x[i][j] = lcs(i + 1, j + 1) + 1;
        }
        
        return x[i][j] = Math.max(lcs(i + 1, j), lcs(i, j + 1));
    }
    
    return (length1 + length2 - 2 * lcs());
};

let word1 = "sea";
let word2 = "eat";
console.log(minDistance(word1, word2));
//Output:2
```

#
* **Question 4**

You need to construct a binary tree from a string consisting of parenthesis and integers.

The whole input represents a binary tree. It contains an integer followed by zero, one or two pairs of parenthesis. The integer represents the root's value and a pair of parenthesis contains a child binary tree with the same structure.
You always start to construct the **left** child node of the parent first if it exists.

* **Answers**

```
function binaryTreeArray(s) {
    if (!s.length) {
        return [];
      }
      let rootVal = parseInt(s[0]);
      let stack = [rootVal];
      let i = 1;
      while (i < s.length) {
        if (s[i] === '(') {
          let j = i + 1;
          let count = 1; 
          while (count > 0) {
            if (s[j] === '(') {
              count++;
            } else if (s[j] === ')') {
              count--;
            }
            j++;
          }
          let leftSubtree = binaryTreeArray(s.slice(i + 1, j - 1));
          stack.push(...leftSubtree);
          i = j;
        } else if (s[i] === ')') {
          i++;
        } else {
          let j = i;
          while (j < s.length && s[j] !== '(' && s[j] !== ')') {
            j++;
          }
          let val = parseInt(s.slice(i, j));
          stack.push(val);
          i = j;
        }
      }
      return stack;
  }
  
let s = "4(2(3)(1))(6(5))";
console.log(binaryTreeArray(s));

//Output: [4,2,6,3,1,5]
```

#
* **Question 5**
Given an array of characters chars, compress it using the following algorithm:

Begin with an empty string s. For each group of **consecutive repeating characters** in chars:

- If the group's length is 1, append the character to s.
- Otherwise, append the character followed by the group's length.

The compressed string s **should not be returned separately**, but instead, be stored **in the input character array chars**. Note that group lengths that are 10 or longer will be split into multiple characters in chars.

After you are done **modifying the input array,** return *the new length of the array*.

You must write an algorithm that uses only constant extra space.

**Example 1:**

**Input:** chars = ["a","a","b","b","c","c","c"]

**Output:** Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]

* **Answers**

```
 function compress (chars) {
     let i = 0;
    let j = 0;
    while (j < chars.length) {
        let count = 0;
        let curr = chars[j];
        while (j < chars.length && chars[j] === curr) {
            j++;
            count++;
        }
        chars[i++] = curr;
        if (count > 1) {
            for (let digit of count.toString()) {
                chars[i++] = digit;
            }
        }
    }
    return i;
};

chars = ["a","a","b","b","c","c","c"]
//Output: 6
```

#
* **Question 6**

Given two strings s and p, return *an array of all the start indices of* p*'s anagrams in* s. You may return the answer in **any order**.

An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

**Example 1:**

**Input:** s = "cbaebabacd", p = "abc"

**Output:** [0,6]

* **Answers**

```
function findAnagrams(s, p) {
    let result = [];
    let targetMap = new Map();
    let windowMap = new Map();
    for (let char of p) {
      targetMap.set(char, (targetMap.get(char) || 0) + 1);
    }
    let left = 0;
    let right = 0;
    while (right < s.length) {
      let char = s[right];
      windowMap.set(char, (windowMap.get(char) || 0) + 1);
      if (right - left + 1 > p.length) {
        let leftChar = s[left];
        if (windowMap.get(leftChar) === 1) {
          windowMap.delete(leftChar);
        } else {
          windowMap.set(leftChar, windowMap.get(leftChar) - 1);
        }
        left++;
      }
      if (mapsAreEqual(targetMap, windowMap)) {
        result.push(left);
      }
      right++;
    }
    return result;
  }
  
  function mapsAreEqual(map1, map2) {
    if (map1.size !== map2.size) {
      return false;
    }
    for (let [key, value] of map1) {
      if (value !== map2.get(key)) {
        return false;
      }
    }
    return true;
  }
let s = "cbaebabacd";
let p = "abc";

console.log(findAnagrams(s, p));


//Output:[0,6]
```

#
* **Question 7**

Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

The test cases are generated so that the length of the output will never exceed 105.

**Example 1:**

**Input:** s = "3[a]2[bc]"

**Output:** "aaabcbc"

* **Answers**

```
function decodeString (s) {
     const stack = [];
  for (const char of s) {
    if (char !== "]") { stack.push(char); continue; }
    let cur = stack.pop();
    let str = '';
    while (cur !== '[') {
      str = cur + str;
      cur = stack.pop();
    }
    let num = '';
    cur = stack.pop();
    while (!Number.isNaN(Number(cur))) {
      num = cur + num;
      cur = stack.pop();
    }
    stack.push(cur);
    stack.push(str.repeat(Number(num)));
  }
  return stack.join('');
};
let s = "3[a]2[bc]";
console.log(decodeString (s));
//Output:"aaabcbc"

```

#
* **Question 8**

Given two strings s and goal, return true *if you can swap two letters in* s *so the result is equal to* goal*, otherwise, return* false*.*

Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at s[i] and s[j].

- For example, swapping at indices 0 and 2 in "abcd" results in "cbad".

**Example 1:**

**Input:** s = "ab", goal = "ba"

**Output:** true

* **Answers**

```
function buddyStrings (s, goal) {
    if(s.length != goal.length) return false;
    let diff = [];
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] != goal[i]) diff.push(i);
        if(diff.length > 2) return false;
    }
    if(!diff.length) return s.length != [...new Set(s)].length;
    let [i, j] = diff; 
    return s[i] == goal[j] && goal[i] == s[j];
};
let  s = "ab";
let goal = "ba";
console.log(buddyStrings (s, goal));
//Output: true
```