/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if (headA === null || headB === null) {
        return null;
    }
    let a = headA;
    let b = headB;
    while (a !== b) {
        if (a.next === null && b.next === null) {
            return null;
        }
        a = a.next === null ? headB : a.next;
        b = b.next === null ? headA : b.next;
    }
    return a;
};
