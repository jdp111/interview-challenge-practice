// add whatever parameters you deem necessary
function countPairs(arr,num) {
    let numObj = {}
    let res = 0

    for(item of arr){
        if(numObj[num-item]) res +=1
        numObj[item] = true
    }
    return res
}
