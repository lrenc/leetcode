
interface ListNode {
  val: number,
  next: ListNode | null
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (head === null) {
    return head;
  }
  let point = head;
  while (point && point.next) {
    if (point.val === point.next.val) {
      point.next = point.next.next;
    } else {
      point = point.next;
    }
  }
  return head;
};