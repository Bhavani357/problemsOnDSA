const nums = [4,5,6,7,0,1,2]
const target = 0 
let temp =[...nums]
let count = 0
for(let i of temp){
    // console.log(i)
    if(i !== target){
        let firstEl = nums.shift()
        nums.push(firstEl)
        count += 1
    }else{
        break
    }
}
console.log(nums, " NumberOfRotations: "+count)