/**
 * Definition for singly-linked list.
 */
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// 不使用循环，只需要调用递归函数，通过对链表遍历，并保持l1为最长链表，然后考虑交换和进位即可
function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  // return when lists both equal to nullable
  if (l1 === null && l2 === null) return l1;
  const tempVal = l1.val + (l2 && l2.val) || 0;
  l1.val = tempVal % 10;
  // consider carry
  if (tempVal >= 10) {
    if (!l1.next) {
      l1.next = new ListNode(1);
    } else {
      l1.next.val = l1.next.val + 1;
    }
  }
  if (l1.next === null && l2 && l2.next !== null) {
    // swap list, keep l1 is longest list
    l1.next = l2.next;
    l2 = null;
  }
  // keep going
  addTwoNumbers(l1.next, l2 && l2.next ? l2.next : null);
  return l1;
}
