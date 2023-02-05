// Given an array of random integers, move all the zeros in the array to the end of the array. Try to keep this in O(n) time (or better)!

// Example:
// moveZeros([1, 2, 0, 1, 0, 0, 3, 6])
// [1, 2, 1, 3, 6, 0, 0, 0]

const moveZeros = (arr) => {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === 0 && arr[i+1] > 0) {
      const firstIndexOfZero = arr.indexOf(0)
      arr[firstIndexOfZero] = arr[i+1]
      arr[i+1] = 0
    }
  }
  return arr
}

console.log(moveZeros([1, 2, 0, 1, 0, 0, 3, 6])) // [1, 2, 1, 3, 6, 0, 0, 0]
console.log(moveZeros([0, 0, 0, 3, 5, 0, 3, 6])) // [3, 5, 3, 6, 0, 0, 0, 0]
console.log(moveZeros([0, 1, 0, 2, 0, 3, 0, 4])) // [1, 2, 3, 4, 0, 0, 0, 0]
