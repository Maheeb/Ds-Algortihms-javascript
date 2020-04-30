// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    let temp_1 = str.toLowerCase();
    let temp_3 = ['a','e','i','o','u'];
    let count =0;
    for(let temp_2 of temp_1.split('')){
     for (let temp_4 of temp_3){
         if(temp_2 == temp_4){
             count++;
         }

     }

    }
    return count;
}

module.exports = vowels;
