/*
বেসিক জাভাস্ক্রিপ্ট চেকলিস্ট

১. আমি যদি বলি তিনটা ভেরিয়েবল ডিক্লেয়ার করতে হবে। সেটা তোমাকে পারতে
হবে।

২. একটা লুপ লিখতে হবে যেটা ১ থেকে ১০০ পর্যন্ত যত সংখ্যা আছে সেটা দেখাবে


৩. ৫০ থেকে ৮০ এর মধ্যে যতো বিজোড় সংখ্যা আছে সেগুলাকে দেখাবে।


৪. তিনটা সংখ্যা এর যোগ করতে পারবে এমন একটা ফাংশন লিখো
*/


// ==================================================


/* 
১. আমি যদি বলি তিনটা ভেরিয়েবল ডিক্লেয়ার করতে হবে। সেটা তোমাকে পারতে
হবে।
*/

var penColor = 'red'; // string
var penPrice = 50; // number / numeric
var isPenRed = true; // boolean



/* 
২. একটা লুপ লিখতে হবে যেটা ১ থেকে ১০০ পর্যন্ত যত সংখ্যা আছে সেটা দেখাবে
*/


// while

var i = 1;

while (i <= 100) {
    console.log(i);
    i++;
}


// for

for (var i = 1; i <= 100; i++) {
    console.log(i);
}


/* 
৩. ৫০ থেকে ৮০ এর মধ্যে যতো বিজোড় সংখ্যা আছে সেগুলাকে দেখাবে।
*/

// while

var i = 51;

while (i <= 80) {
    console.log(i);
    i += 2;
}

// for

for (i = 51; i <= 80; i += 2) {
    console.log(i);
}



/* 
৪. তিনটা সংখ্যা এর যোগ করতে পারবে এমন একটা ফাংশন লিখো
*/


function addThreeNumbers(first, second, third) {
    var sum = first + second + third;
    return sum;
}

var num1 = 25;
var num2 = 20;
var num3 = 7;

var summation = addThreeNumbers(num1, num2, num3);
console.log(summation);





