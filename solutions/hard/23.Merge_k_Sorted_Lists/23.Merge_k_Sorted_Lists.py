# Definition for singly-linked list.
from ast import List
from typing import Optional


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        common_array = []
        k = 0
        while k < len(lists):
            while lists[k]:
                common_array.append(lists[k].val)
                lists[k] = lists[k].next
            k += 1
        print(common_array)
        if len(common_array) == 0:
            return None
        sorted_arr = sorted(common_array)

        head = ListNode(sorted_arr[0])
        tail = head
        for el in range(1, len(sorted_arr)):
            node = ListNode(sorted_arr[el])
            if tail is None:
                tail = head
            tail.next = node
            tail = node

        return head
