// JavaScript's most important datatype is the object.
// An object is a collection of name/value pairs, or a string to value map.
let book = { // Objects are enclosed in curly braces.
    topic: "JavaScript", // The property "topic" has value "JavaScript."
    edition: 7 // The property "edition" has value 7
}; // The curly brace marks the end of the object.

book.contents = {ch01:{sect1:'i am from sect1'}}; // {} is an empty object with no properties.
// Conditionally access properties with ?. (ES2020):
console.log(book.contents?.ch01?.sect1 )// => undefined: book.contents has no ch01 property.
console.log('hello world')
console.log("3"+"2")// => 5
let a = 2
console.log(a += 2) // => 4
console.log("two" > 'three') // => true
console.log(false === (2 > 3)) // => true