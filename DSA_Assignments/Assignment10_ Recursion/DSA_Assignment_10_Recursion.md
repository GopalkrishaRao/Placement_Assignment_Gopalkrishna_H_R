#
* **Question 1**
Given an integer `n`, return *`true` if it is a power of three. Otherwise, return `false`*.

An integer `n` is a power of three, if there exists an integer `x` such that `n == 3x`.
* **Answers**

```
function isPowerOfThree(n) {
  if (n === 1) {
    return true;
  } 
  if (n < 3) {
    return false;
  }
  return isPowerOfThree(n / 3);
}

let n = 9 ;
console.log(isPowerOfThree(n));
//Output: true

```

#
* **Question 2**

You have a list `arr` of all integers in the range `[1, n]` sorted in a strictly increasing order. Apply the following algorithm on `arr`:

- Starting from left to right, remove the first number and every other number afterward until you reach the end of the list.
- Repeat the previous step again, but this time from right to left, remove the rightmost number and every other number from the remaining numbers.
- Keep repeating the steps again, alternating left to right and right to left, until a single number remains.

Given the integer `n`, return *the last number that remains in* `arr`.

* **Answers**

```
function lastRemaining(n) {
  let sum=1;  let num=1;  let bool=true;
  while(n>1){       
      if(bool){sum+=num; bool=false;}
      else{if(n%2){sum+=num;} bool=true;}
      num*=2; n=Math.floor(n/2);
  }
  return sum;
}
let n = 1;
console.log(lastRemaining(n));
//Output:1

```

#
* **Question 3**

Given a set represented as a string, write a recursive code to print all subsets of it. The subsets can be printed in any order.

**Example 1:**

Input :  set = “abc”

Output : { “”, “a”, “b”, “c”, “ab”, “ac”, “bc”, “abc”}
* **Answers**

```
function printSubsets(set, subset = '', index = 0) {
  if (index === set.length) {
    console.log(subset);
    return;
  }

  printSubsets(set, subset, index + 1);

  printSubsets(set, subset + set[index], index + 1);
}

let set = "abc";
printSubsets(set);

```

#
* **Question 4**
Given a string calculate length of the string using recursion.

* **Answers**

```
function calLen(str){
  if(str==='')return 0
  else{
    return 1+calLen(str.slice(1))
  }
}
let str = "GEEKSFORGEEKS";
console.log(calLen(str));
//Output: 13

```

#
* **Question 5**

We are given a string S, we need to find count of all contiguous substrings starting and ending with same character.

* **Answers**

```
function subStr(s) {
  let count = 0;
  const length = s.length;

  for (let i = 0; i < length; i++) {
    for (let j = i; j < length; j++) {
      if (s[i] === s[j]) {
        count++;
      }
    }
  }

  return count;
}

let s = "abcab";
console.log(subStr(s)); 
// Output: 7


```

#
* **Question 6**

The tower of Hanoi is a famous puzzle where we have three rods and N disks. The objective of the puzzle is to move the entire stack to another rod. You are given the number of discs N. Initially, these discs are in the rod 1. You need to print all the steps of discs movement so that all the discs reach the 3rd rod. Also, you need to find the total moves.Note: The discs are arranged such that the top disc is numbered 1 and the bottom-most disc is numbered N. Also, all the discs have different sizes and a bigger disc cannot be put on the top of a smaller disc. Refer the provided link to get a better clarity about the puzzle.

* **Answers**

```
function towerOfHanoi(n) {
  function moveDisks(numDisks, source, destination, auxiliary) {
    if (numDisks === 1) {
      console.log(`Move disk 1 from ${source} to ${destination}`);
      return 1; 
    }

    let movesAtoB = moveDisks(numDisks - 1, source, auxiliary, destination);
    console.log(`Move disk ${numDisks} from ${source} to ${destination}`);
    let movesBtoC = moveDisks(numDisks - 1, auxiliary, destination, source);

    return movesAtoB + 1 + movesBtoC; 
  }

  let totalMoves = moveDisks(n, 'Rod 1', 'Rod 3', 'Rod 2');
  console.log(`Total moves: ${totalMoves}`);
}


let numDisks = 2;
towerOfHanoi(numDisks);

```

#
* **Question 7**
Given a string str, the task is to print all the permutations of str. A permutation is an arrangement of all or part of a set of objects, with regard to the order of the arrangement. For instance, the words ‘bat’ and ‘tab’ represents two distinct permutation (or arrangements) of a similar three letter word.

* **Answers**

```
function swap(str) {
  let strArray = str.split('');
  let permutations = [];

  function permute(left, right) {
    if (left === right) {
      permutations.push(strArray.join(''));
      return;
    }

    for (let i = left; i <= right; i++) {
      [strArray[left], strArray[i]] = [strArray[i], strArray[left]];
      permute(left + 1, right);
      [strArray[left], strArray[i]] = [strArray[i], strArray[left]]; 
    }
  }

  permute(0, str.length - 1);

  return permutations;
}

// Example usage:
let input = "cd";
console.log(swap(input));


```

#
* **Question 8**

Given a string, count total number of consonants in it. A consonant is an English alphabet character that is not vowel (a, e, i, o and u). Examples of constants are b, c, d, f, and g.


* **Answers**

```
function countConsonants(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();

    if (!vowels.includes(char) && /[a-z]/.test(char)) {
      count++;
    }
  }
  return count;
}

let input = " geeksforgeeks portal";
console.log(countConsonants(input));
//Output: 12

```