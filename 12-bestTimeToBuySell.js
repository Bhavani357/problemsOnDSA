const prices = [7,6,4,3,1] 
let result = 0
for(let i=0;i<prices.length;i++){
    let buy = prices[i]
    let maxi = buy
    for(let j=i+1; j<prices.length;j++){
        if(maxi<prices[j]){
            maxi = prices[j]
        }
    }
    if(result<maxi-buy){
        result = maxi-buy
    }
    
}
console.log(result)