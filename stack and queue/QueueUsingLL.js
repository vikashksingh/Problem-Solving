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
            // if(this.head == this.tail) this.tail == this.head;
        }
        this.size--;
        return value;
    }
    peek(){
        return this.head.val;
    }
}