// Leetcode
// https://leetcode.com/problems/odd-even-linked-list/?envType=study-plan-v2&envId=top-interview-150

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
  if (!head || !head.next) return head;
  let odd = head;
  let even = head.next;
  let evenHead = even;
  while (even && even.next) {
    odd.next = even.next;
    odd = odd.next;
    even.next = odd.next;
    even = odd.next;
  }
  odd.next = evenHead;
  return head;
};
