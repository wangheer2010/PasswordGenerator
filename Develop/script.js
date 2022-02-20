// Assignment code here
// Define a function to get the length of the password
function getLength() {
  let lengthOfPassword = prompt("Please enter the length of your password (it should be 8 to 128 characters)");
  let realLength = 0 // Set a base value for a variable
  if (lengthOfPassword != null && lengthOfPassword>=8 && lengthOfPassword<=128) {
    realLength= lengthOfPassword;
  } else {
    realLength = getLength();
  }
  return realLength;
}

function getUpper() {
  let hasUpperCase = prompt("Do you want Uppercase letter in your password? Please enter yes or no (in lower case)");
  let hasRealUpperCase = false; // Set a base value for a variable
  if (hasUpperCase === "yes") {
    hasRealUpperCase= true;
  } else if (hasUpperCase === "no") {
    hasRealUpperCase= false;
  } else {
    hasRealUpperCase = getUpper();
  }
  return hasRealUpperCase;
}

function getLower() {
  let hasLowerCase = prompt("Do you want Lowercase letter in your password? Please enter yes or no (in lower case)");
  let hasRealLowerCase = false; // Set a base value for a variable
  if (hasLowerCase === "yes") {
    hasLowerLowerCase= true;
  } else if (hasLowerCase === "no") {
    hasRealLowerCase= false;
  } else {
    hasRealLowerCase = getLower();
  }
  return hasRealLowerCase;
}


function generatePassword() {
  var password = ''
  var passwordLength = getLength();
  var UpperOrNot = getUpper(); 
  var LowerOrNot = getLower();
  console.log(UpperOrNot)
  // create a set of all types of of characters (eg 1-26 upper, 27-52 lower, ...)
  // for each index range select a number in it. for loop
  // n conditions (n, yes or nos)
  // random function to select n-1 random number, the nth is decided by length - (number1+number2+..number(n-1))
  // 
  

  // random ordering function
  // sorting
  return password
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
