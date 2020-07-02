// write a function to find the longest common prefix string amongst an array of strings.
// if there is no common prefix, return an empty string

function longest(strs) {
  if (strs.length === 0) return '';
  if (strs.length === 1) return strs[0];

  // put every string in the array into it's own array of separated letters
  // save the first array
  // match each array after that against it

  let commonLetters = [];
  let firstWordArr = strs[0].split('');
  let others = [];

  for (let i = 1; i < strs.length; i++) {
    others.push(strs[i].split(''));
  }

  others.forEach((wordArr) => {
    let letterCount = 0;

    for (let j = 0; j < wordArr.length; j++) {
      if (firstWordArr[j] === wordArr[j]) {
        letterCount++;
      } else {
        j = wordArr.length;
      }
    }

    commonLetters.push(letterCount);
  });

  return firstWordArr.slice(0, Math.min(...commonLetters)).join('');
}

console.log(longest(['aac', 'a', 'ccc']));
console.log(longest(['flower', 'flow', 'flight']));
