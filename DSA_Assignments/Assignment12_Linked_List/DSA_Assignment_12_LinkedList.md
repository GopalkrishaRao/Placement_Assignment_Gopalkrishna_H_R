#
* **Question 1**

Given a singly linked list, delete middle of the linked list. For example, if given linked list is 1->2->3->4->5 then linked list should be modified to 1->2->4->5.If there are even nodes, then there would be two middle nodes, we need to delete the second middle element. For example, if given linked list is 1->2->3->4->5->6 then it should be modified to 1->2->3->5->6.If the input linked list is NULL or has 1 node, then it should return NULL

* **Answer**

```
function deleteMiddle(head) {
    if(head.next==null){return null;}
    let first = head; 
    let last = head; 
    let previous;
    while(last && last.next){
        last = last.next.next;
        previous = first;
        first = first.next;
    }
    previous.next = previous.next.next;
    return head;
};

let head = [2,1];
console.log(deleteMiddle(head));
//Output: 2

```

#
* **Question 2**
Given a linked list of N nodes. The task is to check if the linked list has a loop. Linked list can contain self loop.

 * **Answer:**
```
function hasLoop(list){
      let fast = list;
  while (fast && fast.next) {
    list = list.next;
    fast = fast.next.next;
    if (list === fast) return true;
  }
  return false;
}
```
#
* **Question 3**

Given a linked list consisting of L nodes and given a number N. The task is to find the Nth node from the end of the linked list.

 * **Answer:**

```
function findNthFromEnd(head, N) {
    let first = head;
    let second = head;
   
    for (let i = 0; i < N; i++) {
        if (first === null) {
            return null; // N is greater than the number of nodes
        }
        first = first.next;
    }

    while (first !== null) {
        first = first.next;
        second = second.next;
    }
    return second;
}

```

#
* **Question 4**

Given a singly linked list of characters, write a function that returns true if the given list is a palindrome, else false.

* **Answer:**
```
class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function isPalindrome(head) {
  
  const characters = [];
  let current = head;
  while (current) {
    characters.push(current.val);
    current = current.next;
  }

  const reversedCharacters = characters.reverse();

 
  current = head;
  for (const char of reversedCharacters) {
    if (current.val !== char) {
      return false;
    }
    current = current.next;
  }

  return true;
}

```
#
* **Question 5**

Given a linked list of **N** nodes such that it may contain a loop.

A loop here means that the last node of the link list is connected to the node at position X(1-based index). If the link list does not have any loop, X=0.

Remove the loop from the linked list, if it is present, i.e. unlink the last node which is forming the loop.

* **Answer:**

```
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function detectAndRemoveLoop(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      break; // Loop detected
    }
  }

  // If there's no loop, return
  if (!fast || !fast.next) {
    return head;
  }

  let loopPtr = head;
  while (loopPtr !== slow) {
    loopPtr = loopPtr.next;
    slow = slow.next;
  }

  let prev = null;
  while (loopPtr.next !== slow) {
    loopPtr = loopPtr.next;
  }
  loopPtr.next = null;

  return head;
}

```

#
* **Question 6**

Given a linked list and two integers M and N. Traverse the linked list such that you retain M nodes then delete next N nodes, continue the same till end of the linked list.

* **Answer:**

```

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Solution {
  skipMdeleteN(head, M, N) {
    if (!head || M === 0) {
      return null;
    }
    if (!head.next) {
      return head;
    }
    if (N === 0) {
      return head;
    }
    let curr = head;
    let temp = head;
    
    while (curr) {
      for (let i = 0; i < M - 1; i++) {
        if (curr) {
          curr = curr.next;
        }
      }
      if (!curr) {
        return head;
      }
      temp = curr;
      for (let j = 0; j < N; j++) {
        if (temp) {
          temp = temp.next;
        }
      }
      if (temp) {
        curr.next = temp.next;
      } else {
        curr.next = null;
      }
      curr = curr.next;
    }
    return head;
  }
}

```
#
* **Question 7**

💡 **Question 7**

Given two linked lists, insert nodes of second list into first list at alternate positions of first list.
For example, if first list is 5->7->17->13->11 and second is 12->10->2->4->6, the first list should become 5->12->7->10->17->2->13->4->11->6 and second list should become empty. The nodes of second list should only be inserted when there are positions available. For example, if the first list is 1->2->3 and second list is 4->5->6->7->8, then first list should become 1->4->2->5->3->6 and second list to 7->8.

Use of extra space is not allowed (Not allowed to create additional nodes), i.e., insertion must be done in-place. Expected time complexity is O(n) where n is number of nodes in first list.



* **Answer:**

```
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function insertAlternatePositions(first, second) {
  if (!second) {
    return first;
  }

  let firstPtr = first;
  let secondPtr = second;

  while (firstPtr && secondPtr) {
    let nextFirst = firstPtr.next;
    let nextSecond = secondPtr.next;

    secondPtr.next = nextFirst;
    firstPtr.next = secondPtr;

    firstPtr = nextFirst;
    secondPtr = nextSecond;
  }

  if (secondPtr) {
    firstPtr.next = secondPtr;
  }

  second = null;

  return first;
}

```

#
* **Question 8**

Given a singly linked list, find if the linked list is [circular](https://www.geeksforgeeks.org/circular-linked-list/amp/) or not.

> A linked list is called circular if it is not NULL-terminated and all nodes are connected in the form of a cycle. Below is an example of a circular linked list.
>
* **Answer:**

```
function isCircular(head){
    let temp = head;
    while(temp) {
        if(temp.next == head) {
            return true;
        }
        temp = temp.next;
    }
    return false;
  }
```