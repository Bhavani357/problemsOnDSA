
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

let str = '(){[]' 
function isValidParentheses(str){
    let dict = {
        "(":")",
        "[":"]",
        "{":"}"
    }
    let obj = new Stack()
    for(let i of str){
        if(dict[i]){
            obj.push(i)
        }else{
            let popedEl = obj.pop()
            if(dict[popedEl] !== i){
                
                return false
            }
        }
    }
    return obj.data.length === 0
    
}
let parentheses = isValidParentheses(str)
console.log(parentheses)