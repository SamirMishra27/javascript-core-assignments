## JavaScript basics - Assignment

### Questions 11 - 20
--------------------

11.  Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
    - 4 > 3
    - 4 >= 3
    - 4 < 3
    - 4 <= 3
    - 4 == 4
    - 4 === 4
    - 4 != 4
    - 4 !== 4
    - 4 != '4'
    - 4 == '4'
    - 4 === '4'
    - Find the length of python and jargon and make a falsy comparison statement.

- *Solution*

```js

console.log(4 > 3)
// My answer - true
// Output - true

console.log(4 >= 3)
// My answer - true
// Output - true

console.log(4 < 3)
// My answer - false
// Output - false

console.log(4 <= 3)
// My answer - false
// Output - false

console.log(4 == 4)
// My answer - true
// Output - true

console.log(4 === 4)
// My answer - true
// Output - true

console.log(4 != 4)
// My answer - false
// Output - false

console.log(4 !== 4)
// My answer - false
// Output - false

console.log(4 != '4')
// My answer - false
// Output - false

console.log(4 == '4')
// My answer - true
// Output - true

console.log(4 === '4')
// My answer - false
// Output - false

```

----------

12.  Use the Date object to do the following activities
    - What is the year today?
    - What is the month today as a number?
    - What is the date today?
    - What is the day today as a number?
    - What is the hours now?
    - What is the minutes now?
    - Find out the numbers of seconds elapsed from January 1, 1970 to now.

- *Solution*
```js

const myDate = new Date(2023, 0, 2, 1, 0, 0, 0);

console.log(myDate.getFullYear())   // Year
// Output - 2023

console.log(myDate.getMonth())   // Month today as a number
// Output - 0

console.log(myDate.getDate())   // Date today
// Output - 2

console.log(myDate.getDay())   // Day today as a number
// Output - 1

console.log(myDate.getHours())   // Hours now
// Output - 1

console.log(myDate.getMinutes())   // Minutes now
// Output - 0

console.log(Date.now())   // Seconds elapsed from epoch time
// Output - 1674586496502

```

----------

13.  Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

- *Solution*
```js

const inputBase = prompt("Enter the base of Triangle");
const inputHeight = prompt("Enter the height of Triangle");

const base = Number(inputBase);
const height = Number(inputHeight);

if (!base || !height) {
    alert("You've entered invalid input!");
}

else {
    const triangleArea = 0.5 * base * height;

    console.log(triangleArea);
    alert(`Area of the triangle is ${triangleArea}!!`);
};

```

----------

14.  Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

- *Solution*
```js

const slope = ( 10 - 2 ) / ( 6 - 2 );
console.log(slope)
// Output - 2

```

----------

15.  Calculate the slope, x-intercept and y-intercept of y = 2x -2

- *Solution*
```js



```

----------

16.  Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

- *Solution*

```js

const circleRadius = Number( prompt("Enter the radius of Circle in centimeter(s)") );

if (!circleRadius) {
    alert("Invalid input!")
}

else {
    const piValue = 3.14
    const circleArea = piValue * circleRadius ** 2;
    const circleCircumference = 2 * piValue * circleRadius;

    alert(`Area of circle is ${circleArea}cm2 and Circumference is ${circleCircumference}cm`);
    console.log(circleArea);
    console.log(circleCircumference);
};

```

----------

17.  Create a human readable time format using the Date time object
    - YYYY-MM-DD HH:mm
    - DD-MM-YYYY HH:mm
    - DD/MM/YYYY HH:mm

- *Solution*
```js


Date.prototype.stringFromTime = function (string) {

    output = string.replace("YYYY", this.getFullYear());
    output = output.replace("MM", this.getMonth() + 1);
    output = output.replace("DD", this.getDate());

    output = output.replace("HH", this.getHours());
    output = output.replace("mm", this.getMinutes());

    return output;
};

const date = new Date();
console.log(date.stringFromTime("YYYY-MM-DD HH:mm"));
// Output - 2023-1-25 1:17
console.log(date.stringFromTime("DD-MM-YYYY HH:mm"));
// Output - 25-1-2023 1:19
console.log(date.stringFromTime("DD/MM/YYYY HH:mm"));
// Output - 25/1/2023 1:19

```

----------

18.  Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

- *Solution*
```js

const usersAge = Number(prompt("Enter your age:"));

if (!usersAge) {
    alert("You've entered invalid input!");
}

else if (usersAge >= 18) {
    alert("You are old enough to drive");
}

else if (usersAge < 18) {
    const difference = 18 - usersAge;
    alert(`You cannot drive yet. You need to wait ${difference} year${difference !== 1 ? 's' : ''} more. :)`);
};

```

----------

19.  Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

- *Solution*
```js

// JavaScript has a Modulus operator '%' which returns the remainder 
// number that is left after dividing first number against the second
// Just like other arithmetic operators, it's syntax is as following
// <Number> % <Number>
// returns the remainder of division.
// Example
console.log(12 % 6);    // Output - 0
console.log(9 % 6);     // Output - 3

```

----------

20. Write a code which can give grades to students according to theirs scores:
    - 80-100, A
    - 70-89, B
    - 60-69, C
    - 50-59, D
    - 0-49, F

- *Solution*
```js

const studentMarks = Number(prompt("Enter the student's Score:"));

if (!studentMarks) {
    alert("Invalid score!");
}

else if (100 >= studentMarks && studentMarks >= 80) { alert("Student gets a A grade."); }
    
else if (89 >= studentMarks && studentMarks >= 70) { alert("Student gets a B grade."); }
    
else if (69 >= studentMarks && studentMarks >= 60) { alert("Student gets a C grade."); }
    
else if (59 >= studentMarks && studentMarks >= 50) { alert("Student gets a D grade."); }
    
else if (49 >= studentMarks && studentMarks >= 0) { alert("Student gets a E/F grade."); }
    
else {
    alert("Score must be between 0 - 100!");
};

```

----------