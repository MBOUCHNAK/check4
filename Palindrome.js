let letters = [];
let word = "radar";
let rword = "";

// for (i = 0; i<word.length; i++)
// {
//     letters[i]= word[i]
// }
// console.log (letters)

for (let i=0; i<word.length; i++){
    letters.push(word[i])
}
for (let i = 0; i < word.length; i++) {
    rword += letters.pop();
    if (rword == word) {
        console.log("the word", rword, "is a palandrom")
    }
    else {console.log("the word", rword,"is not a palandrom" );}
}

console.log (rword);
console.log(letters);



