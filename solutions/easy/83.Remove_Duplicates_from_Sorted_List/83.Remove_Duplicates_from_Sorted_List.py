# Definition for singly-linked list.
from typing import Optional


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
        currentList = head
        while currentList and currentList.next:
            if currentList.val == currentList.next.val:
                currentList.next = currentList.next.next
            else:
                currentList = currentList.next
        return head
