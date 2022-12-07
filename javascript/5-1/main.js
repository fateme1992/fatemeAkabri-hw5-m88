function countArrayDeep(array) {
    let count = 0;
    let newArray = []
    array.map(function (element) {
        if (Array.isArray(element)) {
            count++
            currentArrayDeep(array.flat());
        }
    })
    return count;
}
console.log(countArrayDeep([1, 2, [2], [3, [[3],1]]]))