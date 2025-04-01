
//  Definition for singly-linked list.
 function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
 }
 
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    function solve(l1,l2,carry = 0){
        if (!l1 && !l2) {
            if (carry) return new ListNode(carry);
            else return null;
        }
        let sum = (l1 && l1.val) + (l2 && l2.val) + carry;
        carry = sum >= 10 ? 1 : 0;
        sum = sum >= 10 ? sum-10 : sum;
        let head = new ListNode(sum);
        let next1 = l1 ? l1.next : null;
        let next2 = l2 ? l2.next : null;
        head.next = solve(next1,next2,carry);
        return head;
    }
    return solve(l1,l2);
};

var l1 = {
    val: 2,
    next: {
        val: 4,
        next: {
            val: 3,
            next: null
        }
    }
};
var l2 = {
    val: 5,
    next: {
        val: 6,
        next: {
            val: 4,
            next: null
        }
    }
};

console.log(addTwoNumbers(l1,l2))