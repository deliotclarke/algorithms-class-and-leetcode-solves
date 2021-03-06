/**
 * Write a function called areThereDuplicates which accepts a variable number of arguments, and checks
 * whether there are any duplicates amon the arguments passed in.
 *
 * areThereDuplicates(1,2,3) // false
 * (1,2,2) // true
 * ('a', 'b', 'c', 'a') // true
 */

function areThereDuplicates(...args) {
  let hashMap = {};

  args.forEach((arg) => (hashMap[arg] = (hashMap[arg] || 0) + 1));

  for (let val in hashMap) {
    if (hashMap[val] > 1) {
      return true;
    }
  }
  return false;
}

// cool little solve with sets
function areThereDuplicates2(...args) {
  return args.length > new Set(args).size ? true : false;
}

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates('a', 'b', 'c', 'a'));
console.log(areThereDuplicates('a', 'b', 'c'));

console.log(areThereDuplicates2(1, 2, 3));
console.log(areThereDuplicates2(1, 2, 2));
console.log(areThereDuplicates2('a', 'b', 'c', 'a'));
console.log(areThereDuplicates2('a', 'b', 'c'));

// nailed it. first try tuesday.
