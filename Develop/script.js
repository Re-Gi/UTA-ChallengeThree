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

function generatePassword(){
  //must return a string valuethat is the password
  //prompt user to choose num btwn 8 and 128
    //var to save length
    //validate user num
  //confirm user upper, lower, num, special chars (4 confirm prompts)
    //4 vars to save t/f to include characters
    //validate that atleast one cat was chosen
  //vars that include all user options of each catagory. Array of strings for each cat.
    //var upper = ["A", "B", etc...]
  //if user says yes to include that cat choose random elements from the array
    //how to decide how many elements to choose from each array 
      //?combine arrays that are yessed into new array to randomly choose from
  //validate that atleast one cat was chosen
  //join chosen elements into a string
  return passwordString;
}
