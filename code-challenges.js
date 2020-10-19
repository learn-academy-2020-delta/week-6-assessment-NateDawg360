// ASSESSMENT 6: JavaScript Coding Practical Questions


// --------------------1) Create a function that takes in an array of objects and returns a sentence about each person with their names capitalized.
var people = [
  { name: "ford prefect", occupation: "hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "radio employee" }
]
// Expected output example: "Ford Prefect is a hitchhiker." "Zaphod Beeblebrox is a president of the galaxy." "Arthus Dent is a radio employee."

// **My attempts below is to be able to destructor the object of "people" so that I can access the keys 'name', and 'occupation' so that I can call on them to use in a sentence.

// let sentence = people.filter(key => key.name === 'arthur dent')

// console.log(`${people.name} is a ${people.occupation}`);


  // let sentence = people.filter(key => key.name && value => value.occupation)

    // console.log(sentence(`${name} is a ${occupation}`));


// let keys = Object.keys(people)
// let values = Object.values(people)
//
//   let sentence = (keys, values) => {
//     return `${this.keys} is a ${this.values}`
//   }
//
//   console.log(sentence(`${this.keys} is a ${this.values}`));
  // let entries = Object.entries(people)
  //
  //   let sentence = (entries) => {
  //     return `${this.keys} is a ${this.values}`
  //   }

    // let sentence = sen.map(entries => {
    //   return `${keys} is a ${values}`
    // })
    // let name = Object.keys(people)
    // let occupation = Object.occupation(people)

      let sentence = (people) => {
        people.filter(key => key.name)
        people.filter(job => job.occupation)
        return `${key} is a ${job}`
      }

      console.log(sentence);

// let sentence = (keys, values) =>{
//   return `${keys} is a ${values}`
// }

// console.log(keys, values);
// console.log(entries);






// let arr = []


// var { name, occupation } = people =>{
//   return `${name} ${occupation}`
// }
// console.log(des(people));






// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDER of the numbers when divided by 3.

var testingArray1 = [23, "Heyyyy!", 45, -9, 0, "Yo", false]
// // Expected output: [ 2, 0, -0, 0 ]
var testingArray2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

// We want to create a constant variable that takes in the argument of an array, and filter through it to take out any elements that are not integers, and only return an array of integers.
const divArr = (array) => {
// Then we want to identify the type of element we wish to return, which is an integer, then we want to iterate through that array using the map function to return each integer divded by 3.
  return array.filter(value => typeof value === 'number').map(value => value %3)
}

console.log(divArr(testingArray1));
console.log(divArr(testingArray2));

// let numbersOnly = array.filter(value => {return typeof value === "number"})

// *First Attempt*
// const divArr = (array1, array2) => {
//
//   let array = array1.concat(array2)
//
//   return array % 3
// }
//
// console.log(divArr(testingArray1, testingArray2));

// --------------------3) Create a function that takes in two arrays as arguments returns one array with no duplicate values.
//
var testingArray3 = [3, 7, "hi", 10, 3, "hello", 4, "hi"]
var testingArray4 = [7, "hi", 3, 1, "hi", 4, "hello", 4, 7]
// Expected output: [ 3, 7, "hi", 10, "hello", 4, 1 ]
// create a variable that takes in the argument of joining two arrays, and does not return any duplicates of any values
const newArr = (array1, array2) => {
// the concat method is what will join both arrays together
  let array = array1.concat(array2)
// console.log(array(array1, array2));
// we will then filter through the arrays, and the logic we will pass is that if there is a duplicate of one value that is in another, we will only pass one of those values.
  return array.filter((value, index) => array.indexOf(value) === index)


}


console.log(newArr(testingArray3, testingArray4));
