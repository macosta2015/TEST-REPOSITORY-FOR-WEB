//Constant arrays
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(97, 122)
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47)

//FUNCTION Generate Random Numbers
var RandomRange = generateRandomNumbers(8,128);
function generateRandomNumbers(min,max){
  let step1 = max - min + 1;
  let step2 = Math.random() * step1;
  let result = Math.floor(step2) + min;

  //console.log(result)
  return result
}


// Assignment Code
var generateBtn = document.querySelector("#generate");

//FUNCTION How long do you want the password to be?
function PasswordLength() {
let PassWordLength1 = prompt('How long do you want the password to be?');
  //console.log(PassWordLength1)
  //We returb the input given
  return PassWordLength1;
}

//FUNCTION Generate the wanted password
//Variable for knowing how many YES OR NO WE NEED
var TotalBinary = 0;
console.log(TotalBinary);

function generatePassword(PassWordLength1){


    //Delcaring the i here so that it can be iterating up through the loops.
    var i=0;
    //Declaring the char that will hold all the data for
    // const PASSWORD = [PassWordLength1];
    const PASSWORD = [];
  
    

  console.log("The password length is: " + PassWordLength1);

  //Do you want to include lowercase lettes?
  let LowerCase = confirm('Any LowerCase?');
  // console.log(LowerCase)
  if(!LowerCase){
    console.log('NO LOWER CASE');
  } else {
    console.log('YES LOWER CASE');
    TotalBinary = TotalBinary + 1;
  }
  // console.log(TotalBinary);


  //Do you want to include uppercase?
  let UpperCase = confirm('Any UpperCase?');
  // console.log(UpperCase)
  if(!UpperCase){
    console.log('NO UpperCase');
  } else {
    console.log('YES UpperCase');
    TotalBinary = TotalBinary + 1;
  }
  // console.log(TotalBinary);

  //Do you want to include numbers?
  let Numbers = confirm('Any numbers to include?');
  // console.log(Numbers)
  if(!Numbers){
    console.log('NO Numbers');
  } else {
    console.log('YES Numbers');
    TotalBinary = TotalBinary + 1;
  }
  // console.log(TotalBinary);

  //Do you want to include special characters?
  let SpecialCharacters = confirm('AnySpecialCharacters?');
  // console.log(SpecialCharacters)
  if(!SpecialCharacters){
    console.log('NO SpecialCharacters');
  } else {
    console.log('YES SpecialCharacters');
    TotalBinary = TotalBinary + 1;
  }
  // console.log(TotalBinary);

  //We know divide the TotalBinary for the number requested 
  //Math.trunc is used to round downward
  var Ratio = Math.trunc(PassWordLength1/TotalBinary);
  console.log('Check the following ratio: ' + Ratio);

  //We now need the difference between the Ratio and PassWordLength1 
  //Integers remaining after diving them into the
  var IntegersRemaining = PassWordLength1 - (Ratio*TotalBinary);
  console.log('The remaining Integers are: ' + IntegersRemaining);

  // //GENERATE THE RATIO CHARACTERS
  // if (Ratio !=0){
  //   console.log('RATIO NOT EQUAL TO 0')
  //   if(!LowerCase){
  //     console.log('NO RATIO LOWERCASE_CHAR_CODES');
  //     if(!UpperCase){
  //       console.log('NO RATIO UPPERCASE_CHAR_CODES');
  //       if(!Numbers){
  //         console.log('NO RATIO NUMBER_CHAR_CODES');
  //         if(!SpecialCharacters){
  //           console.log('NO RATIO SYMBOL_CHAR_CODES');
  //         } else {
  //           console.log('YES RATIO SYMBOL_CHAR_CODES');      
  //         }
  //       } else {
  //         console.log('YES RATIO NUMBER_CHAR_CODES');      
  //       }
  //     } else {
  //       console.log('YES RATIO UPPERCASE_CHAR_CODES');      
  //     }
  //   } else {
  //     console.log('YES RATIO LOWERCASE_CHAR_CODES');
  //   }
  // } else {
  //   console.log('RATIO EQUAL TO 0')
  // }


  //START GENERATING RANDOM CHARACTERS

  // //Delcaring the i here so that it can be iterating up through the loops.
  // var i=0;
  // //Declaring the char that will hold all the data for
  // const PASSWORD = [PassWordLength1];
  

  for (i; i < Ratio; i++){
    // console.log(i);
    //LOWERCASE_CHAR_CODES
    var LOWERCASE_CHAR_CODES = generateRandomNumbers(97, 122);
    //return a number between 65 and 90
    // console.log(LOWERCASE_CHAR_CODES)
    //We need to convert this number into a usable character for the password
    String.fromCharCode(LOWERCASE_CHAR_CODES)
    var RESULT =  String.fromCharCode(LOWERCASE_CHAR_CODES)
    // console.log(RESULT)
    if(!LowerCase){
      console.log('NO LOWERCASE_CHAR_CODES');
    } else {
      console.log('YES LOWERCASE_CHAR_CODES: ' + RESULT);
      PASSWORD[i] = RESULT
      console.log('PASSWORD: ' + PASSWORD[i]);
      // console.log(RESULT)
      // TotalBinary = TotalBinary + 1;
    }
    // console.log(TotalBinary);
  }


  for (i; i < Ratio*2; i++){
    // console.log(i);
    //UPPERCASE_CHAR_CODES
    var UPPERCASE_CHAR_CODES = generateRandomNumbers(65, 90);
    //return a number between 97 and 122
    // console.log(UPPERCASE_CHAR_CODES)
    //We need to convert this number into a usable character for the password
    String.fromCharCode(UPPERCASE_CHAR_CODES)
    var RESULT =  String.fromCharCode(UPPERCASE_CHAR_CODES)
    // console.log(RESULT)
    if(!UpperCase){
      console.log('NO UPPERCASE_CHAR_CODES');
    } else {
      console.log('YES UPPERCASE_CHAR_CODES: ' + RESULT);
      PASSWORD[i] = RESULT
      console.log('PASSWORD: ' + PASSWORD[i]);
      // console.log(RESULT)
      // TotalBinary = TotalBinary + 1;
    }
    // console.log(TotalBinary);
  }

  for (i; i < Ratio*3; i++){
    // console.log(i);
    //NUMBER_CHAR_CODES
    var NUMBER_CHAR_CODES = generateRandomNumbers(48, 57);
    //return a number between 48 and 57
    // console.log(NUMBER_CHAR_CODES)
    //We need to convert this number into a usable character for the password
    String.fromCharCode(NUMBER_CHAR_CODES)
    var RESULT =  String.fromCharCode(NUMBER_CHAR_CODES)
    // console.log(RESULT)
    if(!Numbers){
      console.log('NO NUMBER_CHAR_CODES');
    } else {
      console.log('YES NUMBER_CHAR_CODES: '+ RESULT);
      PASSWORD[i] = RESULT
      console.log('PASSWORD: ' + PASSWORD[i]);
      // console.log(RESULT)
      // TotalBinary = TotalBinary + 1;
    }
    // console.log(TotalBinary);
  }

  for (i; i < Ratio*4; i++){
    // console.log(i);
    //SYMBOL_CHAR_CODES
    var SYMBOL_CHAR_CODES = generateRandomNumbers(33, 47);
    //return a number between 33 and 47
    // console.log(SYMBOL_CHAR_CODES)
    //We need to convert this number into a usable character for the password
    String.fromCharCode(SYMBOL_CHAR_CODES)
    var RESULT =  String.fromCharCode(SYMBOL_CHAR_CODES)
    // console.log(RESULT)
    if(!SpecialCharacters){
      console.log('NO SYMBOL_CHAR_CODES');
    } else {
      console.log('YES SYMBOL_CHAR_CODES: ' + RESULT);
      PASSWORD[i] = RESULT
      console.log('PASSWORD: ' + PASSWORD[i]);
      // console.log(RESULT)
      // TotalBinary = TotalBinary + 1;
    }
    // console.log(TotalBinary);
  }



  //check if the number is even
  // if(Ratio % 2 == 0) {
  //   console.log("The number is even.");
  // }
  // // if the number is odd
  // else {
  //   console.log("The number is odd.");
  // }

  if(IntegersRemaining == 0) {
    console.log("REMAINING IS EQUAL TO 0!");
    // PASSWORD[PassWordLength1] = RESULT
  }
  // if the number is odd
  else {
    // console.log("The number is odd.");
        //GENERATE THE RATIO CHARACTERS
        if (Ratio !=0){
          console.log('RATIO NOT EQUAL TO 0')
          // PASSWORD[PassWordLength1] = RESULT
          if(!LowerCase){
            console.log('NO RATIO LOWERCASE_CHAR_CODES');
            if(!UpperCase){
              console.log('NO RATIO UPPERCASE_CHAR_CODES');
              // PASSWORD[PassWordLength1] = RESULT
              if(!Numbers){
                console.log('NO RATIO NUMBER_CHAR_CODES');
                // PASSWORD[PassWordLength1] = RESULT
                if(!SpecialCharacters){
                  console.log('NO RATIO SYMBOL_CHAR_CODES');
                } else {
                  console.log('YES RATIO SYMBOL_CHAR_CODES');   
                  PASSWORD[PassWordLength1] = RESULT   
                }
              } else {
                console.log('YES RATIO NUMBER_CHAR_CODES');      
                PASSWORD[PassWordLength1] = RESULT
                PASSWORD[PassWordLength1+1] = RESULT
              }
            } else {
              console.log('YES RATIO UPPERCASE_CHAR_CODES');  
              PASSWORD[PassWordLength1] = RESULT
              PASSWORD[PassWordLength1+1] = RESULT    
            }
          } else {
            console.log('YES RATIO LOWERCASE_CHAR_CODES');
            PASSWORD[PassWordLength1] = RESULT
            PASSWORD[PassWordLength1+1] = RESULT
          }
        } else {
          console.log('REMAINING EQUAL TO 0')
        }
  }
    // //GENERATE THE RATIO CHARACTERS
    // if (Ratio !=0){
    //   console.log('RATIO NOT EQUAL TO 0')
    //   // PASSWORD[PassWordLength1] = RESULT
    //   if(!LowerCase){
    //     console.log('NO RATIO LOWERCASE_CHAR_CODES');
    //     if(!UpperCase){
    //       console.log('NO RATIO UPPERCASE_CHAR_CODES');
    //       // PASSWORD[PassWordLength1] = RESULT
    //       if(!Numbers){
    //         console.log('NO RATIO NUMBER_CHAR_CODES');
    //         // PASSWORD[PassWordLength1] = RESULT
    //         if(!SpecialCharacters){
    //           console.log('NO RATIO SYMBOL_CHAR_CODES');
    //         } else {
    //           console.log('YES RATIO SYMBOL_CHAR_CODES');   
    //           PASSWORD[PassWordLength1] = RESULT   
    //         }
    //       } else {
    //         console.log('YES RATIO NUMBER_CHAR_CODES');      
    //         PASSWORD[PassWordLength1] = RESULT
    //       }
    //     } else {
    //       console.log('YES RATIO UPPERCASE_CHAR_CODES');  
    //       PASSWORD[PassWordLength1] = RESULT    
    //     }
    //   } else {
    //     console.log('YES RATIO LOWERCASE_CHAR_CODES');
    //     PASSWORD[PassWordLength1] = RESULT
    //     PASSWORD[PassWordLength1+1] = RESULT
    //   }
    // } else {
    //   console.log('REMAINING EQUAL TO 0')
    // }
  

  //Print out the generated array 
  console.log('Inside for loop')
  for (var i=0; i < PassWordLength1; i++){ 
  console.log('PRINT' + i + ' ' + PASSWORD[i]);
  }
  console.log('Outside for loop')

  var FilterString = PASSWORD.filter((exists) => exists);
  console.log(' FILTER: '+ FilterString);

  console.log('NOT FILTER: ' + PASSWORD.join());

  console.log('IN');
  document.getElementById('password').placeholder = "goodbye";
  document.getElementById('password').placeholder = FilterString;
  document.getElementByplaceholder("aria-label").innerText = "Do not know why it runs";
  console.log('OUT');

}



