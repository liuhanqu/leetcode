// description: https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/6/linked-list/42/
// 删除链表的倒数第N个节点

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  const dummy = new ListNode();
  dummy.next = head;

  let len = 0;
  let first = head;
  while (first) {
    len += 1;
    first = first.next;
  }

  len -= n;
  first = dummy;

  while (len > 0) {
    len--;
    first = first.next;
  }
  first.next = first.next.next;
  return dummy.next;
};
