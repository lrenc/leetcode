/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (!head) {
        return null;
    }
    if (!head.next) {ato
        return head;
    }
    var temp = null;
    var next;
    while (head) {
        next = head.next;
        head.next = temp;
        if (next === null) {
            return head;
        }
        temp = next.next;
        next.next = head;
        head = temp;
        temp = next;
    }
    return next;
};

var head = new ListNode(1);
var next = new ListNode(2);
head.next = next;
next.next = new ListNode(3);

function result(head) {
    var res = [];
    while (head) {
        res.push(head.val);
        head = head.next;
    }
    console.log(res);
}

result(reverseList(head));
