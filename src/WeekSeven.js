// function that are returning the answer inside a array

// function goat(black,white) {
// let hit= [black,white]
// return hit
// }
// console.log(goat(1,2))
//short hand =>  
// this code is a short cut th=o the one above.

// let goat = (black,white) => [1,2]
// console.log(goat(1,2))  // so this is two lines 

//second attempt 
// let goat =(... a) => a
// console.log(typeof goat)
// console.log(goat(1,2,3,4,3,5,))

// let dog = [1,2,3,4,5]
// console.log(dog[4], goat [5])  //in the brackets its calling the array argument.

// function OddOrEven(x) {
// let sum =0;   // 4 each 11 // sum is 0
// x.forEach(num => sum += num) // this is recreating a loop,
// return sum%2 ===0 ? 'even' : 'odd' // returning the answer in  simple if and else 
// }


//  ++ is adding 1 to the called array argument

// console.log(OddOrEven([1,2,3,4,5]))

// function OddOrEven(x) {
//   let sum =0;
//    for (let i =0; i < x.length; i++) {
//     sum += x[i]
//     if (sum%2 === 0) {
//         return 'even'
//     } else {
//         return 'odd'                 this is a difficult
//     }
// }}
// console.log(OddOrEven([1,2,3,4,5]))

// function StringToNumber (arr) {
//     return arr.map(x => Number (x));
// }

// function StringToNumber(arr) {
// newArr =[]
// arr.forEach((x) => {
//  newArr.push(parseInt(x))
// })
// return newArr
// }
// console.log(StringToNumber(["9.4", "4.2"]))

// //[1,2,3,4,5] return this as a string ? '123456' how do we do this 


// function arrayToString(arr) {
//     let text = ""
//     for (let i = 0; i < arr.length; i++) {
//         text += arr[i]
//     }
//     return text
//     }
//  let example = arrayToString([1,2,3,4,5,6,])
// console.log(example)
// console.log(typeof example)

// function
// arrayToString (arr){
//     return arr.JOIN('');
//     }
//     console.log(arrayToString([1,2,3,4,5,6]))

//('hello') = ('olleh')

function gnirts(x){
let Arr = x.split('') //split with commas K,E,N,N,Y
//console.log(arr)
let newArr = Arr.reverse() //reverse the command and split Y,N,N,E,K
//console.log(newArr)
let joinNewArr = newArr.join('') //removes commas and join the word YNNEK
//console.log(joinNewArr)
return joinNewArr
}
console.log(gnirts('sharleen'))  //prints YNNEK


