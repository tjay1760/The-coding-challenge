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
        this.head = value
        this.next = null
    }
}