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
function ListNode(val) {
    this.val = val;
    this.next = null;
}

function create(arr) {
    var res  = new ListNode(arr[0]);
    var head = res;
    for (var i = 1, l = arr.length; i < l; i ++) {
        res.next = new ListNode(arr[i]);
        res = res.next;
    }
    return head;
}

function print(link) {
    var res = [];
    while (link) {
        res.push(link.val);
        link = link.next;
    }
    console.log(res);
}
// 重要的是理清分支结构
var deleteDuplicates = function(head) {
    if (!head) {
        return head;
    }
    var res = head;
    // 用head来迭代
    var prev = head;
    var next = head;

    head = head.next;
    // 确定res的head

    while (head) {
        if (head.val !== prev.val) {
            break;
        }
        while (head && head.val === prev.val) {
            prev = head;
            head = head.next;
            res  = head;
        }
        if (!head) {
            return res;
        }
        prev = head;
        head = head.next;
    }
    next = res;
    // 去除重复的数字
    while (head) {
        // to do...
        if (head.val !== prev.val) {
            // 看看head.next的val是否相等
            if (head.next && head.next.val === head.val) {
                next.next = head.next;
            } else {
                // 不相等或者head就是最后一个元素
                next = head;
            }
        } else {
            next.next = head.next;
        }
        prev = head;
        head = head.next;

    }
    return res;
};

// 1,1,2,2,3,3
var link = create([1,2,2,3,3,4,4]);
// print(link);
print(deleteDuplicates(link));
