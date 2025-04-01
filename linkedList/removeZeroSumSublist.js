
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(-3);
head.next.next.next = new ListNode(3);
head.next.next.next.next = new ListNode(1);
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeZeroSumSublists = function(head) {
    const front = new ListNode(0,head);
    let current = front;
    let prefixSum = 0;
    const hashMp = {};
    hashMp['0'] = front;
    while(current){
        prefixSum += current.val;
        hashMp[prefixSum] = current;
        current = current.next;
    }
    prefixSum = 0;
    current = front;
    while(current){
        prefixSum += current.val;
        current.next = hashMp[prefixSum].next;
        current = current.next;
    }
    return front.next;
};

removeZeroSumSublists(head);