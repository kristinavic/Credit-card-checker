// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:

const validateCred = arr => {
    //return true when an array contains digits of a valid credit card number
    //return false when an array contains digits of an invalid credit card number

    let newArr = arr.slice(0, -1).reverse();  //removes the last digit and reverses the array
    let lastDigit = arr[arr.length - 1]; //last digit of the array
    let sumDigits = 0;

    //checking for odd and and even digits
    for (let i = 0; i < newArr.length; i++) {
        
        if (i % 2 !== 0) {   //when digits are odd, multiply by 2
            sumDigits += newArr[i];
        } else {            //when digits are even
            newArr[i] = newArr[i] * 2

            if (newArr[i]> 9) {
                sumDigits += newArr[i] - 9
            } else {
                sumDigits += newArr[i];
            }
        }           
    }
    sumDigits += lastDigit;

    //compare sumDigits to the lastDigit
    let modulo = sumDigits % 10 

    if (modulo === 0) {
        //console.log('The number is valid.')
        return true;
    } else {
        //console.log('The number is invalid!')
        return false;
    }
}

const findInvalidCards = arr => {
    // check through the nested array for which numbers are invalid
    // return another nested array of invalid cards

    let invalidNumbers = [];

    //looping throuh the array:
    for (let i = 0; i < arr.length; i++) {
        if (!validateCred(arr[i])) {
            invalidNumbers.push(arr[i])
        }             
    } 
    return invalidNumbers;    
}

//identifies the credit card companies which issued faulty card nr.
const idInvalidCardCompanies = arr => {
    
    let companies = [];

    //looping throuh the array if invalid numbers:
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] === 3) {
            companies.push('American Express');
        } else if (arr[i][0] === 4) {
            companies.push('Visa');
        } else if (arr[i][0] === 5) {
            companies.push('Mastercard');
        } else if (arr[i][0] === 6) {
            companies.push('Discover');
        } else {
            console.log("Company not found.")
        }
    }
    return [...new Set(companies)]; //creates new array without duplicates;
}


//tests
//console.log(findInvalidCards(batch));

console.log(idInvalidCardCompanies(findInvalidCards(batch)));

// console.log('Following numbers should be valid:')
 //console.log(validateCred(valid1));
// console.log(validateCred(valid2));
// console.log(validateCred(valid3));
// console.log(validateCred(valid4));
// console.log(validateCred(valid5));

// console.log('Following numbers should be invalid:')
// console.log(validateCred(invalid1));
// console.log(validateCred(invalid2));
// console.log(validateCred(invalid3));
// console.log(validateCred(invalid4));
// console.log(validateCred(invalid5));

// console.log('Following numbers could be anything:')
// console.log(validateCred(mystery1));
// console.log(validateCred(mystery2));
// console.log(validateCred(mystery3));
// console.log(validateCred(mystery4));
// console.log(validateCred(mystery5));

