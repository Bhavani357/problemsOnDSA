class Stack{
    constructor(){
        this.data = []
    }
    push(x){
        this.data.push(x)
    }
    pop(){
        if(!this.data){
            return 'No elements to pop'
        }
        let popedEl = this.data.pop()
        return popedEl
    }
    peek(){
        return this.data[this.data.length-1]
    }
    size(){
        return this.data.length
    }
    print(){
        for(let i of this.data){
            console.log(i)
        }
        return this.data
    }
    isPalindrome(){
        let result = 0
        for(let i of this.data){
            result = result * 10 + i
        }
        return result
    }
    
}

let temNum = 1221
let number = temNum

const obj = new Stack()
while(number>0){
    let lastDigit = number%10 
    let remaining = Math.floor(number/10)
    number = remaining
    obj.push(lastDigit)
}

let reversedNum = obj.isPalindrome()

if(reversedNum === temNum){
    console.log(true)
}else{
    console.log(false)
}
