const strs = ["eat","tea","tan","ate","nat","bat"]
const map = new Map()
for(let word of strs){
    let key = word.split('').sort().join('')
    if(!map.has(key)){
        map.set(key,[word])
    }else{
        map.get(key).push(word)
    }
}
console.log([...map.values()])