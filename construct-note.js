// add whatever parameters you deem necessary
function freqCounter(str){
    let res = {}
    for (letter of str){
        const freq = res[letter] + 1 || 1
        res[letter] = freq
    }
    return res
}

function constructNote(msg, letters) {
    const messageFreq = freqCounter(msg)
    const letterFreq = freqCounter(letters)
    for (const key in messageFreq){
        
        if (messageFreq[key] > letterFreq[key] || !letterFreq[key]) return false
    }

    return true


}
