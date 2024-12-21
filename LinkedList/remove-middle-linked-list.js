// Leetcode
// https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/?envType=study-plan-v2&envId=leetcode-75

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
var deleteMiddle = function (head) {
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
