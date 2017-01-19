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
    // 将后一个覆盖当前，然后删除后一个
    var next = node.next;
    node.val = next.val;
    node.next = next.next;
};
