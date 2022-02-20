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
  let hasUpperCase = prompt("Do you want Uppercase letters in your password? Please enter yes or no (in lower case)");
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
  let hasLowerCase = prompt("Do you want Lowercase letters in your password? Please enter yes or no (in lower case)");
  let hasRealLowerCase = false; // Set a base value for a variable
  if (hasLowerCase === "yes") {
    hasRealLowerCase= true;
  } else if (hasLowerCase === "no") {
    hasRealLowerCase= false;
  } else {
    hasRealLowerCase = getLower();
  }
  return hasRealLowerCase;
}

function getNumeric() {
  let hasNumeric = prompt("Do you want Numeric characters in your password? Please enter yes or no (in lower case)");
  let hasRealNumeric = false; // Set a base value for a variable
  if (hasNumeric === "yes") {
    hasRealNumeric= true;
  } else if (hasNumeric === "no") {
    hasRealNumeric= false;
  } else {
    hasRealNumeric = getNumeric();
  }
  return hasRealNumeric;
}

function getSpecial() {
  let hasSpecial = prompt("Do you want Special characters in your password? Please enter yes or no (in lower case)");
  let hasRealSpecial = false; // Set a base value for a variable
  if (hasSpecial === "yes") {
    hasRealSpecial= true;
  } else if (hasSpecial === "no") {
    hasRealSpecial= false;
  } else {
    hasRealSpecial = getLower();
  }
  return hasRealSpecial;
}

function generatePassword() {
  var password = ''
  var passwordLength = getLength();
  var UpperOrNot = getUpper(); 
  var LowerOrNot = getLower();
  var NumericOrNot = getNumeric();
  var SpecialOrNot = getSpecial();
  console.log(UpperOrNot)
  console.log(LowerOrNot)
  console.log(NumericOrNot)
  console.log(SpecialOrNot)
  var characterSet = ''
  // create a set of all types of of characters (eg 1-26 upper, 27-52 lower, ...)
  // for each index range select a number in it. for loop
  // n conditions (n, yes or nos)
  // random function to select n-1 random number, the nth is decided by length - (number1+number2+..number(n-1))
  // 
  

  // random ordering function
  // sorting
  //
  if ( UpperOrNot=== false && LowerOrNot === false && NumericOrNot == false && SpecialOrNot === false) {
    return 'There is no such password. Refresh the page and change your input'
  }
  else {
    return password
  }
  
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
