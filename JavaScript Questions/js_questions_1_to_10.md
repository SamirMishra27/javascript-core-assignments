## JavaScript basics - Assignment

### Questions 1 - 10
--------------------

1. Create a variable.js file and declare variables and assign string, boolean, undefined and null data types, Display all the value with there type.
- *Solution:*
```js

var stringValue = "This is a string!";
var booleanValue = true;
var undefinedValue = undefined;
var nullValue = null;
var nanValue = NaN;
var arrayValue = [];

console.log(stringValue);
// Output - 'string'
console.log(booleanValue);
// Output - 'boolean'
console.log(undefinedValue);
// Output - 'undefined'
console.log(nullValue);
// Output - 'object'
console.log(nanValue);
// Output - 'number'
console.log(arrayValue);
// Output - 'object'

```

----------

1. Declare variables to store your first name, last name, marital status, country and age and display them using interploation method.
- *Solution:*
```js

const firstName = "Samir";
const lastName = "Mishra";
const maritalStatus = "Single";
const country = "India";
const age = 22;

// Displaying this using string interpolation
console.log(`Name: ${firstName} ${lastName} \nMarital status: ${maritalStatus} \nAge: ${age} \nCountry: ${country}`);

```

----------

3. Decalre a varibale and assign value to it and change all the string characters to capital letters using toUpperCase() method.
- *Solution:*
```js

const stringValue = "this used to be a lower case string.";
const stringValueUpper = stringValue.toUpperCase();
console.log(stringValueUpper);

```

----------

4. Check if the string contains a word Script using includes() method.
- *Solution:*
```js

const stringValue = "this used to be a lower case string.";
console.log(stringValue.includes('script'));
// Output - false

```

----------

5. Split the string into an array using split() method
- *Solution:*
```js

const stringValue = "this used to be a lower case string.";
const splitString = stringValue.split(" ");     // Split by ' ' character space.
console.log(splitString);
// Output - [
//   'this', 'used',
//   'to',   'be',
//   'a',    'lower',
//   'case', 'string.'
// ]

```

----------

6. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
- *Solution:*
```js

const bigTechCompanies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
const companiesList = bigTechCompanies.split(", ");
console.log(companiesList);
// Output - [ 'Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon' ]

```

----------

7. Use lastIndexOf to determine the position of the last occurrence of a script.
- *Solution:*
```js

const fruits = "Apple Banana Apple Banana Orange Pineapple Kiwi Banana";
console.log(fruits.lastIndexOf("Banana"));
// Output - 48

```

----------

8. Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'.
- *Solution:*
```js

const englishFact = 'You cannot end a sentence with because because because is a conjunction';
console.log(englishFact.search("because"));
// Supports regex as well
// Output = 31

```

----------

9. Use trim() to remove any trailing whitespace at the beginning and the end of a string.
- *Solution:*
```js

const message = "       ||   This is a spoiler    ||          ";
const trimmedMessage = message.trim();
console.log(trimmedMessage);
// Output = ||   This is a spoiler    ||

```

----------

10. Boolean value is either true or false.
    - Write three JavaScript statement which provide truthy value.
    - Write three JavaScript statement which provide falsy value.

- *Solution:*
```js

const batsmanScore = 51;
const opponentScore = 23;
const wickets = 0;

// Truthy values
console.log(batsmanScore > opponentScore);
// Output - true
console.log(batsmanScore > 50);
// Output - true
console.log(opponentScore < batsmanScore);
// Output - true

// Falsy values
console.log(Boolean(wickets));
// Output - false
console.log(opponentScore >= batsmanScore);
// Output - false
console.log(batsmanScore === opponentScore === wickets);
// Output - false

```

----------
