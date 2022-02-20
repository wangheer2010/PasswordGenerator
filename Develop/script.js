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
// Create a randomize and shuffle function to shuffle whatever string we got from the password
String.prototype.shuffle = function () {
  var a = this.split(""),
      n = a.length;

  for(var i = n - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
  }
  return a.join("");
}

function generatePassword() {
  var password = ''
  var passwordLength = getLength();
  var UpperOrNot = getUpper(); 
  var LowerOrNot = getLower();
  var NumericOrNot = getNumeric();
  var SpecialOrNot = getSpecial();
  // List out all the possible sets and all the unions of the sets as strings
  var upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerSet = "abcdefghijklmnopqrstuvwxyz";
  var numericSet = "0123456789";
  var specialSet = "~!@#$%^&*()_+-=[]\{}|;:'\",./<>?"; // added an escape signal for the quote mark
  var unionUL = upperSet.concat(lowerSet);
  var unionUN = upperSet.concat(numericSet);
  var unionUS = upperSet.concat(specialSet);
  var unionLN = lowerSet.concat(numericSet);
  var unionLS = lowerSet.concat(specialSet);
  var unionNS = numericSet.concat(specialSet);
  var unionULN = upperSet.concat(lowerSet,numericSet);
  var unionUNS = upperSet.concat(numericSet,specialSet);
  var unionULS = upperSet.concat(lowerSet,specialSet);
  var unionLNS = lowerSet.concat(numericSet,specialSet);
  
  // for each possible conditions, we create a string for it by two steps
  // first, select one from each category that the user said yes for
  // second, select all other remaining characters from the union sets of all the category that the user said yes for
  // if the user only say yes to one category, then we select all the possible characters from the category he wants
  // fourth, randomize the string
  // Case 1-4: yes for only one category
  if 


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
