/**
 * 思路：
 * 调整list1与list2，使list1指向val较小的节点，list2指向val较大的节点，并使结果指针指向list1
 * 遍历list1与list2，当list1.next的val大于list的val时，调整指针并始终保持list1为主链
 * 如果list2未遍历结束，则将list2拼接到list1之后
 * 返回结果指针
 */

interface ListNode {
  val: number,
  next: ListNode | null
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  if (!list1) {
    return list2;
  }
  if (!list2) {
    return list1;
  }
  let res: ListNode;
  if (list1.val <= list2.val) {
    res = list1;
  } else {
    res = list2;
    list2 = list1;
    list1 = res;
  }
  while (list1.next && list2) {
    if (list1.next.val <= list2.val) {
      list1 = list1.next;
    } else {
      const temp = list1.next;
      list1.next = list2;
      list2 = temp;
      list1 = list1.next;
    }
  }
  if (list2) {
    list1.next = list2;
  }
  return res;
};
