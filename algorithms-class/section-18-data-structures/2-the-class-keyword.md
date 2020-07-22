### Declaring Classes

The Syntax:

```javascript
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

// instantiating from the class

let firstStudent = new Student('Colt', 'Steele');
let secondStudent = new Student('Eliot', 'Clarke');

secondStudent.firstName; // Eliot

secondStudent.firstName = 'Todd'; // now it equals Todd
```

The method to create new objects MUST be called constructor

The class keyword creates a constat, so you can not redefine it. Watch out for the syntax as well!

_we know this, but it's always good to review._
