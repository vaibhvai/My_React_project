 //1] Reverse a String  && 2.Check if a String is a Palindrome 
const userInput = (str) => {
    const newArr = []
    for(let i = str.length -1; i>= 0; i--) {
    newArr.push(str[i])
    }
    return newArr.join('')
}
// console.log(userInput('vaibhavi'))

//2] Count the Occurrences of Each  and remove duplicate
const Occurence = (str) => {
    const frequnecy = {}
    const newStr = []
    for (let char of str) {
        frequnecy[char] = (frequnecy[char] || 0) + 1
    }
    //declare duplicate
    for(let key in frequnecy) {
       frequnecy[key] > 1 ? console.log(`${key} count : ${frequnecy[key]} is duplicate`) : console.log(`${key} is not duplicate`)
    }
    // remove duplicate
    for (let key in frequnecy) {
        if (frequnecy[key] > 1) {
            newStr.push(key)
        }
    }
    console.log(newStr)
    console.log(frequnecy)
}
// Occurence([10, 10, 20, 50, 10, 60])
// Occurence('vaibhavimore')

//3] Check if Two Strings are Anagrams 
const checkAnagrams = (str, str2) => {
  const x = str.split('').sort();
  const y = str2.split('').sort();
  if (x.length !== y.length) {
    console.log('not anagrams');
    return false;
  }
  for (let i = 0; i < x.length; i++) {
    if (x[i] !== y[i]) {
      console.log('not anagrams');
      return false; // breaks out immediately
    }
  }
  console.log('anagrams');
  return true;
}
// checkAnagrams('mars', 'smar'); // logs "anagrams" once

/// 4] check long long sentence
const longestWord = (str) => {
  const words = str.split(" ");
  let longest = "";
  for (const word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
};
const str = 'Just checking if there’s any update on scheduling my interviewwww'
//  console.log(longestWord(str))

 //5] find occurence in sentence (array)
 const occurenceSetntence = (str) => {
    const str2 = str.split(" ")
    const nrearr = []
    const frequnecy = {}
    for(let newchar of str2) {
        frequnecy[newchar] = (frequnecy[newchar] || 0) + 1
    }
   for(let count in frequnecy) {
    if(frequnecy[count] > 1)
        nrearr.push(count)
   }
   return nrearr
 }
const occurencestr  = 'Just checking if there’s  interviewwww any update on scheduling my interviewwww'
 //console.log(occurenceSetntence(occurencestr))

 //6] find factorial
 const findFactorial =(n) => {
    result = 1
    for (let i =1; i<=n; i++ ){
        result *= i
    }
    return result
 }
//  console.log(findFactorial(5))

//fibonacci
const fibonacci = (n) => {
    const fib = [0,1]
    if (n <= 1) return n
    for(let i =2; i<=n; i++) {
        fib[i] = fib[i-1] + fib[i-2]
    }
    return fib[n]
}
// console.log(fibonacci(8))

///asending
const AssendingOrder =(arr) => {
    for (let i =0; i<arr.length; i++) {
        for(let j = i+1; j<arr.length; j++) {
            if(arr[i] < arr[j]) {
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
      
        }
    }
          return arr
}
// console.log(AssendingOrder([16, 17, 18, 19, 20 ]))