//Given an integer x, return true if x is a palindrome, and false otherwise
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

const isPalindromNumber = (num) => {
// Every non positive integer is always false
  if (num < 0) {
    retrun false
  };
  const originalNum = num;
  let reversedNum = 0;
  
  while(num > 0) {
    lastDigit = num % 10;
    reversedNum = (reversedNum * 10) + lastDigit;
    num = Math.floor(num/10);
  }
  
  return reversedNum === originalNum;
}

console.log(isPalindromNumber(121)) // true
console.log(isPalindromNumber(-121)) // false
console.log(isPalindromNumber(10)) // false

//  explanation of how reverse number works
//  num = 121
//  reversedNum = 0
//  lastdigit = 121 % 10 = 1
//  reversedNum = 0 * 10 + 1 = 1
//  num = 121/10 = 12 (floor)
//  -------------------------
//  num = 12
//  reversedNum = 1
//  lastDigit = 12 % 10 = 2
//  reversedNum = 1 * 10 + 2 = 12
//  num = 12/10 = 1 (floor)
//  --------------------------
// num = 1
// reversedNum = 12
// lastDigit = 1 % 10 = 1
// reversedNum = 12 * 10 + 1 = 121
// num = 1/10 = 0
   
