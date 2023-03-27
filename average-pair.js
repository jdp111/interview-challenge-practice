// add whatever parameters you deem necessary
function averagePair(sortedArr, meanTarget) {
    let left = 0
    let right = sortedArr.length - 1

    while(left < right){
        const average = (sortedArr[left] + sortedArr[right])/2
        if (average == meanTarget) return true
        if(average < meanTarget){
            left ++
        }else{
            right --
        }
    }
    return false
}
