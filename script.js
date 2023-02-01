// Assignment Code
var generateBtn = document.querySelector("#generate");
var pwCriteria = {

  pwLength: 0,

  pwLowerCase:["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],

  pwUpperCase:["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],

  pwNumber:[0, 1, 2, 3, 4, 5, 6, 7, 8, 9],

  pwCharacter:["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", "\\", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"]
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  var result = "";
  var passwordLength = 0;
  var upperCase;
  var lowerCase;
  var numbers;
  var specialChar;

  passwordLength = 0;
  pwCriteria.pwLength = 0;
  result = "";

  while (passwordLength < 8 || passwordLength > 128) {
  passwordLength = prompt("Your password must be between 8 and 128 characters. \nHow many characters do you want your password to be?");
}

  lowerCase = confirm("Would you like to include lower case letters? \nOK = yes \nCancel = no");
  upperCase = confirm("Would you like to include upper case letters? \nOK = yes \nCancel = no");
  numbers = confirm("Would you like to include numbers? \nOK = yes \nCancel = no");
  specialChar = confirm("Would you like to include special characters? \nOK = yes \nCancel = no");

}