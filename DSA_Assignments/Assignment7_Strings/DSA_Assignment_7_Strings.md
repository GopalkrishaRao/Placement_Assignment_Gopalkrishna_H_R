#
* **Question 1**

Given two strings s and t, *determine if they are isomorphic*.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

**Example 1:**

**Input:** s = "egg", t = "add"

**Output:** true

* **Answers**

```
function  isIsomorphic(s,t){
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i], i + 1) !== t.indexOf(t[i], i + 1)) {
        return false;
    }
}
return true;
}

let s = "egg";
let t = "add";
console.log(isIsomorphic(s,t));

//Output: true

```

#
* **Question 2**
Given a string num which represents an integer, return true *if* num *is a **strobogrammatic number***.

A **strobogrammatic number** is a number that looks the same when rotated 180 degrees (looked at upside down).

**Example 1:**

**Input:** num = "69"

**Output:**

true

* **Answers**

```
function isStrobogrammatic(num) {
  const strobogrammaticPairs = {
    '0': '0',
    '1': '1',
    '6': '9',
    '8': '8',
    '9': '6',
  };

  let left = 0;
  let right = num.length - 1;

  while (left <= right) {
    const leftDigit = num[left];
    const rightDigit = num[right];

    if (!(leftDigit in strobogrammaticPairs && strobogrammaticPairs[leftDigit] === rightDigit)) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

let num = "69";
console.log(isStrobogrammatic(num));
//Output: true
```

#
* **Question 3**

Given two non-negative integers, num1 and num2 represented as string, return *the sum of* num1 *and* num2 *as a string*.

You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

**Example 1:**

**Input:** num1 = "11", num2 = "123"

**Output:**

"134"

* **Answers**

```
function addStrings (num1, num2) {
  let result = '';
  let carry = 0;
  let i = num1.length - 1;
  let j = num2.length - 1;

  while (i >= 0 || j >= 0 || carry > 0) {
    const digit1 = i >= 0 ? parseInt(num1[i]) : 0;
    const digit2 = j >= 0 ? parseInt(num2[j]) : 0;
    const sum = digit1 + digit2 + carry;
    result = (sum % 10) + result;
    carry = Math.floor(sum / 10);
    i--;
    j--;
  }

  return result;

};
let num1 = "11";
let num2 = "123";
console.log(addStrings(num1, num2));
//Output: 124;

```

#
* **Question 4**

Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

**Example 1:**

**Input:** s = "Let's take LeetCode contest"

**Output:** "s'teL ekat edoCteeL tsetnoc"

* **Answers**

```
function reverseWords(s){
return s.split(' ').map((word)=>word.split('').reverse().join('')).join(' ')
};
let s = "Let's take LeetCode contest";
console.log(reverseWords(s));
// Output:  s'teL ekat edoCteeL tsetnoc"

```

#
* **Question 5**
Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

**Example 1:**

**Input:** s = "abcdefg", k = 2

**Output:**

"bacdfeg"

* **Answers**

```
function reverseStr(s,k){
  for(let i = 0; i<s.length; i=i+2*k) 
  s = s.slice(0,i) + s.substring(i,i+k).split('').reverse().join('') + s.slice(i+k); 
  return s;
}

let s = "abcdefg";
let k = 2;
console.log(reverseStr(s,k));
// Output: "bacdfeg";

```

#
* **Question 6**

Given two strings s and goal, return true *if and only if* s *can become* goal *after some number of **shifts** on* s.

A **shift** on s consists of moving the leftmost character of s to the rightmost position.

- For example, if s = "abcde", then it will be "bcdea" after one shift.

**Example 1:**

**Input:** s = "abcde", goal = "cdeab"

**Output:**

true

* **Answers**

```
 function rotateString(s, goal) {
    if (s.length !== goal.length) return false;
    return s.concat(s).includes(goal)
};

let s = "abcde";
let goal = "cdeab";

console.log(rotateString(s,goal));
//Output: true

```

#
* **Question 7**

Given two strings s and t, return true *if they are equal when both are typed into empty text editors*. '#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

**Example 1:**

**Input:** s = "ab#c", t = "ad#c"

**Output:** true

**Explanation:**

Both s and t become "ac".

* **Answers**

```


function backspaceCompare(s, t){
    function test(s){
    let res = [];
      for (x of s.split('')) {
        x === '#' ? res.pop() : res.push(x);
    };
    return res.join('')
  }
  return test(s)===test(t)
}

let s = "ab#c";
let t = "ad#c";
console.log(backspaceCompare(s, t));
//Output: true

```

#
* **Question 8**
You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

**Input:** coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]

**Output:** true

* **Answers**

```
function checkStraightLine(coordinates) {
  if(coordinates.length === 2) return true
  if(coordinates === null || coordinates[0].length === 0) return false;
     
  let p = coordinates[0];
  let q = coordinates[1];
  let curr
  
  for(let i = 2; i < coordinates.length; i++) {
      curr = coordinates[i];
      if((curr[0] - p[0]) * (q[1] - p[1]) !== (curr[1] - p[1]) * (q[0] - p[0])) return false;
  }
  return true;
  
};

let coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]

console.log(checkStraightLine(coordinates));
//Output: true
```