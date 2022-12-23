// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//04-activities 07/08
function writePassword() {
  var password = generatePassword();
  var passwordText = document.getElementById("password");
  passwordText.textContent = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  var lengthChoice = prompt("Choose the length of your password, between 8 - 128 characters.");
    //validate user num
    if (lengthChoice == null) {
      return;
    } else if (lengthChoice >= 8 && lengthChoice <= 128) {
      alert("That works!");
      return lengthChoice;
    } else {
      alert("Please type an integer between 8 and 128!");
      generatePassword();
    }
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
 
};

//must return a string value that is the password
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