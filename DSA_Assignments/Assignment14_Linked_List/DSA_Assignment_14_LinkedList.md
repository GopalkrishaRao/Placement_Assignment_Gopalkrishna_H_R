#
* **Question 1**

Given a linked list of **N** nodes such that it may contain a loop.

A loop here means that the last node of the link list is connected to the node at position X(1-based index). If the link list does not have any loop, X=0.

Remove the loop from the linked list, if it is present, i.e. unlink the last node which is forming the loop.

* **Answer**
```
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function detectAndRemoveLoop(head) {
  let slowPtr = head;
  let fastPtr = head;

  while (fastPtr && fastPtr.next) {
    slowPtr = slowPtr.next;
    fastPtr = fastPtr.next.next;
    if (slowPtr === fastPtr) {
      break;
    }
  }

  if (slowPtr !== fastPtr) {
    return head;
  }

  slowPtr = head;
  while (slowPtr.next !== fastPtr.next) {
    slowPtr = slowPtr.next;
    fastPtr = fastPtr.next;
  }

  fastPtr.next = null;

  return head;
}


```


#
* **Question 2**
 A number N is represented in Linked List such that each digit corresponds to a node in linked list. You need to add 1 to it.

 * **Answer**
```
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function reverseLinkedList(head) {
  let prev = null;
  let curr = head;
  let next = null;

  while (curr !== null) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}

function addOne(head) {
  const reversedHead = reverseLinkedList(head);
  let currentNode = reversedHead;
  let carry = 1;


  while (currentNode !== null) {
    const sum = currentNode.val + carry;

    if (sum < 10) {
      currentNode.val = sum;
      carry = 0;
      break;
    }

    currentNode.val = 0;
    carry = 1;
    currentNode = currentNode.next;
  }

  const result = reverseLinkedList(reversedHead);

  if (carry === 1) {
    const newHead = new ListNode(1);
    newHead.next = result;
    return newHead;
  }

  return result;
}

```

#
* **Question 3**

Given a Linked List of size N, where every node represents a sub-linked-list and contains two pointers:(i) a next pointer to the next node,(ii) a bottom pointer to a linked list where this node is head.Each of the sub-linked-list is in sorted order.Flatten the Link List such that all the nodes appear in a single level while maintaining the sorted order. Note: The flattened list will be printed using the bottom pointer instead of next pointer.

* **Answer**
```
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.bottom = null;
  }
}

function mergeSortedLists(list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;

  let result = null;

  if (list1.val <= list2.val) {
    result = list1;
    result.bottom = mergeSortedLists(list1.bottom, list2);
  } else {
    result = list2;
    result.bottom = mergeSortedLists(list1, list2.bottom);
  }

  return result;
}

function flattenLinkedList(head) {
  if (!head || !head.next) {
    return head;
  }

  head.next = flattenLinkedList(head.next);

  head = mergeSortedLists(head, head.next);

  return head;
}

```

#
* **Question 4**

You are given a special linked list with **N** nodes where each node has a next pointer pointing to its next node. You are also given **M** random pointers, where you will be given **M** number of pairs denoting two nodes **a** and **b**  **i.e. a->arb = b** (arb is pointer to random node)**.**

Construct a copy of the given list. The copy should consist of exactly **N** new nodes, where each new node has its value set to the value of its corresponding original node. Both the next and random pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. None of the pointers in the new list should point to nodes in the original list.

For example, if there are two nodes **X** and **Y** in the original list, where **X.arb** **-->** **Y**, then for the corresponding two nodes **x** and **y** in the copied list, **x.arb --> y.**

* **Answer**

