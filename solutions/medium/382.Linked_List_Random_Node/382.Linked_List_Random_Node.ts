
  // Definition for singly-linked list.
  class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
  }


class Solution {
  nodeSeen:number[] = []

  constructor(head: ListNode | null) {
      while(head != null) {
          this.nodeSeen.push(head.val)
          head = head.next
      }
  }

  getRandom(): number {
      const index = Math.floor(Math.random() * this.nodeSeen.length)
    return this.nodeSeen[index]
  }
}

/**
* Your Solution object will be instantiated and called as such:
* var obj = new Solution(head)
* var param_1 = obj.getRandom()
*/