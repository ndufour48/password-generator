// ASSIGNMENT CODE
var generateBtn = document.querySelector("#generate");

// PARENT VARIABLE FOR PASSWORD CRITERIA
var pwCriteria = {

  //PROPERTY FOR PASSWORD LENGTH
  pwLength: 0,

  // LOWERCASE LETTER ARRAY
  pwLowerCase:["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],

  // UPPERCASE LETTER ARRAY
  pwUpperCase:["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],

  // NUMBERS ARRAY
  pwNumber:[0, 1, 2, 3, 4, 5, 6, 7, 8, 9],

  // SPECIAL CHARACTER ARRAY
  pwCharacter:["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", "\\", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"]
}

// WRITES PASSWORD TO THE #PASSWORD INPUT
function writePassword() {
  // VARIABLES ASSIGNMENTS FOR FUNCTION CALL
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  // UPDATES THE TEXT AREA WITH NEW PASSWORD
  passwordText.value = password;
}

// EVENT LISTENER FOR GENERATE BUTTON
generateBtn.addEventListener("click", writePassword);

// FUNCTION TO GENERATE A PASSWORD
function generatePassword() {
  // LOCAL VARIABLES AND VARIABLE ASSIGNMENTS FOR FUNCTION CALL
  var result = "";
  var passwordLength = 0;
  var upperCase;
  var lowerCase;
  var numbers;
  var specialChar;

  // INITIALIZES CHARACTERS
  passwordLength = 0;
  pwCriteria.pwLength = 0;
  result = "";

  // INITIALIZES PROMTS AND CHECKS PASSWORD LENGTH
  while (passwordLength < 8 || passwordLength > 128) {
  passwordLength = prompt("Your password must be between 8 and 128 characters. \nHow many characters do you want your password to be?");

    //CANCLES PROMPTS WHEN PRESSING CANCEL
    if (passwordLength === null) {
    return "Your Secure Password";
    }

    else {

      // CONFIRMS IF USER ENTERED A NUMBER
      if (!isFinite(passwordLength)) {
      alert("Uh-oh! You didn't enter a number");
      return "Your Secure Password";
      }

      else {

        // CONFIRMS IF CHARACTER NUMBER IS BETWEEN 8 AND 128
        if (passwordLength < 8 || passwordLength > 128) {
        alert("Uh-oh! Your password must be between 8 and 128 characters");
        return "Your Secure Password";
        }

        else {

          // CALLS INTERNAL FUNCTION FOR CRITERIA PROMPTS
          showPrompts();

          // ADDS CHARACTERS TO TO MEET THE CHARACTER LENGTH SET BY USER
          while (pwCriteria.pwLength < passwordLength) {
            
            // IF STATEMENT TO VERIFY ATLEAST ONE OF THE PASSWORD CRITERIA HAS BEEN MET
            if (lowerCase === false && upperCase === false && numbers === false && specialChar === false) {
            alert("Uh-oh! To successfully generate a password, you must choose to include one or more of the following: \nlowercase letters \nuppercase letters \nnumbers \nspecial characters")
            showPrompts();
            }

            else {

              // IF STATEMENT TO RANDOMLY INCLUDE LOWERCASE LETTERS IN PASSWORD- IF REQUESTED BY USER
              if (lowerCase === true && pwCriteria.pwLength < passwordLength) {
                var lc = pwCriteria.pwLowerCase[Math.floor(Math.random() *26)]
                result = result + lc;
                pwCriteria.pwLength = pwCriteria.pwLength + 1;
              }

              // IF STATEMENT TO RANDOMLY INCLUDE SPECIAL CHARACTERS IN PASSWORD- IF REQUESTED BY USER
              if (specialChar === true && pwCriteria.pwLength < passwordLength) {
                var sc = pwCriteria.pwCharacter[Math.floor(Math.random() *32)]
                result = result + sc;
                pwCriteria.pwLength = pwCriteria.pwLength + 1;
              }

              // IF STATEMENT TO RANDOMLY INCLUDE UPPERCASE LETTERS IN PASSWORD- IF REQUESTED BY USER
              if (upperCase === true && pwCriteria.pwLength < passwordLength) {
                var uc = pwCriteria.pwUpperCase[Math.floor(Math.random() *26)]
                result = result + uc;
                pwCriteria.pwLength = pwCriteria.pwLength + 1;
              }

              // IF STATEMENT TO RANDOMLY INCLUDE NUMBERS IN PASSWORD- IF REQUESTED BY USER
              if (numbers === true && pwCriteria.pwLength < passwordLength) {
                var num = pwCriteria.pwNumber[Math.floor(Math.random() *10)]
                result = result + num;
                pwCriteria.pwLength = pwCriteria.pwLength + 1;
              }
            }
          }
        }
      }
    }
  }

  // RETURNS GENERATED PASSWORD TO THE CALL FUNCITON
  return result;

  // INTERNAL FUNCTION FOR CRITERIA PROMPTS
  function showPrompts(){
    lowerCase = confirm("Would you like to include lower case letters? \nOK = yes \nCancel = no");
    upperCase = confirm("Would you like to include upper case letters? \nOK = yes \nCancel = no");
    numbers = confirm("Would you like to include numbers? \nOK = yes \nCancel = no");
    specialChar = confirm("Would you like to include special characters? \nOK = yes \nCancel = no");
  }
}