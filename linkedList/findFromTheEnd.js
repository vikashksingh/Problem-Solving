
 function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
 
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // let count = 0;
    // let tail = head;
    // while(tail){
    //     count++;
    //     tail = tail.next;
    // }
    // if(n >= count) return head && head.next;
    // let number = count - n - 1;
    // tail = head;
    // while(number){
    //     tail = tail.next;
    //     number--;
    // }
    // tail.next = tail.next && tail.next.next;
    // return head;
    let it1 = head;
    let it2 = head;
    while(n >= 1) {
        it2 = it2.next;
        n--;
    }
    while(it2 && it2.next){
        it2 = it2.next;
        it1 = it1.next;
    }
    if(!it2) return head.next;
    it1.next = it1.next && it1.next.next;
    return head;
};

removeNthFromEnd(head,2);