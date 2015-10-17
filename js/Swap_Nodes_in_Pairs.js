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
var swapPairs = function(head) {

    if (!head || head.next === null) {
        return head;
    }
    
    var a = new ListNode(0);
    a.next = head;
    head = head.next;

    while (a.next && a.next.next) {
        var b = a.next;
        var c = b.next;

        b.next = c.next;
        c.next = b;
        a.next = c;
        a = b;
    }
    return head;
};