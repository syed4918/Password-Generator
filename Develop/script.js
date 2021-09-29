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

  var charLength = prompt("Please choose a length of 8 - 128 characters for your pasword.");
  var upperCase = confirm("Do you want uppercase letters?");
  var lowerCase = confirm("Do you want lowercase letters in your password?");
  var Case = confirm ("Do you want uppercase and lowercase letters?");
  var num = confirm("Do you want numbers in your password?");
  var special = confirm ("Do you want special characters in your password?");
  var strongest = confirm ('Want the strongest of all passwords?')
  
  // This creates a local variable for the password and charPick instead of getting the DOM object with id="password"
  let password = '';
  let charPick = '';

  console.log(charLength);
  console.log(upperCase);
  console.log(lowerCase);
  console.log(Case);
  console.log(num);
  console.log(special);
  console.log (strongest);

  //  lowercase ,uppercase, special and numbers are confirmed
  if(strongest === true){
    for(var i = 0; i <charLength; i++){
      charPick = all[Math.floor(Math.random()*all.length)]
      console.log(charPick);
      password = password.toString()+charPick.toString();
      console.log(password);
    }
  }  
// uppercase, lowercase, and numbers 
    else if(num = true && Case === true){
      for(var i = 0; i <charLength; i++){

      charPick = letterCase[Math.floor(Math.random()*letterCase.length)] + number [Math.floor(Math.random()*number.length)];
      console.log(charPick);
      password = password.toString()+charPick.toString();
      console.log(password);

    }
  }
//  uppercase, lowercase, symbols
    else if(special === true && Case === true){
      for(var i = 0; i <charLength; i++){
        charPick = letterCase[Math.floor(Math.random()*letterCase.length)] + symbol [Math.floor(Math.random()*symbol.length)];
        console.log(charPick);
        password = password.toString()+charPick.toString();
        console.log(password);       
      }

    }
// 
   else if(num != true && whichCase != true){
      for(var i = 0; i <charLength; i++){

        charPick = characters[Math.floor(Math.random()*characters.length)];
        console.log(charPick);
        password = password.toString()+charPick.toString();
        console.log(password);


  } 
    }
    return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


