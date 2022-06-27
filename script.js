// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  //Declar strings for random password to select characters from
  var charsUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var charsLower = "abcdefghijklmnopqrstuvwxyz"
  var charsSpecial = '!@#$%^&*()"'
  var charsNumeric = '0123456789';
  var passwordHolder = '';

  //prompt user for a password length and verify it is a number between 8 and 128
  var passwordLength = prompt('Choose length of password between 8 and 128 characters:');
  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    passwordLength = prompt('Oops, password must be between 8 and 128 characters.');
  }

  //Prompt user for what type of characters they want and confirm they chose at least one option
  var wantsUpperCase = confirm('Uppercase?');
  var wantsLowerCase = confirm('Lowercase?');
  var wantsNumeric = confirm('Numeric?');
  var wantsSpecialCharacters = confirm('Special Charcters?');

  
  console.log(passwordLength, wantsUpperCase, wantsLowerCase, wantsNumeric, wantsSpecialCharacters)

  while (wantsUpperCase == false && wantsLowerCase == false && wantsNumeric == false && wantsSpecialCharacters == false) {
    var exitOut = confirm('You must pick at least one (Uppercase, lowercase, numeric, and/or special characters.');
    var wantsUpperCase = confirm('Uppercase?');
    var wantsLowerCase = confirm('Lowercase?');
    var wantsNumeric = confirm('Numeric?');
    var wantsSpecialCharacters = confirm('Special Charcters?');

    if (!exitOut) {
      break;
    }
  }



  // If uppercase, create random upper case password
  while (passwordHolder.length != passwordLength) {
      if (wantsUpperCase) {
        var randomNum = Math.floor(Math.random() * charsUpper.length);
        passwordHolder += charsUpper.substring(randomNum, randomNum + 1);
      }
      if (wantsLowerCase) {
        randomNum = Math.floor(Math.random() * charsLower.length);
        passwordHolder+= charsLower.substring(randomNum, randomNum + 1);
      }
      if (wantsNumeric) {
        randomNum = Math.floor(Math.random() * charsNumeric.length);
        passwordHolder+= charsNumeric.substring(randomNum, randomNum + 1);
      }
      if (wantsSpecialCharacters) {
        randomNum = Math.floor(Math.random() * charsSpecial.length);
        passwordHolder+= charsSpecial.substring(randomNum, randomNum + 1);
      }
    }
  
    return passwordHolder;
  
}