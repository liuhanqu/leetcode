// description: https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/6/linked-list/41/
// 删除链表中的节点

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
  const next = node.next;
  node.val = next.val;
  node.next = next.next;
};
