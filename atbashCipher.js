// You are given a lowercase alphabet string text. Return a new string where every character in text is mapped to its reverse in the alphabet, so that a becomes z, b becomes y, c becomes x, and so on.

// Example 1
// Input
// text = "abcdef"
// Output
// "zyxwvu"


function atbashCipher(text) {
    let output = "";
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    for (let i = 0; i < text.length; i++) {
        output += alphabet[26 - alphabet.indexOf(text[i]) - 1];
    }
    return output;
}

console.log(atbashCipher("abcdef"));
