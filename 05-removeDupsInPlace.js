function removeDups(nums){
    for(let i=1;i<nums.length;i++){
        if(typeof nums[i] === 'number'){
            let numberToCompare = nums[i]
            let j = i-1 
            while(j>=0){
                if(nums[j]===numberToCompare){
                    nums.splice(j,1,'-')
                }
                j -= 1
            }
        }
        
    }
    for(let i=0;i<nums.length;i++){
        if(typeof nums[i] === 'string'){
            let index = nums.indexOf('-')
            let popedEl = nums.splice(index,1)
            nums.push('-')
        }
    }
    let count = 0
    for(let i of nums){
        if(typeof i === 'number'){
            count += 1
        }
    }
    return [nums,count]
}


const nums = [0,0,1,1,1,2,2,3,3,4]
const [numOfUniques,count] = removeDups(nums)
console.log(numOfUniques, ', NumberOfUniques: '+count)