/**
 * @param {Node} head
 */

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = head;

function removeLoop(head) {
  // your code here
  let slow = head;
  let fast = head;
  while (slow && fast.next) {
    let temp = slow;
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) {
      // if (slow == head) {
      //   temp.next = null;
      // } else {
      //   slow.next = null;
      // }
      slow.next = null;
      return head;
    }
  }
  return head;
}

removeLoop(head);
