// Given that an "even word" is a word in which each character appears an even number of times, write a function that takes in a string and returns the minimum number of letters to be removed to make that string an even word.

const evenWord = (str) => {
  const wordDict = {}

  for (let i = 0; i < str.length; i++) {
    wordDict[str[i]] = wordDict[str[i]]+1 || 1
  }

  const ans = Object.values(wordDict).filter((word) => word%2 !== 0)

  return ans.length
}


console.log(evenWord('aaaa')) // 0
console.log(evenWord('potato')) // 2 p,a
console.log(evenWord('aaaab')) // 1 b
console.log(evenWord('aaaaacc')) // 1 a
console.log(evenWord('potatoc')) // 3 p,a,c
