function ListNode(val) {
  this.val = val;
  this.next = null;
}

const headA = new ListNode(4);
headA.next = new ListNode(1);
headA.next.next = new ListNode(8);
headA.next.next.next = new ListNode(4);
headA.next.next.next.next = new ListNode(5);

const headB = new ListNode(5);
headB.next = new ListNode(6);
headB.next.next = new ListNode(1);
headB.next.next.next = new ListNode(8);
headB.next.next.next.next = new ListNode(4);
headB.next.next.next.next.next = new ListNode(5);
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  let headALen = 0;
  let headBLen = 0;
  let tempA = headA;
  let tempB = headB;
  while (tempA) {
    headALen++;
    tempA = tempA.next;
  }
  while (tempB) {
    headBLen++;
    tempB = tempB.next;
  }
  tempA = headA;
  tempB = headB;
  if (headALen > headBLen) {
    let diff = headALen - headBLen;
    while (diff) {
      tempA = tempA.next;
      diff--;
    }
  } else if (headALen < headBLen) {
    let diff = headBLen - headALen;
    while (diff) {
      tempB = tempB.next;
      diff--;
    }
  }
  while (tempA && tempB) {
    if (tempA === tempB && tempA.val == tempB.val) return tempA.val;
    tempA = tempA.next;
    tempB = tempB.next;
  }
  return null;
};

getIntersectionNode(headA, headB);
