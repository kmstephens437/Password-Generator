//Setting global variables

var confirmLength;
var confirmLowercase;
var confirmUppercase;
var confirmNumeric;
var confirmSpecial;

//setting variables for PW generation

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!","@","#","$","%","^","&","*"];
var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]



var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  confirmLength = prompt("Please choose PW length between 8 and 128 characters");
//set early return if confirmLength is false and move on to confirms if valid
  if (!confirmLength) {
    window.alert("Please enter a valid response")
    return
  } else if(confirmLength <8 || confirmLength >128) {
    window.alert("Please enter a valid response")
    return
  } else {
  confirmLowercase = confirm("Would you like to include lowercase letter?");
  confirmUppercase = confirm("Would you like to include Uppercase letters?");
  confirmNumeric = confirm("Would you like to include numbers?");
  confirmSpecial = confirm("Would you like to include special characters?");
  };
// check to make sure at least one item was set for criteria
  if (!confirmLowercase && !confirmUppercase && !confirmNumeric && !confirmSpecial) {
    window.alert("At least one criteria must be selected!");
    return
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
