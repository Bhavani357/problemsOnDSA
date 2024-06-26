const str = "PAYPALISHIRING"
const numRows = 3

let output = ''
let count = 0

for(let j=0;j<numRows;j++){
    let result = ""
    for(let i=0;i<str.length;i++){
        
        if(i===0){
            result += str[0]
            count += numRows+1
        }else if(i===count){
            result+= str[i]
            count += numRows + 1
        }else if(i%2===1 && j===1){
            result += str[i]
        }
    }
    output += result
    
}
console.log(output)