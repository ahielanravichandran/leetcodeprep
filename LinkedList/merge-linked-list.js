// Leetcode:
// https://leetcode.com/problems/odd-even-linked-list/description/
export const mergeOddEvenList = (head) => {
  let oddTail = head;
  let evenHead = head.next;
  let evenTail = evenHead;

  while (evenTail !== null && evenTail.next !== null) {
    oddTail.next = evenTail.next;
    oddTail = oddTail.next;

    evenTail.next = oddTail.next;
    evenTail = evenTail.next;
  }
  oddTail.next = evenHead
  return head;
};

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

console.log(printLinkedList(mergeOddEvenList(head2)))
