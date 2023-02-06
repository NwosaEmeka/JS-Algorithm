// Given a positive integer, generate an array in which every element is an array that goes from 1 to the index of that array.

// Example:

// > generateArrays(4)
// > [[1], [1, 2], [1, 2, 3], [1, 2, 3, 4]]

// > generateArrays(1)
// > [[1]]

const generateArrays = () => {
  let ans = [];
  for (let i = 1; i < num; i++) {
    ans.push(Array(i).fill(0).map((_, index) => index+1))
  }
  return ans
}

  
const generateArrayOneLiner = (num) => {
  return Array(num).fill(0).map((_, i) => Array(i+1).fill(0).map((_, index) => index+1) )
}

console.log(generateArrays(4) // [[1], [1, 2], [1, 2, 3], [1, 2, 3, 4]]
console.log(generateArrays(1) //  [[1]]
console.log(generateArrayOneLiner(6)) // [[1], [1,2], [1,2,3], [1,2,3,4], [1,2,3,4,5], [1,2,3,4,5,6]]
