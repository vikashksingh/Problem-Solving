function reverseList(head) {
    if (!head) return head;
    function solve(cur){
        if(cur.next == null) return;
        var next = cur.next;
        cur.next = next.next;
        next.next = head;
        head = next;
        return solve(cur);
    }
    solve(head);
    return head;
};