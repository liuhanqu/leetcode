/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const dummyHead = new ListNode(0);

  let p = l1,
    q = l2,
    curr = dummyHead;

  let carry = 0;

  while (p !== null || q !== null || carry) {
    const x = p !== null ? p.val : 0;
    const y = q !== null ? q.val : 0;
    const sum = x + y + carry;

    carry = Math.floor(sum / 10);

    curr.next = new ListNode(sum % 10);
    curr = curr.next;

    if (p !== null) {
      p = p.next;
    }
    if (q !== null) {
      q = q.next;
    }
  }

  return dummyHead.next;
};