//FUNCTION creates an array from our lower number to our higher number
//There is no need for this code
function arrayFromLowToHigh(low, high){
  const array = []
  for (let i = low; i<= high; i++){
    array.push(i)
  }
  return array 
}


// Write password to the #password input
function writePassword() {
  // console.log("We are inside the writePassword");

  //CAll function PasswordLength()
  var PassWordLength1 = PasswordLength();
  // console.log(PassWordLength1);

  //CAll function generatePassword() 
  var password = generatePassword(PassWordLength1);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);


//Part of the class
generateBtn.addEventListener('click', e=>{
  // console.log(e.target)
})

//Indise the addVenetListener 2
generateBtn.addEventListener('click', e=>{
  // console.log("addVenetListener 2")
})

//Indise the addVenetListener 3
generateBtn.addEventListener("click", writePassword);


//Random Numbers
// var random = Math.floor(Math.random() * 10)+ 8;
// console.log(random);

// alert/prompt/confirm
//Promot for Boolean operations
// let result = confirm('Please click on Generate password');
// console.log(result)

//Promot for numbers and infoemation
// let information = prompt('Please provide information');
// console.log(information)




//REFERENCES

//Generate random number in JavaScript
// https://www.youtube.com/watch?v=AGNu6sKaftI

//To round up the numbers:
// https://www.jsdiaries.com/how-to-remove-decimal-places-in-javascript/

//To check if the number is even or odd
// https://www.programiz.com/javascript/examples/even-odd#:~:text=Example%201%3A%20Using%20if...else&text=In%20the%20above%20program%2C%20number,Hence%2C%20the%20number%20is%20odd.

//How to filter arrays and strings to numbers
// https://www.youtube.com/watch?v=LFcosCnX324

//How to change the HTML from JS file
// https://www.youtube.com/watch?v=W5IsH5R-XpA



  //  //Code using a for loop 
  // var MylIST[]
  // for (var i=0; i < 2; i++){
  //   console.log(MylIST[i])
  // }

  // //check if the number is even
  // if(Ratio % 2 == 0) {
  //   console.log("The number is even.");
  // }
  // // if the number is odd
  // else {
  //   console.log("The number is odd.");
  // }

