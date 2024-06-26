class Node{
    constructor(data){
        this.data = data 
        this.next = null 
    }
}
class LinkedList{
    constructor(){
        this.head = null
        
    }
    addAtLast(num){
        const newNode = new Node(num)
        if(!this.head){
            newNode.next = this.head
            this.head = newNode
        }else{
            let current = this.head
            while(current.next){
                current = current.next
            }
            current.next = newNode
        }

    }
    
    print(){
        const mergedArr = []
        let current = this.head 
        while(current.next){
            mergedArr.push(current.data)
            current = current.next
        }
        console.log(mergedArr)
    }
}

const obj = new LinkedList()
const list1 = []
const list2 = [0]
list1.push(...list2)
let len = list1.length+1
for(let i=0;i<len;i++ ){
    let min = Math.min(...list1)
    obj.addAtLast(min)
    let index = list1.indexOf(min)
    let popedEl = list1.splice(index,1)
    
}
obj.print()
