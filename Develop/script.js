// Assignment Code
var generateBtn = document.querySelector("#generate");
var length = [ "setLength <8 || setLength > 128" ];

// set password possibilities
var values= [ "abcdefghijklmnopqrstuvwxyz0123456789 ".split("") ]; 

var password= "";

// loop for varierty of password possibilites
for (var i=0; i <=generateBtn; i++)
  password=password + values.concat(Math.floor(Math.random() * values.length))

// promt password critria 

// prompt for the length of password
if (setLength <8 || setLength > 128) {
}

// prompt for charactor types ie uppper case/ lowercases


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

