
 function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }

  const head = new ListNode(1);
  head.next = new ListNode(2);
  head.next.next = new ListNode(2);
  head.next.next.next = new ListNode(1);

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let len = 0;
    let temp = head;
    while(temp){
        len++;
        temp = temp.next;
    }
    let middle = Math.ceil(len/2);
    let midList = head;
    while(middle){
        midList = midList.next;
        middle--;
    }
    let reversed = reverseList(midList);
    while(reversed){
        if(head.val != reversed.val){
            return false;
        }
        reversed = reversed.next;
        head = head.next;
    }
    return true;
};

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


isPalindrome(head);
