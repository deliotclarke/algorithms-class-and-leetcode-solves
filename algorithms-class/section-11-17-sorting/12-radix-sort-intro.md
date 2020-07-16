### Radix Sort

The best case for any of the sorts so far is O(n log n)

There is a better way, in certain cases...

ENTER RADIX SORT

Radix sort is a special sorting algorithm that works on lists of numbers (and only numbers).

It never makes comparisons between the elements.

It exploits the fact that information about the size of the number is encoded in the NUMBER of digits.

More digits means a bigger number!

Process:

- We start by sorting them by the last number, 0 - 9.
- Next we sort them by their second to last digit.
- Then the third digit
- Up to the longest number
- You are reforming the list each time you check the numbers

You need helper functions to check each of these digits.
