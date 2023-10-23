// // Assignment Code
var generateBtn = document.querySelector("#generate");


// // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var passwordlength = prompt('How many characters would you like the password between 8 and 128 characters?');
  if (passwordlength <8) {
    return 'Please try again. Password must be between 8 and 128 characters.'
    
  } 
  if (passwordlength >128) {
    return 'Please try again. Password must be between 8 and 128 characters.'
    
  }
  if (isNaN(passwordlength)) {
    return 'Please provide a digit between 8 - 128. NO WORDS!'
  }
  var upperCase = confirm('Would you like to have uppercase characters in your password?');
  var lowercase = confirm('Would you like to have lowercase characters in your password?');
  var numbers = confirm('Would you like to have numbers in your password?');
  var symbols = confirm('Would you like to have symbols in your password?');

  var userChoices = ''
  var upperCase1 = 'ABCDEFGHIJKLMNOPQRSTUVWRXYZ';
  var lowercase1 = 'abcdefghijklmnopqrstuvwrxyz';
  var numbers1 = '0123456789';
  var symbols1 = '!@#$%^&*()?<>';
  // var passwordlength1 = min(8), max(124);
if (upperCase) {
  userChoices += upperCase1
}
if (lowercase) {
  userChoices += lowercase1
  
}
if (numbers) {
  userChoices += numbers1
  
}
if (symbols) {
  userChoices += symbols1
  
}
console.log(userChoices)
var password = ''
for (var i = 0; i < passwordlength; i++) {
  password += userChoices.charAt(Math.floor(Math.random() * userChoices.length));
};
if (upperCase) {
  password = password.split('');
password[3] = 'B';
password = password.join('');
  
}
if (lowercase) {
  password = password.split('');
  password[4] = 'v';
  password = password.join('');
    
}
if (numbers) {
  password = password.split('');
  password[5] = '9';
  password = password.join('');
    
}
if (symbols) {
  password = password.split('');
  password[6] = '&';
  password = password.join('');
      
}
return password;
}


// Add event listener to generate button - clicking the event listener RUNS THE FUNCTION of 'writePassword'
generateBtn.addEventListener("click", writePassword);

