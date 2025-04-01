/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
var list1 = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 4,
            next: null
        }
    }
}
var list2 = {
    val: 1,
    next: {
        val: 3,
        next: {
            val: 4,
            next: null
        }
    }
}
var mergeTwoLists = function(list1, list2) {
    // if (!list1 && !list2) return list1;
    // else if (!list1) return list2;
    // else return list1;
    var head = null;
    var tail = null;
    function solve(list1, list2){
        if (!list1 && !list2) return;
        if (list1.next && list2.next) {
            if (list1.val < list2.val){
                AddToList(list1.val);
                solve(list1.next,list2, head)
            } else {
                AddToList(list2.val);
                solve(list1,list2.next, head)
            }
        }else if (list1.next){
            AddToList(list1.val);
            solve(list1.next,list2, head)
        } else if (list2.next){
            AddToList(list2.val);
            solve(list1,list2.next, head)
        }
    }
    
    function AddToList(val){
        if(!head) {
            head = new ListNode(val);
            tail = head;
        } else {
            tail.next = new ListNode(val);
            tail = tail.next;
        }
    }
    solve(list1,list2);
    return head;
};

console.log(mergeTwoLists(list1,list2));
