// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];

var confirmLength ="";
var confirmUpperCase="";
var confirmLowercase="";
var confirmSpecialCharacter="";
var confirmNumbers="";
var passwordText="";

// Write password to the #password input


function writePassword() {
  var confirmLength = prompt("How many characters would you like for your password? 8-128");
  var confirmUpperCase = confirm ("Select OK if you would like uppercase letters in your password.");
  var confirmLowercase = confirm ("Select OK if you would like lowercase letters in your password.");
  var confirmSpecialCharacter = confirm ("Select OK if you would like special characters in your password.");
  var confirmNumbers = confirm ("Select OK if you would like numbers in your password.");

  if(confirmUpperCase) {
    passwordText = passwordText.concat(uppercase);
  }
  if(confirmLowercase) {
    passwordText = passwordText.concat(lowercase);
  }
  if(confirmSpecialCharacter) {
    passwordText = passwordText.concat(specialChar);
  }
  if(confirmNumbers) {
    passwordText = passwordText.concat(numbers);
  }

  var passwordText ="";

  for (var index = 0; index < confirmLength; index++) {
    randomPassword = randomPassword + passwordText[Math.floor(Math.random() * characters.length)];
    
  }


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
document.getElementById("placeholder");

