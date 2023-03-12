# Definition for singly-linked list.
from typing import Optional


class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None


class Solution:
    def detectCycle(self, head: Optional[ListNode]) -> Optional[ListNode]:
        nodeSeen = set()
        while head != None:
            if head in nodeSeen:
                return head
            nodeSeen.add(head)
            head = head.next
        return None
