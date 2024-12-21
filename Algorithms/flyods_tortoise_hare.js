/* 
- use to detect cycle
- use to find the start of the cycle
- use to find the length of the cycle
- use to find the middle element in the list
*/

// Leetcode:
// https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/
// https://leetcode.com/problems/linked-list-cycle-ii/description/
// https://leetcode.com/problems/linked-list-cycle/description/

import { Node } from "../LinkedList/singly-linked-list.js";

export const detectCycle = (head) => {
  if (!head || !head.next) return "Cycle not detected";

  let slowPointer = head;
  let fastPointer = head.next;

  while (slowPointer !== fastPointer) {
    if (!fastPointer || !fastPointer.next) return "Cycle not detected";
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }
  return "Cycle detected";
};

export const detectCycleUsingHash = (head) => {
  if (!head) return false;

  const visitedNodes = new Set();
  let current = head;

  while (current !== null) {
    // If the current node is already in the set, it means a cycle is present
    if (visitedNodes.has(current)) {
      return true;
    }

    // Add the current node to the set
    visitedNodes.add(current);

    // Move to the next node
    current = current.next;
  }
  return false;
};

export const startOfCycle = (head) => {
  if (!head || !head.next) return -1;

  let tortoise = head;
  let hare = head;

  while (hare !== null && hare.next !== null) {
    tortoise = tortoise.next;
    hare = hare.next.next;
    if (tortoise === hare) {
      let start = head;
      let index = 0;
      while (start !== tortoise) {
        start = start.next;
        tortoise = tortoise.next;
        index++;
      }
      return index;
    }
  }
  return -1;
};

export const findMiddleNode = (head) => {
  if (!head || !head.next) return null;
  let tortoise = head;
  let hare = head;
  let prevTortoise = null;
  while (hare !== null && hare.next !== null) {
    prevTortoise = tortoise;
    tortoise = tortoise.next;
    hare = hare.next.next;
  }
  prevTortoise.next = tortoise.next;
  return head;
};

export const printLinkedList = (head) => {
  if (!head) return [];
  const list = [];
  while (head !== null) {
    list.push(head.data);
    head = head.next;
  }
  return list
};


const head = new Node(3);
const secondNode = new Node(2);
const thirdNode = new Node(0);
const fourthNode = new Node(-4);

head.next = secondNode;
secondNode.next = thirdNode;
thirdNode.next = fourthNode;
fourthNode.next = secondNode;


const head1 = new Node(1);
const second = new Node(2);
const thrid = new Node(3);
const fourth = new Node(4);
const fifth = new Node(5);

head1.next = second;
second.next = thrid;
thrid.next = fourth;
fourth.next = fifth;
fifth.next = null;

console.log(detectCycle(head));
console.log(startOfCycle(head));
console.log(printLinkedList(findMiddleNode(head1)));

