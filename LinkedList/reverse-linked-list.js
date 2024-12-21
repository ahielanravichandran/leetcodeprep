// Leetcode:
// https://leetcode.com/problems/reverse-linked-list/description/
export const reverseLinkedList = (head) => {
  if (!head || !head.next) return head;

  // Let us assign head.next as new head
  let newHead = head.next;
  // Let us assign head as tail and tail next as null
  let tail = head;
  tail.next = null;

  while (newHead !== null) {
    // To store the next head temporarily
    const nextHead = newHead.next;
    newHead.next = tail;
    tail = newHead;
    newHead = nextHead;
  }
  return tail;
}

const head2 = new Node(1);
const second2 = new Node(2);
const thrid3 = new Node(3);
const fourth4 = new Node(4);
const fifth5 = new Node(5);
const sixth6 = new Node(6);
const seventh7 = new Node(7);
const eighth8 = new Node(8);

head2.next = second2;
second2.next = thrid3;
thrid3.next = fourth4;
fourth4.next = fifth5;
fifth5.next = sixth6;
sixth6.next = seventh7;
// seventh7.next = null;
seventh7.next = eighth8;
eighth8.next = null;

console.log(printLinkedList(reverseLinkedList(head2)));