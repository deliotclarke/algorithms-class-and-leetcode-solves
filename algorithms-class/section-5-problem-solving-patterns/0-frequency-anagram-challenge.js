/**
 *
 * Given two strings, write a function to determine if the second string is an anagram of the first.
 * An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
 * No periods, numbers, punctuation or spelling. All lowercase.
 *
 *
 * validAnagram('', '') // true
 * validAnagram('aaz', 'zza') // false
 * validAnagram('rat', 'car') // false
 * validAnagram('qwerty', 'qeyrwt') // true
 * validAnagram('awesome', 'awesom') // false
 */

function validAnagram(str1, str2) {
  // compare that they are the same length thus can have equal frequencies
  if (str1.length !== str2.length) return false;
  if (str1.length === 0 && str2.length === 0) return true;

  // declare objects/hashmaps
  let letterCounter1 = {};
  let letterCounter2 = {};

  // build objects
  for (let val in str1) {
    let letter = str1[val];
    letterCounter1[letter] = (letterCounter1[letter] || 0) + 1;
  }
  for (let val in str2) {
    let letter = str2[val];
    letterCounter2[letter] = (letterCounter2[letter] || 0) + 1;
  }

  // compare objects
  for (let key in letterCounter1) {
    // is each key in each object?
    if (!(key in letterCounter2)) {
      return false;
    }
    // does each key's value === the other's
    if (letterCounter1[key] !== letterCounter2[key]) {
      return false;
    }
  }
  // if false isn't returned, return true
  return true;
}

console.log(validAnagram('', ''));
console.log(validAnagram('aaz', 'zza'));
console.log(validAnagram('rat', 'car'));
console.log(validAnagram('qwerty', 'qeyrwt'));
console.log(validAnagram('iceman', 'cinema'));
console.log(validAnagram('texttwisttime', 'timetwisttext'));
console.log(validAnagram('bing', 'boing'));

function coltsFunction(str1, str2) {
  if (str1.length !== str2.length) return false;

  let lookup = {};

  for (let val in str1) {
    let letter = str1[val];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let val in str2) {
    let letter = str2[val];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}

console.log("colt's below");
console.log(coltsFunction('', ''));
console.log(coltsFunction('aaz', 'zza'));
console.log(coltsFunction('rat', 'car'));
console.log(coltsFunction('qwerty', 'qeyrwt'));
console.log(coltsFunction('iceman', 'cinema'));
console.log(coltsFunction('texttwisttime', 'timetwisttext'));
console.log(coltsFunction('bing', 'boing'));
