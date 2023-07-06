// variables
const checkBtn = document.querySelector('.btn');
const result = document.querySelector('.result');


// function logic

function PalindromeChecker(){
    // here we are getting the value of input
    const inputValue = document.querySelector('#word').value;
    if(inputValue === ""){
        alert("Please enter a valid string")
    }

    //here we are converting the input value to lowercase 
    inputValue.toLowerCase();

    // spliting the input string to array
    let wordString = inputValue.split("");

    // initializing the low and high variables
    let low = 0;
    let high = wordString.length-1;

    // while loop to check whether a array is a palindrome 
    while(low < high){

        if (wordString[low] !== wordString[high]){
            result.innerText = inputValue.toUpperCase() + " is NOT a Palindrome";
            return;
        }
        low++;
        high--;
    }
    result.innerText = inputValue.toUpperCase() + " is a Palindrome";
}



// adding event listner to button
checkBtn.addEventListener('click', PalindromeChecker);




/* function displayResult(){
    const isPalindrome = PalindromeChecker();
    if(isPalindrome){
        result.innerText = inputValue.value.toUpperCase() + " is a Palindrome";
    }
    else{
        result.innerText = inputValue.value.toUpperCase() + " is NOT a Palindrome";
    }
} */