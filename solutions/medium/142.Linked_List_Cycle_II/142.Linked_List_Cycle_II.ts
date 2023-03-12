
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function detectCycle(head: ListNode | null): ListNode | null {
  let nodeSeen = new Set()
  while (head !== null) {
    if (nodeSeen.has(head)) return head
    nodeSeen.add(head)
    head = head.next
  }
  return null;
};