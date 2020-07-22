### Instance Methods

Methods that provide functionality to a single instance of the class.

Example: Array.push()

```javascript
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.tardies = 0;
    this.scores = [];
  }
  fullname() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }
  markLate() {
    this.tardies += 1;
    if (this.tardies >= 3) {
      return 'YOU ARE EXPELLED!!';
    }
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
  }
  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }
  calculateAvg() {
    let sum = this.scores.reduce(function (a, b) {
      return a + b;
    });
    return sum / this.scores.length;
  }
}

let firstStudent = new Student('Itme', 'Clarke');

firstStudent.fullName(); // would return the string with the first and last name entered.

firstStudent.markLate(); // would return the string plus "1 times"
firstStudent.markLate(); // would return the string plus "2 times"
```
