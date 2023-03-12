

  class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
  }


function hasCycle(head: ListNode | null): boolean {
  let fast = head;
  while (fast && fast.next) {
    head = head!.next;
    fast = fast.next.next;
    if (head === fast) return true;
  }
  return false;
};