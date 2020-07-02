// write a function that removes all duplicate integers from a sorted array without creating a new array

function removeDupes(n) {
  let i = 0;

  while (i < n.length) {
    if (n[i] === n[i + 1]) {
      n.splice(i, 1);
    } else {
      i++;
    }
  }
  console.log(n);
  return n.length;
}

// i believe this can also be done with the two pointers method where you use the length of the original array to subtract from
// every time a duplicate is found

console.log(removeDupes([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
