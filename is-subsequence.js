// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
    let n = 0
    for(let m=0; m <= str2.length; m++){
        if (n == str1.length) return true
        if (str1[n] == str2[m]){
            n++
        }
    }
    return false

}
