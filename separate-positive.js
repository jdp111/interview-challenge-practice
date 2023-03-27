// add whatever parameters you deem necessary
function separatePositive(arr) {
    //two pointers
    let left = 0 
    let right = arr.length -1

    while (left < right){
        if (arr[left] < 0 ){
            const temp = arr[left]
            arr[left] = arr[right]
            arr[right] = temp
            right -=1
        }else{
            left +=1
        }
    }
    return arr
}
