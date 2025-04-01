var swapPairs = function(head) {
    if (!head || !head.next) return head;
    
    function solve(cur){
        if (cur.next == null) return;
        var prev = prev || cur;
        var slow = cur;
        var fast = slow.next;
        if (slow && fast){
            slow.next = fast.next;
            fast.next = prev;
            prev = slow;
            head = fast;
        }
        return solve(slow.next);
    }
    
    solve(head);
    return head;
};

console.log(swapPairs({
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: null
            }
        }
    }
}));