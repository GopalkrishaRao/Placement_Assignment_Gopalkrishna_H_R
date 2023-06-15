#
* **Question 1**

Given two linked list of the same size, the task is to create a new linked list using those linked lists. The condition is that the greater node among both linked list will be added to the new linked list.

 * **Answer:**

```
class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}
    
    function insert( root , item) {
        var ptr, temp;
        temp = new Node();
        temp.data = item;
        temp.next = null;
 
        if (root == null)
            root = temp;
        else {
            ptr = root;
            while (ptr.next != null)
                ptr = ptr.next;
 
            ptr.next = temp;
        }
        return root;
    }
 
      function newList( root1,  root2) {
        var ptr1 = root1, ptr2 = root2, ptr;
        var root = null, temp;
 
        while (ptr1 != null) {
            temp = new Node();
            temp.next = null;
 
            if (ptr1.data < ptr2.data)
                temp.data = ptr2.data;
            else
                temp.data = ptr1.data;
 
            if (root == null)
                root = temp;
            else {
                ptr = root;
                while (ptr.next != null)
                    ptr = ptr.next;
 
                ptr.next = temp;
            }
            ptr1 = ptr1.next;
            ptr2 = ptr2.next;
        }
        return root;
    }
 
    function display( root) {
        while (root != null) {
            document.write(root.data + "->");
            root = root.next;
        }
        document.write("<br/>");
    }


```

#
* **Question 2**

Write a function that takes a list sorted in non-decreasing order and deletes any duplicate nodes from the list. The list should only be traversed once.

For example if the linked list is 11->11->11->21->43->43->60 then removeDuplicates() should convert the list to 11->21->43->60.

 * **Answer:**

```

class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

function removeDuplicates(head) {
  let current = head;
  
  while (current != null && current.next != null) {
    if (current.data === current.next.data) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  
  return head;
}


```
#
* **Question 3**

Given a linked list of size N. The task is to reverse every k nodes (where k is an input to the function) in the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should be considered as a group and must be reversed (See Example 2 for clarification).

 * **Answer:**

```

class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

function reverseKNodes(head, k) {
  let current = head;
  let prev = null;
  let next = null;
  let count = 0;
  
  while (count < k && current != null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
    count++;
  }
  
  if (next != null) {
    head.next = reverseKNodes(next, k);
  }
  
  return prev;
}


```

#
* **Question 4**

Given a linked list, write a function to reverse every alternate k nodes (where k is an input to the function) in an efficient way. Give the complexity of your algorithm.

 * **Answer:**

```
 class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

function reverseAlternateKNodes(head, k) {
  let current = head;
  let prev = null;
  let next = null;
  let count = 0;
  
  while (count < k && current != null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
    count++;
  }

  count = 0;
  while (count < k && current != null) {
    prev = current;
    current = current.next;
    count++;
  }
  
  
  if (current != null) {
    prev.next = reverseAlternateKNodes(current, k);
  }
  
  return prev;
}

```
#
* **Question 5**
Given a linked list and a key to be deleted. Delete last occurrence of key from linked. The list may have duplicates.

 * **Answer:**

```
class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

function deleteLastOccurrence(head, key) {
  let prev = null;
  let current = head;
  let lastOccurrence = null;
  
  while (current != null) {
    if (current.data === key) {
      lastOccurrence = current;
    }
    current = current.next;
  }
  
  if (lastOccurrence != null) {
    current = head;
    while (current.next !== lastOccurrence) {
      current = current.next;
    }
    current.next = lastOccurrence.next;
  }
  
  if (head === lastOccurrence) {
    head = head.next;
  }
  
  return head;
}

```

#
* **Question 6**

Given two sorted linked lists consisting of N and M nodes respectively. The task is to merge both of the lists (in place) and return the head of the merged list.

 * **Answer:**

```
class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

function mergeSortedLists(head1, head2) {
  if (head1 === null) {
    return head2;
  }
  if (head2 === null) {
    return head1;
  }
  
  let dummy = new Node(0);
  let current = dummy;
  
  while (head1 !== null && head2 !== null) {
    if (head1.data <= head2.data) {
      current.next = head1;
      head1 = head1.next;
    } else {
      current.next = head2;
      head2 = head2.next;
    }
    current = current.next;
  }
  
  // Attach remaining nodes from either list
  if (head1 !== null) {
    current.next = head1;
  }
  if (head2 !== null) {
    current.next = head2;
  }
  
  return dummy.next;
}


```
#
* **Question 7**

Given a **Doubly Linked List**, the task is to reverse the given Doubly Linked List.

 * **Answer:**

```

class Node {
  constructor(val) {
    this.data = val;
    this.prev = null;
    this.next = null;
  }
}

function reverseDoublyLinkedList(head) {
  let current = head;
  let prev = null;
  
  while (current !== null) {
    // Swap the prev and next pointers
    let next = current.next;
    current.next = prev;
    current.prev = next;
    

    prev = current;
    current = next;
  }
  head = prev;
  
  return head;
}


```

#
* **Question 8**

Given a doubly linked list and a position. The task is to delete a node from given position in a doubly linked list.

 * **Answer:**

```
class Node {
  constructor(val) {
    this.data = val;
    this.prev = null;
    this.next = null;
  }
}

function deleteNodeAtPosition(head, position) {
  if (head === null) {
    return head;
  }
  
  if (position === 1) {
    head = head.next;
    if (head !== null) {
      head.prev = null;
    }
    return head;
  }
  
  let current = head;
  let count = 1;
  
  while (current !== null && count < position) {
    current = current.next;
    count++;
  }
  
  if (current === null) {
    return head;
  }
  

  current.prev.next = current.next;
  if (current.next !== null) {
    current.next.prev = current.prev;
  }
  
  return head;
}


```