// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    //
    let rev = n.toString().split('').reverse().join('');
    let res = parseInt(rev);

    if(Math.sign(n)=== -1){
         return res * -1;
    }
    return res;


}

module.exports = reverseInt;
