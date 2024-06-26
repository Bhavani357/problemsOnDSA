const n = 3
function stairCase(n){
    if(n<=1) return 1
    let noOfWays = new Array(n+1).fill(0)
    noOfWays[0]=1
    noOfWays[1]=1
    for(let i=2;i<=n;i++){
        noOfWays[i] = noOfWays[i-1]+noOfWays[i-2]
    }
    return noOfWays[n]
}

const noOfWays = stairCase(n)
console.log(noOfWays)