const palindromeInput = document.getElementsByClassName("palindrome-input")[0];
const elemResult = document.getElementsByClassName("result")[0];

function checkPalindrome() {

    let stillMatching = true;                                               // 0 -1
    const pattern = palindromeInput.value.toLowerCase();                    // 1 -2
    const patternReversed = pattern.split("").reverse().join("");           // 2 -3

    for (index = 0; index < pattern.length; index++) {

        if ( pattern[index] === patternReversed[index]) {
            stillMatching = true;
        }
        else {
            stillMatching = false;
            break;
        };
    }
    if (stillMatching === true) {
        elemResult.innerText = `PALINDROME PATTERN \nForwards - ${pattern} \nBackwards - ${patternReversed}`;
    }
    else {
        elemResult.innerText = `This is NOT a Palindrome :/`;
    };
    setTimeout(() => {elemResult.innerText = "";}, 5000)

};

window.addEventListener("keydown", event => {
    if (event.code === "Enter") {
        checkPalindrome();
    }
})