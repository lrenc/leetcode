/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// 看清楚题意
var deleteDuplicates = function(head) {
    if (!head) {
        return null;
    }
    var res = head;
    var now;
    var prev = head;

    head = head.next;

    while (head) {
        // 利用好分支转换
        if (head.val === prev.val) {
            // 需要被移除的
            head = head.next;
            continue;
        }
        prev.next = head;
        prev = head;
        head = head.next;
    }
    // 最后还需要调整一下
    prev.next = head;
    return res;
};