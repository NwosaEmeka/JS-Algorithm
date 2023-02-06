// Given an array of numbers, return a unique array with no deplicate number

const removeDuplicates = (arr) => {
  // indexOf matches only the first element, so if the index does not match the index of, then that element is a duplicate
  return arr.filter((val, index, arr2) => arr2.indexOf(value) === index)
}

console.log([[1,2,5,2,6,6,7,3,1]]) // [ 1, 2, 5, 6, 7, 3 ]
