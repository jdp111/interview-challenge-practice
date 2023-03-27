// add whatever parameters you deem necessary
function twoArrayObject(keys, vals) {
    const res = {}
    for (let i = 0; i < keys.length; i++){
        res[keys[i]] = vals[i] || null
    }
    return res
}