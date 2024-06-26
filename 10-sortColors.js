const nums = [2,0,2,1,1,0] 

for(let i=1;i<nums.length;i++){
    let numberToInsert = nums[i]
    let j=i-1
    while(j>=0&&nums[j]>numberToInsert){
        nums[j+1] = nums[j]
        j -=1
    }
    nums[j+1] = numberToInsert
}
console.log(nums)