/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

// 首先合并两个list
var merge2Lists = function(l1, l2) {
    var head = {
        val: null,
        next: null
    }

    var curr = head;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            curr.next = l1;
            l1 = l1.next;
        } else {
            curr.next = l2;
            l2 = l2.next;
        }
        curr = curr.next;
    }
    if (l1) {
        curr.next = l1;
    } else if (l2) {
        curr.next = l2;
    }
    return head.next;
}

var merge = function(lists, l, r) {
    if (l < r) {
        var m = parseInt((l + r) / 2);

        var l1 = merge(lists, l, m);
        var l2 = merge(lists, m + 1, r);
        // 递归运行到这里，l1, l2 都已经是单一的链表了
        return merge2Lists(l1, l2);
        // return;
    }
    return lists[l];
}

var mergeKLists = function(lists) {
    if (!lists) {
        return null;
    }
    var l = lists.length;
    if (l === 0) {
        return null;
    }
    if (l === 1) {
        return lists[0];
    }
    return merge(lists, 0, l - 1);
    //return lists;
};



