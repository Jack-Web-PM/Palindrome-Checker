function palindrome(str) {
    let s = str.length -1
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] != str [s]) {
            return false;
        }
        s--;
    }

    return true;
};


let str1 = "racecar";
let str2 = "nitin";
let str3 = "Rama";

console.log(palindrome(str1));
console.log(palindrome(str2));
console.log(palindrome(str3));
