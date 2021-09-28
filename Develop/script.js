// Assignment Code
var generateBtn = document.querySelector("#generate");
 var minLength = 8;
 var maxLength = 128;

 const Lower = 'q,w,e,r,t,y,i,o,p,a,s,d,f,g,h,j,k,l,z,x,c,v,b,n,m'.split("");
 const Upper = lower.toUpperCase();
 const Nmber = '0123456789'.split("");
 const Symbol = "!\#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("");

 var confirmLength = "";
 var confirmLower;
 var confirmUpper;
 var confirmSymbol;
 var confirmNumber;
 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
