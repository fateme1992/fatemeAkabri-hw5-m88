function caseInsensitiveSearch(string, word) {
    //validation
    if (typeof string !== 'string' || typeof word !== 'string') return 'Invalid Input'
    
    let newString = string.toLowerCase();
    let newWord = word.toLowerCase();
    let arrayOfString = newString.split(" ");

    return arrayOfString.includes(newWord)
}
console.log(caseInsensitiveSearch("hello world", "Hello"));
console.log(caseInsensitiveSearch("Hello world", "Hello"));
console.log(caseInsensitiveSearch("hello world", "hi"));