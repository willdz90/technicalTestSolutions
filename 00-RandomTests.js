//  1. Persistance of numbers
let counter = 0;

function persistence(num) {
  //code me
  let arrNum = num.toString().split("");
  let result = 0;

  if (arrNum.length === 1) {
    return 0;
  }

  if (arrNum.length > 1) {
    result = arrNum.reduce((prev, actual) => {
      return prev * actual;
    }, 1);
    counter++;
    if (result.toString().length !== 1) persistence(result);
    else return 0;
  }

  return counter;
}
// console.log('object :>> ', persistence(7313350));

//  2. order String words "is2 Thi1s T4est 3a"
let string = "4of Fo1r pe6ople g3ood th5e the2";

function order(words) {
  let arrWords = words.split(" ");
  let newString = "";
  let newObjString = {};

  arrWords.forEach((str) => {
    let numberStr = 0;
    for (let i = 0; i < str.length; i++) {
      numberStr = !isNaN(str[i]) ? str[i] : null;
      if (numberStr) {
        newObjString[numberStr] = str;
      }
    }
  });

  newString = Object.values(newObjString).join(" ");
  return newString;
}
// console.log('order(string) :>> ', order(string));

/*
3. This time no story, no theory. The examples below show you how to write 
function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
*/

function accum(str) {
  let newStr = [];

  for (let i = 0; i < str.length; i++) {
    let word = str[i].toUpperCase() + str[i].repeat(i).toLowerCase();
    newStr.push(word);
  }

  return newStr.join("-");
}

// console.log('accum() :>> ', accum("ZpglA"));

/*
You are going to be given a word. Your job is to return the middle character 
of the word. If the word's length is odd, return the middle character. 
If the word's length is even, return the middle 2 characters.

#Examples:
Kata.getMiddle("test") should return "es"
Kata.getMiddle("testing") should return "t"
Kata.getMiddle("middle") should return "dd"
Kata.getMiddle("A") should return "A"
*/

function getMiddle(s) {
  //Code goes here!
  let strLength = s.length % 2;
  if (!strLength) {
    return s.slice(s.length / 2 - 1, s.length / 2 + 1);
  }

  return s.charAt(s.length / 2);
}

// console.log(getMiddle("A"))
// return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);

/*
Write a function that takes in a string of one or more words, and returns 
the same string, but with all five or more letter words reversed (Just like 
the name of this Kata). Strings passed in will consist of only letters 
and spaces. Spaces will be included only when more than one word is present.

Examples:

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test"
*/

function spinWords(string){
  //TODO Have fun :)
  let newString = [];
  string.split(" ").map( (word) => {
    if(word.length >= 5){
      newString.push(word.split("").reverse().join(""))
    }else{
      newString.push(word)
    }
  })
  return newString.join(" ");
}

// console.log('object :>> ', (spinWords("This is a test")))

/*
You probably know the "like" system from Facebook and other pages. People can 
"like" blog posts, pictures or other items. We want to create the text that 
should be displayed next to such an item.

Implement the function which takes an array containing the names of people 
that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
*/

function likes(names) {
  // TODO
  if(names.length === 0) return `no one likes this`
  if(names.length > 0){
    let string = names.join(", ");
    let indexLastComma = string.lastIndexOf(", ");
    let firstPart = string.slice(0, indexLastComma);
    let secondPart = string.slice(indexLastComma, string.length).replace(", ", " and ");    
    return firstPart + secondPart + " likes this"
  }
}

// console.log(likes(["Alex"]))


/**
The Grouping Anagrams Problem Given an array of strings, write a function 
that returns an array with all anagrams next to each other. Two words are 
considered anagrams if the second word can be created by rearranging the 
letters of the first word (eg. "cat’ and "act’ are considered anagrams, 
  "taco’ and "cat’ are not).

Example:
groupAnagrams(["meal", "orange", "lame") → ["meal", "lame", "orange"])

Example:
groupAnagrams(["cat", "ton", "act", "tac", "not"]) → ["cat", "act", "tac", 
  "not", "ton"])

 */

let array = ["cat", "ton", "taco", "act", "tac", "not", "cota", "casa", "acto", "act"]

function anagram(arr){
  
  let newArr = [];
  let sortedObj = {}

  arr.sort((a, b) => a.length - b.length)

  arr.forEach(word => {
    let sortedWord = word.split("").sort().join("");
    if(sortedObj[sortedWord] && sortedObj[sortedWord].length > 0){
      sortedObj[sortedWord] = [...sortedObj[sortedWord], word];
    }
    else sortedObj[sortedWord] = [word];
  })
  
  for( word in sortedObj ){
    newArr = [...newArr, sortedObj[word]]
  }

  return newArr.flat();
}

// console.log('array :>> ', anagram(array));

/**
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
 */

function arrayDiff(a, b) {
  return a.filter(e => !b.includes(e));
}



console.log(arrayDiff([1,2,2,3,3],[ 1 ]))