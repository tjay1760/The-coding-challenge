const sample_list = {
    head : {
        value : 5, 
        next : {
            value : 6,
            next : {
                value : 7,
                next:{
                    value : null
                }
            }
        }
    }
}
class ListNode {
    constructor(value){
        this.data = value
        this.next = null
    }
}
class LinkedList{
    constructor(head =null){
        this.head = head
    }
}
let node1 = new ListNode(1)
let node5 = new ListNode(5)