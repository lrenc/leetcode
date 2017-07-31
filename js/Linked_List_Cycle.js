/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    while (head !== null) {
        if (head.visited === true) {
            return true;
        }
        head.visited = true;
        head = head.next;
    }
    return false;
};
