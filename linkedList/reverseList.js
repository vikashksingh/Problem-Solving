// function reverseList(head) {
//     if (!head) return head;
//     function solve(cur){
//         if(cur.next == null) return;
//         var next = cur.next;
//         cur.next = next.next;
//         next.next = head;
//         head = next;
//         return solve(cur);
//     }
//     solve(head);
//     return head;
// };

function reverseList(head) {
    if (!head) return head;
    let prev = null;
    let cur = head;
    while (cur) {
        let next = cur.next; // Store the next node
        cur.next = prev; // Reverse the current node's pointer
        prev = cur; // Move prev to current node
        cur = next; // Move to the next node
    }
    return prev; // New head of the reversed list
}