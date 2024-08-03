// Activity 1: Linked List
// Task 1: Implement a Node class to represent an element in a linked list with properties value and next.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const node1 = new Node(10);
const node2 = new Node(20);

node1.next = node2;

console.log(node1.value);
console.log(node1.next.value);

// Task 2: Implement a LinkedList class with methods to add a node to the end, remove a node from the end, and display all nodes.