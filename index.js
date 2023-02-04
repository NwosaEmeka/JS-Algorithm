
// Given a positive integer, generate an array in which every element is an array that goes from 1 to the index of that array.

// Example:

// > generateArrays(4)
// > [[1], [1, 2], [1, 2, 3], [1, 2, 3, 4]]

// > generateArrays(1)
// > [[1]]

const generateArrays = (num) => {
  let ans = [];
  for (let i = 1; i <num+1; i++) {
    ans.push(Array(i).fill(0).map((_, index) => index+1))
  }
  return ans
}

console.log(generateArrays(4)) // [ [ 1 ], [ 1, 2 ], [ 1, 2, 3 ], [ 1, 2, 3, 4 ] ]
console.log(generateArrays(1)) // [ [ 1 ] ]
console.log(generateArrays(0)) // [ ]