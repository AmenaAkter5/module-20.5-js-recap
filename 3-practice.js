// ==============================================
//               Previous Module Recap
// ===============================================


// Inches to feet

// normal

var myInches = 132;
var feet = myInches / 12;
console.log(feet);


// function

function inchesToFeet(inches) {
    var feet = inches / 12;
    return feet;
}

// Input

var Input = 144;

var getFeet = inchesToFeet(Input);
console.log('my iches to feet:', getFeet);








// Leap-Year

function checkLeapYear(year) {
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        return true;
    }
    return false;
}

// input

var myLeapYear = checkLeapYear(2022);
console.log('Is my Year Leap year:', myLeapYear);

// outpu

// Is my Year Leap year: false




// odd-even

// check even

function checkEven(number) {
    if (number % 2 == 0) {
        return true;
    }
    return false;
}

// input

var isEven = checkEven(25);
console.log('This is even:', isEven);

// output: This is even: false



// check odd

function checkOdd(number) {
    if (number % 2 == 1) {
        return true
    }
    return false;
}

// input

var isOdd = checkOdd(877);
console.log('This is odd Number:', isOdd);

// output- This is odd Number: true






// factorial


// Regular system

// for loop

var factorial = 1;

for (var i = 1; i <= 5; i++) {
    factorial = factorial * i;
}

console.log(factorial);

// output- 120


// while loop

var factorial = 1;
var i = 1;

while (i <= 5) {
    factorial = factorial * i;
    i++;
}

console.log(factorial);



// function

// for loop

function getFactorial(number) {
    var factorial = 1;
    for (var i = 1; i <= number; i++) {
        factorial = factorial * i;
    }
    return factorial;
}

// Input

var myFactorial = getFactorial(5);
console.log(myFactorial);


// while loop

function getFactorial2(num) {
    var factorial = 1;
    var i = 1;
    while (i <= num) {
        factorial = factorial * i;
        i++;
    }
    return factorial;
}

// Input

var getMyFactorial = getFactorial2(7);
console.log(getMyFactorial);









// =====================================
//              New Practice
// ======================================


// 1.

// Celsius to Fahrenheit

// Formula: (0°C × 9 / 5) + 32 = 32°F

function getFahrenheit(celsius) {
    var fahrenheit = 32;
    fahrenheit = (celsius * 9 / 5) + fahrenheit;
    return fahrenheit;
}

var myFahrenheit = getFahrenheit(2);
console.log('my Fahrenheit:', myFahrenheit);




// 2.

// Reverse - Fahrenheit to Celsius

// Formula: (32°F − 32) × 5/9 = 0°C


function getCelsius(fahrenheit) {
    var celsius = 32;
    celsius = (fahrenheit - celsius) * 5 / 9;
    return celsius;
}

var myCelsius = getCelsius(32);
console.log('My Celsius:', myCelsius);

// output- My Celsius: 36.666666666666664



// to fix this we can use parsefloat

console.log('My Celsius:', parseFloat(myCelsius.toFixed(3)));


// by declare a separate variable

var getMyCelsius = parseFloat(myCelsius.toFixed(3));
console.log('My Celsius:', getMyCelsius);



// 3.

// Alia Grade- Alia got 95 [grade: A+]
// Dalia's Grade- Dlia got 66 [grade: C]
// Salia's Grade- Salia got 80 [grade: A]
// Malia's Grade- Malia got 59 [grade: D]
// Lilia's Grade- Lilia got 47 [grade: F]
// Jalia's Grade- Jalia got 77 [grade: B]


// without return statement

function getGrade(marks) {
    if (marks >= 50 && marks < 60) {
        console.log('grade: D');
    }
    else if (marks >= 60 && marks < 70) {
        console.log('grade: C');
    }
    else if (marks >= 70 && marks < 80) {
        console.log('grade: B');
    }
    else if (marks >= 80 && marks < 90) {
        console.log('grade: A');
    }
    else if (marks >= 90 && marks <= 100) {
        console.log('grade: A+');
    }
    else {
        console.log('grade: F');
    }
}

// input

var alia = 95;
var dalia = 66;
var salia = 80;
var malia = 59;
var lilia = 47;
var jalia = 77;

var myGrade = getGrade(jalia);





// 3.

// simple interest

function simpleInterest(principal, year, rate) {
    var interest = principal * year * rate;
    return interest;
}

var getInterest = simpleInterest(100, 1, 0.05);
console.log(getInterest);




