### Adding Class Methods

Class method uses the STATIC keyword, in front of the method

Static methods are called without instantiating a class and cannot be called through a class instance.
Static methods are often used to create utility functions for an application.

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

  static EnrollStudents(...students) {
    // maybe send an email here
  }
}

let firstStudent = new Student('Colt', 'Steele');
let secondStudent = new Student('Eliot', 'Clarke');

Student.enrollStudents([firstStudent, secondStudent]);
```

Not specific to the instance of a student, rather a method available to the Class.

We will almost never use static methods in this course.
