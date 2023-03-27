
 // Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}


function deleteDuplicates(head: ListNode | null): ListNode | null {
  let curr = head, prev = curr
  let isHead = true;

  while (curr?.next) {
      if (curr.val === curr.next.val) {
          let next:ListNode = curr.next;

          while (curr?.val === next?.val) {
              next = next?.next;
          }

          if (isHead) {
              if (!next) return null;
              
              prev.val = next?.val;
              prev.next = next?.next;
          } else {
              prev.next = next;
              curr = next;
          }
          continue;
      }

      prev = curr;
      curr = curr?.next;
      isHead = false;
  }

  return head;
};