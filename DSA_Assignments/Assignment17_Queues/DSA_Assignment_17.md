
#
* **Question 1**

Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

* **Answer:**

```

function firstUniqChar(s) {
  let charCounts = {};

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    charCounts[char] = (charCounts[char] || 0) + 1;
  }
  
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (charCounts[char] === 1) {
      return i;
    }
  }

  return -1;
}

```

#
* **Question 2**

Given a **circular integer array** `nums` of length `n`, return *the maximum possible sum of a non-empty **subarray** of* `nums`.

A **circular array** means the end of the array connects to the beginning of the array. Formally, the next element of `nums[i]` is `nums[(i + 1) % n]` and the previous element of `nums[i]` is `nums[(i - 1 + n) % n]`.

A **subarray** may only include each element of the fixed buffer `nums` at most once. Formally, for a subarray `nums[i], nums[i + 1], ..., nums[j]`, there does not exist `i <= k1`, `k2 <= j` with `k1 % n == k2 % n`.

* **Answer:**

```

function kadane(nums) {
  let maxSum = nums[0];
  let currentSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

function maxSubarraySumCircular(nums) {
  const linearMaxSum = kadane(nums);
  let totalSum = 0;

  for (let i = 0; i < nums.length; i++) {
    totalSum += nums[i];
    nums[i] = -nums[i]; // Negate the array elements for finding the minimum sum
  }

  const circularMaxSum = totalSum + kadane(nums);

  return circularMaxSum > linearMaxSum ? circularMaxSum : linearMaxSum;
}

```

#
* **Question 3**

The school cafeteria offers circular and square sandwiches at lunch break, referred to by numbers `0` and `1` respectively. All students stand in a queue. Each student either prefers square or circular sandwiches.

The number of sandwiches in the cafeteria is equal to the number of students. The sandwiches are placed in a **stack**. At each step:

- If the student at the front of the queue **prefers** the sandwich on the top of the stack, they will **take it** and leave the queue.
- Otherwise, they will **leave it** and go to the queue's end.

This continues until none of the queue students want to take the top sandwich and are thus unable to eat.

You are given two integer arrays `students` and `sandwiches` where `sandwiches[i]` is the type of the `ith` sandwich in the stack (`i = 0` is the top of the stack) and `students[j]` is the preference of the `jth` student in the initial queue (`j = 0` is the front of the queue). Return *the number of students that are unable to eat.*

* **Answer:**

```
unction countStudents(students, sandwiches) {
  const queue = [...students];

  let count = 0;
  let index = 0;

  while (queue.length > 0 && count < queue.length) {
    if (queue[0] === sandwiches[index]) {
      queue.shift();
      count = 0;
    } else {
      queue.push(queue.shift());
      count++;
    }

    index++;
  }

  return queue.length;
}


```
#
* **Question 4**

You have a `RecentCounter` class which counts the number of recent requests within a certain time frame.

Implement the `RecentCounter` class:

- `RecentCounter()` Initializes the counter with zero recent requests.
- `int ping(int t)` Adds a new request at time `t`, where `t` represents some time in milliseconds, and returns the number of requests that has happened in the past `3000` milliseconds (including the new request). Specifically, return the number of requests that have happened in the inclusive range `[t - 3000, t]`.

It is **guaranteed** that every call to `ping` uses a strictly larger value of `t` than the previous call.

* **Answer:**

```
class RecentCounter {
  constructor() {
    this.requests = [];
  }

  ping(t) {
    this.requests.push(t);
    while (this.requests[0] < t - 3000) {
      this.requests.shift();
    }
    return this.requests.length;
  }
}

```

#
* **Question 5**


There are `n` friends that are playing a game. The friends are sitting in a circle and are numbered from `1` to `n` in **clockwise order**. More formally, moving clockwise from the `ith` friend brings you to the `(i+1)th` friend for `1 <= i < n`, and moving clockwise from the `nth` friend brings you to the `1st` friend.

The rules of the game are as follows:

1. **Start** at the `1st` friend.
2. Count the next `k` friends in the clockwise direction **including** the friend you started at. The counting wraps around the circle and may count some friends more than once.
3. The last friend you counted leaves the circle and loses the game.
4. If there is still more than one friend in the circle, go back to step `2` **starting** from the friend **immediately clockwise** of the friend who just lost and repeat.
5. Else, the last friend in the circle wins the game.

Given the number of friends, `n`, and an integer `k`, return *the winner of the game*.

* **Answer:**

```

```

#
* **Question 6**

* **Answer:**

```

```

#
* **Question 7**

* **Answer:**

```

```

#
* **Question 8**

* **Answer:**

```

```



