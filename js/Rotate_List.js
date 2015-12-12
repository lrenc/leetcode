/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head) {
        return null;
    }
    var p = head;
    // 记录链表长度
    var n = 1;

    while (p.next) {
        p = p.next;
        n ++;
    }
    // 将链表连成一个环
    p.next = head;
    // 计算有效偏移量
    k = n - (k % n);
    // 这个地方应该是从后往前

    for (var i = 0; i < k; i ++) {
        p = p.next;
    }
    head = p.next;
    // 断开环
    p.next = null;

    return head;
};


function ListNode(val) {
    this.val = val;
    this.next = null;
}

function createLink(arr) {
    var node = null;
    var head = null;
    for (var i = 0; i < arr.length; i ++) {
        if (!node) {
            node = new ListNode(arr[i]);
            head = node;
        } else {
            node.next = new ListNode(arr[i]);
            node = node.next;
        }
    }
    return head;
}

function print(link) {
    var res = [];
    while (link) {
        res.push(link.val);
        link = link.next;
    }
    console.log(res.join(','));
}

var link = createLink([1,2,3]);

print(rotateRight(link, 2000000000));