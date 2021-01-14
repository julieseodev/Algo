// Given a string s representing a phrase, return its acronym. Acronyms should be capitalized and should not include the word "and".

// Constraints

// 0 ≤ n ≤ 100,000 where n is the length of s
// Example 1
// Input
// s = "For your information"
// Output
// "FYI"
// Example 2
// Input
// s = "National Aeronautics and Space Administration"
// Output
// "NASA"


function acronym(s) {
    let newStr = "";
    let arr = s.split(" ");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'and') {
            continue;
        } else {
            newStr += arr[i][0].toUpperCase();
        }
    }
    return newStr;
}

console.log(acronym("For your information")); // "FYI"
console.log(acronym("National Aeronautics and Space Administration")); // "NASA"