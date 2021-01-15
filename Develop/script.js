// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
// set password critia                                                     
var lowercase= [ "abcdefghijklmnopqrstuvwxyz".split("") ]; 
var numbers= ["0123456789".split("")];
var specialcharaters= [ "!@#$%&*".split("")];
var uppercase =[ "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")];
//Length of password
var lengthMin= ["< 8"];
var lengthMax= [ " > 128"];
var password = ""
 // prompt password critria 
  var userSpecial = window.confirm ("do you want to use special characters?"); 
  //if they choose yes or no
  //if (!userSpecial) {
    //return;
  var userLower = window.confirm ("want to include lowercase?");
  // add varaibles for numbers and uppercase
  //if they choose yes or no 

 // prompt for size of length of password
 var userLength = window.prompt("What the length of your password?");
 //userLength = 
// array that will have required critia 
// concat arrays - previous array. 
 // creating loop to generate password
for(var i=0; i < 8 ; i++){
  var randomIndex = Math.floor(Math.random() * lowercase.length)
  password += specialcharaters[randomIndex]
 console.log (password);
}
// Write password to the #password input
function writePassword() {
  var generate = "generatePassword"
  passwordText.textContent = password;
  console.log(password)
}

 
  // Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);

writePassword();