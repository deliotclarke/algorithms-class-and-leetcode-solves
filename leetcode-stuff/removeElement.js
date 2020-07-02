// given an array and an integer, remove all occurences of the integer in-place and return the length of the array

function removeElement(n, val) {
  let i = 0;

  while (i < n.length) {
    if (n[i] === val) {
      n.splice(i, 1);
    } else {
      i++;
    }
  }
  return n.length;
}

console.log(removeElement([3, 2, 2, 3], 3));
