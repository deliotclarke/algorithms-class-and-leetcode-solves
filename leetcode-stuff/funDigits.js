function funDigits(x) {
  let negative = false;
  if (Math.sign(x) === -1) {
    negative = true;
  }
  let digitCount = Math.floor(Math.log10(Math.abs(x))) + 1;
  let reverse = [];
  for (let i = 0; i < digitCount; i++) {
    let digit = Math.floor(Math.abs(x) / Math.pow(10, i)) % 10;
    reverse.push(digit);
  }
  if (negative) {
    console.log(parseInt(`-${reverse.join('')}`));
  } else {
    console.log(parseInt(reverse.join('')));
  }
}

funDigits(123);
funDigits(-342);
