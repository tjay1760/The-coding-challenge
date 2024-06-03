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
    size(){
        let count = 0;
        let node = this.head
        while(node){
            node = node.next
count ++
        }
        console.log(count)
    }
    clear(){
        this.head = null
    }
    getLast(){
        let lastNode = this.head
        
            if (lastNode){
               while(lastNode.next){
lastNode = lastNode.next
               }

            } 
            
            console.log(lastNode)
    }
    getFirst(){
        console.log(this.head)
    }
    addNode(val){
        const newNode = new ListNode(val)
        let currentNode = this.head
        while (currentNode.next){
            currentNode = currentNode.next
        }
        currentNode.next = newNode
    }
    removeNode(){
        let currentNode = this.head
        while (currentNode.next.next){
            currentNode = currentNode.next
        }
       
        currentNode.next = null
       
    }
}
let node1 = new ListNode(1)
let node5 = new ListNode(5)
node1.next = node5

let linkedList1 = new LinkedList(node1)
linkedList1.addNode(50);
linkedList1.addNode("yes");
linkedList1.removeNode()
console.log(linkedList1.head.next)



