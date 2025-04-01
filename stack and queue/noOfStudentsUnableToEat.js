/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    let len = students.length;
    const squeue = new QueueT();
    const sstack = [];
    for(let i = 0; i < len; i++){
        sstack.push(sandwiches[len-i-1]);
        squeue.offer(students[i]);
    }
    let lastServed = 0;
    while(squeue.size > 0 && lastServed < squeue.size){
        if(sstack[sstack.length-1] == squeue.peek()){
            sstack.pop();
            squeue.poll();
            lastServed = 0;
        } else {
            squeue.offer(squeue.poll());
            lastServed++;
        }
    }
    return squeue.size;
};

class QueueT{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    offer(val){
        if(!this.head) {
            this.head = {
                val: val,
                next: null
            }
            this.tail = this.head;
        }
        else {
            this.tail.next = {
                val: val,
                next: null
            }
            this.tail = this.tail.next;
        }
        this.size++;
    }
    poll(){
        let value;
        if(this.size){
            value = this.head.val;
            this.head = this.head.next;
            if(this.head == this.tail) this.tail == this.head;
        }
        this.size--;
        return value;
    }
    peek(){
        return this.head.val;
    }
}

countStudents([1,1,0,0],[0,1,0,1])