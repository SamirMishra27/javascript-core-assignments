## JavaScript basics - Assignment

### Questions 21 - 30
--------------------

21. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
    - September, October or November, the season is Autumn.
    - December, January or February, the season is Winter.
    - March, April or May, the season is Spring
    - June, July or August, the season is Summer

- *Solution:*
```js

const month = prompt("Enter the month:").toLowerCase();

switch(month) {
    case "september":
    case "october":
    case "november":
        alert(`The month is ${month.toUpperCase()} and the Season is AUTUMN! 🍂🍁`);
        break;

    case "december":
    case "january":
    case "february": 
        alert(`The month is ${month.toUpperCase()} and the Season is WINTER! ⛄❄️`);
        break;
    
    case "march":
    case "april":
    case "may": 
        alert(`The month is ${month.toUpperCase()} and the Season is SPRING! 🌳🍃`);
        break;
    
    case "june":
    case "july":
    case "august": 
        alert(`The month is ${month.toUpperCase()} and the Season is SUMMER! 🍦🍧`);
        break;

    default:
        alert("Invalid input!");
        break;
}

```

----------

22. Write a program which tells the number of days in a month.

- *Solution:*
```js

const month = prompt("Enter the month:").toLowerCase();

switch(month) {
    case "january":
    case "march":
    case "may":
    case "july":
    case "august":
    case "october":
    case "december":
        alert(`${month.toUpperCase()} month has 31 Days.`);
        break;

    case "april":
    case "june":
    case "september":
    case "november":
        alert(`${month.toUpperCase()} month has 30 Days.`);
        break;
    
    case "february":
        alert(`${month.toUpperCase()} month has 28 Days.`);
        break;

    default:
        alert("Invalid input!");
};

```

----------

23. Write a program which tells the number of days in a month, now consider leap year.

- *Solution:*
```js

const month = prompt("Enter the month:").toLowerCase();

switch(month) {
    case "january":
    case "march":
    case "may":
    case "july":
    case "august":
    case "october":
    case "december":
        alert(`${month.toUpperCase()} month has 31 Days.`);
        break;

    case "april":
    case "june":
    case "september":
    case "november":
        alert(`${month.toUpperCase()} month has 30 Days.`);
        break;
    
    case "february":
        alert(`${month.toUpperCase()} month has 29 Days.`);
        break;

    default:
        alert("Invalid input!");
};

```



24. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file

- *Solution: in `./solution24/main.js`*
```js

// Solution in ./solution24/main.js

```

----------

25. In the following shopping cart add, remove, edit items
    => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
    - add 'Meat' in the beginning of your shopping cart if it has not been already added
    - add Sugar at the end of you shopping cart if it has not been already added
    - remove 'Honey' if you are allergic to honey
    - modify Tea to 'Green Tea'

- *Solution:*
```js

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

// Add Meat
if (!shoppingCart.includes("Meat")) {

    console.log("Adding meat to the cart");

    shoppingCart.push("Meat");

    console.log(shoppingCart);
};

// Add Sugar
if (!shoppingCart.includes("Sugar")) {
    console.log("Adding sugar to the cart");

    shoppingCart.push("Sugar");

    console.log(shoppingCart);
}

// Remove Honey
console.log("Removing honey");

let shoppingCartNew = shoppingCart.filter(item => { return !(item === "Honey") });
console.log(shoppingCartNew);

// Modifying Tea to Green Tea
console.log("Modifying tea")

const index = shoppingCartNew.indexOf("Tea");
if (Boolean(index)) {
    shoppingCartNew[index] = "Green Tea";
}
console.log(shoppingCartNew);

```

----------

26. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

- *Solution:*
```js

if (countriesArray.includes("Ethiopia")) {
    console.log("ETHIOPIA");
} else {
    console.log("Ethiopia is not in the list, adding it...");
    countriesArray.push("Ethiopia");
};

// As per the code in Solution 24
// Output - "Ethiopia is not in the list, adding it..."
// Output - ["India" ...... "Nepal", "Bhutan", "Ethiopia"]

```

----------

27. The following is an array of 10 students ages:
    => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
    - Sort the array and find the min and max age
    - Find the median age(one middle item or two middle items divided by two)
    - Find the average age(all items divided by number of items)
    - Find the range of the ages(max minus min)
    - Compare the value of (min - average) and (max - average), use abs() method

- *Solution:*

```js

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// Sort the array in ascending
ages.sort( (a, b) => {return a - b } );
console.log(ages)
/* [
  19, 19, 20, 22, 24,
  24, 24, 25, 25, 26
] */

// Min & Max value
const minAge = Math.min(...ages);
const maxAge = Math.max(...ages);
console.log(minAge, maxAge);    // Output - 19 26

// Median age
let medianAge = undefined;
if (ages.length % 2 === 0) {

    const length = ages.length / 2;
    const [num1, num2] = [length - 1, length];
    medianAge = ( ages[num1] + ages[num2] ) / 2;
    console.log(medianAge);
    // Output - 24

} else {

    const length = Math.floor(ages.length);
    medianAge = ages[length];
    console.log(medianAge);
    // Output - undefined
};

// Average age
const agesTotal = ages.reduce((x, y) => x + y);
const averageAge = agesTotal / ages.length;

console.log(agesTotal);
console.log(averageAge);
// Output - 228
// Output - 22.8

// Range of age
const ageRange = maxAge - minAge;
console.log(ageRange);
// Output - 7

// Compare the value of (min - average) and (max - average), use abs() method
console.log(Math.abs(minAge - averageAge))
console.log(Math.abs(maxAge - averageAge))
console.log( Math.abs( (minAge - averageAge) - (maxAge - averageAge)) );
// Output - 3.8000000000000007 
// Output - 3.1999999999999993 
// Output - 7

```

----------

28. Use for loop to iterate from 0 to 100 and print only prime numbers

- *Solution:*
```js

let primeNumbers = [];

for (i = 1; i <= 100; i++) {
    if (i == 0 || i == 1) continue
    
    let isPrime = true;
    for (j = 2; j < i; j++) {
        if ( i % j === 0 ) 
            isPrime = false;
        else continue
    }
    
    if (isPrime) primeNumbers.push(i);
};
console.log(primeNumbers);

```

----------

29. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

- *Solution:*
```js

let oddNumberSum = 0;
let evenNumberSum = 0;

for (i = 0; i <= 100; i++) {
    if (i % 2 === 0) evenNumberSum += i;
    else oddNumberSum += i;
};
console.log(oddNumberSum);
// Output - 2500
console.log(evenNumberSum);
// Output = 2550

```

----------

30. Write a script which generates a random hexadecimal number.

- *Solution:*
```js

const digits = 1; //10
const hexadecimalList = "0123456789abcdef";

let hexadecimal = "";
for (i = 0; i < digits; i++) {
    const randomIndex = Math.floor( Math.random() * 16 );
    hexadecimal += hexadecimalList[randomIndex];
};
console.log(hexadecimal)
// Random Output

```