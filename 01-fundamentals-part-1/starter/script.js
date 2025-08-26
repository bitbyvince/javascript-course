// // JavaScript Fundamentals - Part 1
// // We'll write our code here!

// let js = "amazing";
// console.log(40 + 8 + 23 - 10);
// console.log(js);
 
 
// console.log("=== VARIABLES ===");
 
// let firstName ="Jonas";
// console.log(firstName);
 
// let age = 30;
// console.log(age);
// age = 50;
// console.log(age);
 
// const birthYear = 1991;
// console.log(birthYear);
 
// const PI = 3.1415;
// console.log(PI);
 
// var job = "programmer";
// job = "teacher";
// console.log(job);
 
// const country = "Philippines";
// const language = "Filipino";
 
// age = 25;
// age = 26;

// // good variable name
// // let firstName
// // let myCurrentJob
// // const PI
 
// // bad name
// // let 3years
// // let jonas&matilda
// // let now
 
// console.log("=== DATA TYPES ===");
 
// // Number
// let id = 12345;
// console.log(id);
// console.log(typeof id);
 
// // String
// let lastName = "Doe";
// console.log(lastName);
// console.log(typeof lastName);

// let dynamicVariable = 40;
// console.log(dynamicVariable, typeof dynamicVariable)
 
// // change to a String
// dynamicVariable = "I am now a string!";
// console.log(dynamicVariable, typeof dynamicVariable)
 
// //change to a Boolean
// dynamicVariable = true;
// console.log(dynamicVariable, typeof dynamicVariable)

// // Basic Operators - Math
// console.log("=== MATH OPERATORS ===");
 
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);
 
// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
 
// console.log("Math Operations");
// console.log("Addition:", 10 +5 );
// console.log("Subraction:", 20 - 8);
// console.log("Multiplication:", 4 * 7);
// console.log("Division:", 15 / 3);
// console.log("Exponentiation:", 2 ** 3);
 
// // Math with strings!
// const firstName = "Jonas";
// const lastName = "Doe";
// console.log(firstName + " " + lastName);
 
// console.log("Hello " + "World" + "!");
 
// // Assignment operators
// console.log("=== ASSIGNMENT OPERATORS ===");
 
// let x = 10 + 5;
// console.log("x starts as:", x);
 
// x += 10;
// console.log("x starts as:", x);
 
// x *= 4;
// console.log("x starts as:", x);
 
// x /= 2;
// console.log("x starts as:", x);
 
// x ++;
// console.log("x starts as:", x);
 
// x --;
// console.log("x starts as:", x);

// // Comparison operators
// console.log("=== COMPARISON OPERATORS ===");
 
// console.log("Age Comparison: ");
// console.log(ageJonas > ageSarah);
// console.log(ageSarah >= 18);
// console.log(ageJonas < 30);
 
// console.log("Number comparison");
// console.log(25 > 20);
// console.log(15 < 20);
// console.log(18 >= 18);
// console.log(16 <= 15);
 
// const isFullAge = ageSarah >= 18;
// console.log("Sarah is an adult:", isFullAge);
 
// console.log("Complex comparison");
// console.log(now - 1991 > now - 2018);

// let z, y;
// z = y = 25 - 10 - 5;
// console.log(z, y);
 
// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);

// ////////////////////////////////////
// // Coding Challenge #1 - BMI Calculator
 
// // Test Data 1
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;
 
// // Your code here:
// // 1. Calculate BMIs
// // 2. Create markHigherBMI variable
// // 3. Log results to console
// // log marks bmi
// // log john bmi
// // log markHigherBMI
 
// const markBMI = massMark / (heightMark * heightMark);
// console.log("Mark BMI: ", markBMI);
 
// const johnBMI = massJohn / heightJohn ** 2;
// console.log("John BMI: ", johnBMI);
 
// var markHigherBMI = markBMI > johnBMI;
 
// console.log("is Mark BMI higher: ", markHigherBMI);

// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;
 
// const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
// console.log(jonas);
 
// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jonasNew);
 
// console.log(`I'm ${2037 - 1991} years old`);
// console.log(`Math works: ${2 + 3} equals five`);
 
// // if else statement
// const age = 10;
 
// if (age >= 18) {
//     console.log("Sarah can start a driving license");
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`)
// }
 
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Jonas"));
// console.log(Boolean({}));
// console.log(Boolean(""));
 
// ////////////////////////////////////
// // Coding Challenge #2
 
// // Reuse your BMI calculation from Challenge #1
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;
 
// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);
 
// // Your if/else statement here:
// // Compare BMIs and create intelligent messages
// // Use template literals for beautiful output
 
// if (BMIMark >= BMIJohn) {
//     console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
// } else {
//     console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
// }

// Type Conversion and Coercion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);
console.log(typeof String(23));

// Automatic Type Coercion
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" / "2");
console.log("23" * "2");

let n = "1" + 1;
console.log(n);

n = n - 1;
console.log(n);

// type convertion = explicit/manual (recommend)
// type coercion = implicit/automatic (javascript does itself)

// Equality - Strict

const age = '18';
if (age === 18) console.log('You just became an adult (strict)');
if (age == 18) console.log('You just became an adult :D (loose)');

console.log('18' === 18);
console.log('18' == 18);
console.log(18 === 18);

// why == can be dangerous
console.log('0' == 18);
console.log(0 == false);
console.log('0' == false);
console.log(null == undefined); //special case

console.log('' == 0);
console.log('   ' == 0);

// best practice
//const favorite = Number(prompt("What's your favorite number?"));
// console.log(favorite);
// console.log(typeof favorite);

// if (favorite === 23) {
//     console.log('Cool! 23 is an amazing number!');
// } else if (favorite === 7) {
//     console.log('7 is also a cool number');
// } else if (favorite === 9) {
//     console.log('9 is also a cool number');
// } else {
//     console.log('Number is not 23 or 7 or 9');
// }

// if (favorite !== 23) console.log('Why not 23?');

// Logical Operators

const hasDriversLicense = false; // A
const hasGoodVision = false; // B

console.log('AND OPERATOR: ${hasDriversLicense && hasGoodVision}');
console.log('OR OPERATOR: ${hasDriversLicense || hasGoodVision}');
console.log('NOT OPERATOR: ${!hasDriversLicense}');

const isTired = true; // C
console.log(hasDriversLicense && hasGoodVision && !isTired);
