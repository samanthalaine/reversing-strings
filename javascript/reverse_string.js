
//With built-in functions

// First, split the string to return a new array, then reverse the new array. 
// Finally, join the array elements into a string

function reverseString(str) {
  let splitString = str.split("")
  let reversedArray = splitString.reverse()
  let reversedString = reversedArray.join("")
  return reversedString
  //console.log(reversedString)
}
reverseString("reverse")

//Chaining the methods together

function reverseStringAgain(str) {
  return str.split("").reverse().join("")
  //console.log(str.split("").reverse().join(""))
}
reverseStringAgain('ReverseMe')


//With For Loop

//First, create an empty string that will host the new string
//Then create a for loop
//Last return the reversed string

function reverseThisString(str){
  let newString = ""
  for (let i = str.length -1; i >=0; i--){
    newString += str[i]
  }

  return newString
  //console.log(newString)
}
reverseThisString("ThisString")
