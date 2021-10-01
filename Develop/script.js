// Assignment Code
 var generateBtn = document.querySelector("#generate");
 var minLength = 8;
 var maxLength = 128;

 const lower = 'q,w,e,r,t,y,i,o,p,a,s,d,f,g,h,j,k,l,z,x,c,v,b,n,m'.split("");
 const upper = lower.toUpperCase.split("");
 const number = '0123456789'.split("");
 const symbol = "!\#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("");
 const letterCase = [lower + upper].split ("");
 const all = [letterCase + number + symbol].split("");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  var upperCase = confirm("Do you want uppercase letters?");
  var lowerCase = confirm("Do you want lowercase letters in your password?");
  var Case = confirm ("Do you want uppercase and lowercase letters?");
  var num = confirm("Do you want numbers in your password?");
  var special = confirm ("Do you want special characters in your password?");
  var strongest = confirm ('Want the strongest of all passwords?')
  
  // This creates a local variable for the password and charPick instead of getting the DOM object with id="password"
  let password = '';
  let charPick = '';

  //  lowercase ,uppercase, symbols and numbers are confirmed
  if(strongest === true) {
      charPick += all;
  
// uppercase, lowercase 
    while (Case === true) {
      charPick += letterCase;

//  uppercase & lowercase + symbols
     if(special === true) {  
      charPick += symbol;
    } // end if

// uppercase & lowercase + numbers 
   if (num === true) {
      charPick += number;
    } // end if 

  } // end while

// symbols & numbers combo similar to uppercase and lowercase used before  
  while (num === true && special === true)  {
    charPick += number;
    charPick += symbol;

// uppercase, (numbers + symbols)
    if (upperCase === true) {
      charPick += upper;
    } // end if 

// lowercase, (numbers + symbols)
    if (lowerCase === true){
      charPick += lower;
    } // end if 

  } // end while 

  password += charPick[Math.floor(Math.random() * charPick.length)];

} // end if 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);