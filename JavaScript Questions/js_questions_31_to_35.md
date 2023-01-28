## JavaScript basics - Assignment

### Questions 31 - 35
--------------------

31. Sort the webTechs array and mernStack array
// countries Array : https://gist.github.com/incredimike/1469814

- *Solution:*
```js

const webTechs = ["CSS", "React", "JavaScript", "HTML"];
const mernStack = ["MongoDB", "JavaScript", "React", "Node"];

webTechs.sort();
// Output - ["CSS", "HTML", "JavaScript", "React"]
mernStack.sort();
// Output - ["JavaScript", "MongoDB", "Node", "React"]

```

----------

32. Array Questions
    - Extract all the countries contain the word 'land' from the countries array and print it as array
    - Find the country containing the hightest number of characters in the countries array
    - Extract all the countries contain the word 'land' from the countries array and print it as array
    - Extract all the countries containing only four characters from the countries array and print it as array
    - Extract all the countries containing two or more words from the countries array and print it as array
    - Reverse the countries array and capitalize each country and stored it as an array

- *Solution:*
```js


// - Extract all the countries contain the word 'land' from the countries array and print it as array
console.log(
    countryList.filter(country => country.toLowerCase().includes('land'))
);
// Output ---
/*
[
  'Bouvet Island',
  'Cayman Islands (the)',
  'Christmas Island',
  'Cocos (Keeling) Islands (the)',
  'Cook Islands (the)',
  'Falkland Islands (the) [Malvinas]',
  'Faroe Islands (the)',
  'Finland',
  'Greenland',
  'Heard Island and McDonald Islands',
  'Iceland',
  'Ireland',
  'Marshall Islands (the)',
  'Netherlands (the)',
  'New Zealand',
  'Norfolk Island',
  'Northern Mariana Islands (the)',
  'Poland',
  'Solomon Islands',
  'South Georgia and the South Sandwich Islands',
  'Switzerland',
  'Thailand',
  'Turks and Caicos Islands (the)',
  'United Kingdom of Great Britain and Northern Ireland (the)',
  'United States Minor Outlying Islands (the)',
  'Virgin Islands (British)',
  'Virgin Islands (U.S.)',
  'Åland Islands'
]
*/


// - Find the country containing the hightest number of characters in the countries array
let lengthiestCountryName = "";
for (country of countryList) {
    if (country.length >= lengthiestCountryName.length)
        lengthiestCountryName = country;
};
console.log(lengthiestCountryName);
// Output - United Kingdom of Great Britain and Northern Ireland (the)


// - Extract all the countries containing only four characters from the countries array and print it as array
console.log(
    countryList.filter(country => country.length === 4)
);
// Output - [
//   'Chad', 'Cuba',
//   'Fiji', 'Guam',
//   'Iraq', 'Mali',
//   'Niue', 'Oman',
//   'Peru', 'Togo'
// ]


// - Extract all the countries containing two or more words from the countries array and print it as array
console.log(
    // countryList.filter(country => country.length >= 2)
);
// Output - ...


// - Reverse the countries array and capitalize each country and stored it as an array
const countriesListReversed = countryList.reverse();
const countriesCapitalized = countryList.map(country => country[0].toUpperCase() + country.slice(1).toLowerCase());
console.log(countriesCapitalized)
// Output - ...


```

----------

33.  Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
    - The same groups apply to both men and women.
    - Underweight: BMI is less than 18.5
    - Normal weight: BMI is 18.5 to 24.9
    - Overweight: BMI is 25 to 29.9
    - Obese: BMI is 30 or more

- *Solution:*
```js

function calculateBMI(weight, height) {
    return weight / height ** 2;
};

const userWeight = Number(prompt("Enter your weight in KG:"));
const userHeight = Number(prompt("Enter your height in Meters (M):"));

if (!userHeight || !userWeight) alert("Invalid inputs given!");

const BMI = Math.round( calculateBMI(userWeight, userHeight) * 100 ) / 100;

let message = "";
if (BMI >= 30) {
    message = `Your BMI is ${BMI} and you are categorized as OBESE!`;
} 
else if (25 <= BMI && BMI <= 29.9) {
    message = `Your BMI is ${BMI} and you are categorized as Overweight!`;
}
else if (18.5 <= BMI && BMI <= 24.9) {
    message = `Your BMI is ${BMI} and you are categorized as Normal Weight. 👍👍`;
}
else if (BMI <= 18.4) {
    message = `Your BMI is ${BMI} and you are categorized as Underweight.`;
}
else {
    message = "Something went wrong.";
}
alert(message);

```

----------

34. Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.

- *Solution:*
```js



```

----------

35. Write a functions which checks if all items are unique in the array.

- *Solution:*
```js

// Compare the length of the original array against it's
// 'Set' counterpart, if it's the same then all elements
// in that original array are unique, else it's not

const list1 = [1,2,3,4,5,6];
console.log(list1.length === new Set(list1).size);  // Output - true

const list2 = [1,1,2,2,3,3,4,4,5,5,6,6];
console.log(list2.length === new Set(list2).size);  // Output - false

```