```
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.random = null;
  }
}

function copyRandomList(head) {
  if (!head) return null;

  let currentNode = head;

  while (currentNode !== null) {
    const newNode = new ListNode(currentNode.val);
    newNode.next = currentNode.next;
    currentNode.next = newNode;
    currentNode = newNode.next;
  }

  currentNode = head;

  while (currentNode !== null) {
    if (currentNode.random !== null) {
      currentNode.next.random = currentNode.random.next;
    }
    currentNode = currentNode.next.next;
  }

  currentNode = head;
  const newHead = head.next;

  while (currentNode !== null) {
    const temp = currentNode.next;
    currentNode.next = temp.next;
    if (temp.next !== null) {
      temp.next = temp.next.next;
    }
    currentNode = currentNode.next;
  }

  return newHead;
}
```

#
* **Question 5**
Given the `head` of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return *the reordered list*.

The **first** node is considered **odd**, and the **second** node is **even**, and so on.

Note that the relative order inside both the even and odd groups should remain as it was in the input.

You must solve the problem in `O(1)` extra space complexity and `O(n)` time complexity.

* **Answer**

```

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function oddEvenList(head) {
  if (!head || !head.next) {
    return head;
  }

  let oddHead = head;
  let evenHead = head.next;
  let oddCurrent = oddHead;
  let evenCurrent = evenHead;

  while (evenCurrent && evenCurrent.next) {
    oddCurrent.next = evenCurrent.next;
    oddCurrent = oddCurrent.next;
    evenCurrent.next = oddCurrent.next;
    evenCurrent = evenCurrent.next;
  }

  oddCurrent.next = evenHead;

  return oddHead;
}


```

#
* **Question 6**
Given a singly linked list of size N. The task is to left-shift the linked list by k nodes, where k is a given positive integer smaller than or equal to length of the linked list.

* **Answer**
 
```

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function leftShiftLinkedList(head, k) {
  if (!head || !head.next || k === 0) {
    return head;
  }

  let currentNode = head;
  let count = 1;

  while (currentNode.next && count < k) {
    currentNode = currentNode.next;
    count++;
  }

  if (count < k) {
    return head;
  }

  const newHead = currentNode.next;
  currentNode.next = null;

  let lastNode = newHead;
  while (lastNode.next) {
    lastNode = lastNode.next;
  }
  lastNode.next = head;

  return newHead;
}

```
#
* **Question 7**

You are given the `head` of a linked list with `n` nodes.

For each node in the list, find the value of the **next greater node**. That is, for each node, find the value of the first node that is next to it and has a **strictly larger** value than it.

Return an integer array `answer` where `answer[i]` is the value of the next greater node of the `ith` node (**1-indexed**). If the `ith` node does not have a next greater node, set `answer[i] = 0`.

* **Answer**

```
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function nextLargerNodes(head) {
  const listArray = [];
  let currentNode = head;
  while (currentNode) {
    listArray.push(currentNode.val);
    currentNode = currentNode.next;
  }

  const result = new Array(listArray.length).fill(0);
  const stack = [];

  for (let i = listArray.length - 1; i >= 0; i--) {
    while (stack.length && listArray[i] >= listArray[stack[stack.length - 1]]) {
      stack.pop();
    }

    if (stack.length) {
      result[i] = listArray[stack[stack.length - 1]];
    }
    stack.push(i);
  }
  return result;
}

```

#
* **Question 8**

Given the `head` of a linked list, we repeatedly delete consecutive sequences of nodes that sum to `0` until there are no such sequences.

After doing so, return the head of the final linked list.  You may return any such answer.

(Note that in the examples below, all sequences are serializations of `ListNode` objects.)

* **Answer**


```

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function removeZeroSumSublists(head) {
  const dummy = new ListNode(0);
  dummy.next = head;

  let sum = 0;
  const sumMap = new Map();
  let currentNode = dummy;

  while (currentNode) {
    sum += currentNode.val;

    if (sumMap.has(sum)) {
      currentNode.next = sumMap.get(sum).next;
    } else {
      sumMap.set(sum, currentNode);
    }

    currentNode = currentNode.next;
  }

  return dummy.next;
}

```