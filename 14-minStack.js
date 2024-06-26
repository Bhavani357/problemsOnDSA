class MinStack{
    constructor(){
        this.arr1 = []
        this.arr2 = []
    }
    push(n){
        if(this.arr1.length === 0 && this.arr2.length ===0){
            this.arr1.push(n)
            this.arr2.push(n)
        }else{
            this.arr1.push(n)
            if(n<this.arr2[this.arr2.length-1]){
                this.arr2.push(n)
            }
        }
        
    }
    pop(){
        let popedEl = null
        if(this.arr1.length !==0){
            popedEl = this.arr1.pop()
            if(popedEl === this.arr2[this.arr2.length-1]){
                this.arr2.pop()
            }
        }
        console.log(popedEl)
    }
    peek(){
        
        if(this.arr1.length !==0){
            console.log(this.arr1[this.arr1.length-1])
        }
        
    }
    getMin(){
        console.log("minNum: "+ this.arr2[this.arr2.length-1])
    }
}
const minstack = new MinStack()
minstack.push(-2)
minstack.push(0)
minstack.push(-3)
minstack.getMin()
minstack.pop()
minstack.peek()
minstack.getMin()