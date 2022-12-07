function flatten(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            newArray = newArray.concat(flatten(array[i]));
        } else {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
console.log(flatten([10, [25, 13], [14, [55]], 2]));