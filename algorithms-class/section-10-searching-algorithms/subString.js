function subString(long, short) {
  let matchCounter = 0;
  // loop over longer string
  for (let i = 0; i < long.length; i++) {
    // loop over longer string
    let nIndex = i;
    for (let j = 0; j < short.length; j++) {
      if (long[nIndex] !== short[j]) {
        j = short.length;
      } else if (long[nIndex] === short[j]) {
        if (j === short.length - 1) {
          matchCounter++;
        }
        nIndex++;
      }
    }
  }
  return matchCounter;
}

console.log(subString('wowomgzomg', 'omg'));
console.log(subString('harold said haha one time harold', 'haha'));
