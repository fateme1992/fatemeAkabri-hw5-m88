function seprateThreeDigits(number){
    let numberConvertString = number.toString().split('.');
   
    let arrayOfReverseNumber = numberConvertString[0].split("").reverse();

    
    let newNumber = [];

    for(let i=0; i<arrayOfReverseNumber.length; i++){
           newNumber[newNumber.length] = ((i%3===2) && (i<arrayOfReverseNumber.length-1)) ? "," + arrayOfReverseNumber[i]: arrayOfReverseNumber[i];
    }

    let returnNum = newNumber.reverse().join("");
    if(numberConvertString[1]){
           returnNum += "." + numberConvertString[1];
    }

    return returnNum;


    // solution 2
    // return number.toLocaleString()
 }
 console.log(seprateThreeDigits(123456789));