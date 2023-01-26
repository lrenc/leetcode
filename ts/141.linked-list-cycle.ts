/** 
 * 思路：
 * 快慢指针
 */
interface ListNode {
  val: number;
  next: ListNode | null;
}

function hasCycle(head: ListNode | null): boolean {
  if (head === null) {
    return false;
  }
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;
  while (fast !== null) {
    slow = (slow as ListNode).next;
    fast = (fast as ListNode).next;
    if (fast === null) {
      return false;
    }
    fast = fast.next;
    if (fast === slow) {
      return true;
    }
  }
  return false;
};