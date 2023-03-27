// add whatever parameters you deem necessary

function freqCounter(num){
    let res = {}
    const digitArr = String(num).split('')
    for (dig of digitArr){
        const freq = res[dig] + 1 || 1
        res[dig] = freq
    }
    
    return res
}

function sameFrequency(num1, num2) {
    const num1Freq = freqCounter(num1)
    const num2Freq = freqCounter(num2)
    if (!(num1Freq.length ==num2Freq.length)) return false
    for (let key in num1Freq){
        if (!(num1Freq[key] == num2Freq[key])) return false
    }
    return true
}
