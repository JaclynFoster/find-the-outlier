// You are given an array (which will have a length of at least 3, but could be very large) 
// containing integers. The array is either entirely comprised of odd integers or entirely 
// comprised of even integers except for a single integer N. Write a function that takes the
//  array as an argument and returns this “outlier” N.

// Examples:

// [2, 4, 0, 100, 4, 11, 2602, 36] Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21] Should return: 160 (the only even number)

// const findTheOutlier = (arr) => {
//     let even = []
//     let odd = []
//     for (let i = 0; i < arr.length; i++) {
//         let n = arr[i]
//         if (n % 2 === 0) {
//             even.push(n)
//            // console.log(even)
//         } else if (n % 2 !== 0) {
//             odd.push(n)
//         }
    
//     }
//     if (odd.length > even.length) {
//         return even
//     } else {
//         return odd
//     }

// }

// console.log(findTheOutlier([2,4,6,8,10,12,14,7,16,18,20]))

// const function2 = (arr) => {
//     const even = []
//     const odd = []
//     arr.forEach(num => {
//         if(num % 2 === 1) {
//             odd.push(num)
//         } else {
//             even.push(num)
//         } 
//     })
//     if (odd.length > even.length) {
//         return "The N Outlier is " + even.join("")
//     } else {
//         return "The N Outlier is " + odd.join("")
//     }
// }

console.log(function2([2,4,6,8,10,12,14,7,16,18,20]))
