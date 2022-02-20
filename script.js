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
// random ordering function
// sorting
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
// Create a function to get a random characters (with length = length) from a string
function getRandomString(length,setASet) {
  var randomChars = setASet;
  var result = '';
  for ( var i = 0; i < length; i++ ) {
    result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
  }
  return result;
}

function generatePassword() {
  var password = '';
  var temp = '';
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
  var unionALL = upperSet.concat(lowerSet,numericSet,specialSet);
  
  // for each possible conditions, we create a string for it by two steps
  // first, select one from each category that the user said yes for
  // second, select all other remaining characters from the union sets of all the category that the user said yes for
  // Case 1: yes for all categories
  if (UpperOrNot && LowerOrNot && NumericOrNot && SpecialOrNot) {
    temp = getRandomString(1,upperSet).concat(getRandomString(1,lowerSet),getRandomString(1,numericSet),getRandomString(1,specialSet),getRandomString(passwordLength-4,unionALL));
    password = temp.shuffle()
    return password
  }
  // Case 2: No for Special
  else if (UpperOrNot && LowerOrNot && NumericOrNot) {
    temp = getRandomString(1,upperSet).concat(getRandomString(1,lowerSet),getRandomString(1,numericSet),getRandomString(passwordLength-3,unionULN));
    password = temp.shuffle()
    return password
  }
  // Case 3: No for Upper
  else if (LowerOrNot && NumericOrNot && SpecialOrNot) {
    temp = getRandomString(1,specialSet).concat(getRandomString(1,lowerSet),getRandomString(1,numericSet),getRandomString(passwordLength-3,unionLNS));
    password = temp.shuffle()
    return password
  }
  // Case 4: No for Lower
  else if (UpperOrNot && NumericOrNot && SpecialOrNot) {
    temp = getRandomString(1,upperSet).concat(getRandomString(1,numericSet),getRandomString(1,specialSet),getRandomString(passwordLength-3,unionUNS));
    password = temp.shuffle()
    return password
  }
  // Case 5: No for Numeric
  else if (UpperOrNot && LowerOrNot && SpecialOrNot) {
    temp = getRandomString(1,upperSet).concat(getRandomString(1,lowerSet),getRandomString(1,specialSet),getRandomString(passwordLength-3,unionULS));
    password = temp.shuffle()
    return password
  }
  // Case 6: Yes for only UL
  else if (UpperOrNot && LowerOrNot) {
    temp = getRandomString(1,upperSet).concat(getRandomString(1,lowerSet),getRandomString(passwordLength-2,unionUL))
    password = temp.shuffle()
    return password
  }
  // Case 7: Yes for only UN
  else if (UpperOrNot && NumericOrNot) {
    temp = getRandomString(1,upperSet).concat(getRandomString(1,numericSet),getRandomString(passwordLength-2,unionUN))
    password = temp.shuffle()
    return password
  }
  // Case 8: Yes for only US
  else if (UpperOrNot && SpecialOrNot) {
    temp = getRandomString(1,upperSet).concat(getRandomString(1,specialSet),getRandomString(passwordLength-2,unionUS))
    password = temp.shuffle()
    return password
  }
  // Case 9: Yes for only LN
  else if (NumericOrNot && LowerOrNot) {
    temp = getRandomString(1,numericSet).concat(getRandomString(1,lowerSet),getRandomString(passwordLength-2,unionLN))
    password = temp.shuffle()
    return password
  }
  // Case 10: Yes for only LS
  else if (SpecialOrNot && LowerOrNot) {
    temp = getRandomString(1,specialSet).concat(getRandomString(1,lowerSet),getRandomString(passwordLength-2,unionLS))
    password = temp.shuffle()
    return password
  }
  // Case 11: Yes for only NS
  else if (NumericOrNot && SpecialOrNot) {
    temp = getRandomString(1,numericSet).concat(getRandomString(1,specialSet),getRandomString(passwordLength-2,unionNS))
    password = temp.shuffle()
    return password
  }
  // Case 12 - 15 yes for only one category
  else if (UpperOrNot) {
    password = getRandomString(passwordLength,upperSet)
    return password
  }
  else if (LowerOrNot) {
    password = getRandomString(passwordLength,lowerSet)
    return password
  }
  else if (NumericOrNot) {
    password = getRandomString(passwordLength,numericSet)
    return password
  }
  else if (SpecialOrNot) {
    password = getRandomString(passwordLength,specialSet) 
    return password
  }

// In the end, we decide on what to return
// For all the cases above, we return password 
// but if someone is mad, saying no to everything, we should be able to capture it, ask him to refresh and change his input
  else if ( UpperOrNot=== false && LowerOrNot === false && NumericOrNot == false && SpecialOrNot === false) {
    return 'There is no such password. Click on the button and change your input'
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
