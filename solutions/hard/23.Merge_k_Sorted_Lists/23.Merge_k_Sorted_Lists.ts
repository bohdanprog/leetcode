
//Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}


function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  const newArr:number[] = []
  let k = 0
  while(k < lists.length) {
    while(lists[k]){
      newArr.push(lists[k].val)
      lists[k] = lists[k].next
    }
    k++
  }
  if(newArr.length === 0) return null
  const sortedArr = newArr.sort((a, b) => a - b)

  let list = new ListNode(sortedArr[0]);
  let tail = list;
  for (let i = 1; i < sortedArr.length; i++) {
    if (tail.next === null) {
        const node = new ListNode(sortedArr[i]);
        tail.next = node;
        tail = node;
    }
  }

  return list
};