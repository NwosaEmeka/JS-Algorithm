// You are given a list of positive integers which represents some range of integers which has been truncated. Find the missing bits, insert ellipses to show that that part has been truncated, and print it. If the consecutive values differ by exactly two, then insert the missing value.

const missingBits = (arr) => {
  let arr2 = []
  for (let i = 0; i <arr.length; i++){
    arr2.push(arr[i])
    if(arr[i+1] - arr[i] === 2) {
      arr2.push(arr[i]+1)
    }
    else if (arr[i+1] - arr[i] > 2) {
      arr2.push('...')
    }
  }
  return arr2
}

console.log(missingBits([1,3,20,27])) // [1,2,3,...,20,...27]
console.log(missingBits([1,2,3,4,20,21,22,23])) // [1,2,3,4,...,20,21,21,23]
console.log(missingBits([1,2,3,5,6])) // [1,2,3,4,5,6]
