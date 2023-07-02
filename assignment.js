/* Q. no. 1: Create a jaascript file, using jaascript comments, List all the datatypes of Jaascript, and specify an
example for each of them. */
// String
let a = "Archana Kumari"
console.log(a);

// Number

let w = 2;
console.log(w);
let x = 3.45
console.log(x);
let y = Number.POSITIVE_Infinity;
console.log(y);
let z = NaN;
console.log(z);
let u = 1024n;
console.log(u);
let v = true;
console.log(v)
let x1 = undefined;
console.log(x1);
let x2 = null;
console.log(x2);
let x3 = Symbol("Hi name");
console.log(x3);
let x4 = [1, 2, "PW"];
console.log(x4);
let object = {
    name: "PW Skills",
    course: "FSWD"
}
console.log(object);

// Q. no. 2: Create an array of 10 products that you have recently purchased or viewed on an e-commerce site.
let arr = ["iPhone", "Macbook Pro", "Flower Pot", "Water Bottle", "Mac Studio Mini", "Watch", "Tennis Ball", "Mouse pad", "Keyboard",
 "Lens"]
console.log(arr);

/* Q. no. 3: Create an object of a student registry of 5 students whose key is the registration number and the value is
the student name. Registration number starts from 1 and continues. */
let obj = {
    1 : "Mithun",
    2 : "Alka",
    3 : "Anurag",
    4 : "Prabir",
    5 : "Shivam"
}
console.log(obj)

//             VARIABLE AND TYPEOF
/* Q. no. 1. Specify an example for all the datatypes in Javascript, store the values in a variable, and verify the type of
value stored. */
let k1 = 2;
console.log(typeof k1);
let k2 = 3.45
console.log(typeof k2);
let k3 = Number.POSITIVE_Infinity;
console.log(typeof k3);
let k4 = NaN;
console.log(typeof k4);
let k5 = 1024n;
console.log(typeof k5);
let k6 = true;
console.log(typeof k6)
let k7 = undefined;
console.log(typeof k7);
let k8 = null;
console.log(typeof k8);
let k9 = Symbol("Hi name");
console.log(typeof k9);
let k10 = [1, 2, "PW"];
console.log(typeof k10);
let objec = {
    name: "PW Skills",
    course: "FSWD"
}
console.log(typeof objec);

/* 2. Create 2 valid variables and 2 invalid variables and print them onto the console. Comment the results and
error messages. */

// Valid variable
let name = "PW Skills";  // Output: PW Skills
console.log(name);
let name1 = true;
console.log(name1); // Output: true

/* Invalid variable
let 1name = "PW Skills"; // Output: SyntaxError: Invalid or unexpected token
console.log(1name);
let const = 12; // Output: SyntaxError: Unexpected token 'const'
console.log(const);*/

//           OPERATORS
/* Q. no. 1: Write a program that prints the multiplication table in the textbook format of any number specified.*/
let num = 6;
console.log(num + " * 1" + " = " + num * 1)
console.log(num + " * 2" + " = " + num * 2)
console.log(num + " * 3" + " = " + num * 3)
console.log(num + " * 4" + " = " + num * 4)
console.log(num + " * 5" + " = " + num * 5)
console.log(num + " * 6" + " = " + num * 6)
console.log(num + " * 7" + " = " + num * 7)
console.log(num + " * 8" + " = " + num * 8)
console.log(num + " * 9" + " = " + num * 9)
console.log(num + " * 10" + " = " + num * 10)

/*Q. no. 2: Write a program to perform all the arithmetic operations[except increment and decrement operators] of
javascript of any two numbers stored in the variables num1 and num2. Also, print the results to the console.*/
let num1 = 10;
let num2 = 8;
// Addition (+)
console.log("Addition of num1 and num2 = ", num1+num2) 
// Output: Addition of num1 and num2 =  18

// Subtraction (-)
console.log("Subtraction of num1 and num2 = ", num1-num2)
 // Output: Subtraction of num1 and num2 =  2

// Multiplication (*)
console.log("Multiplication of num1 and num2 = ", num1*num2)
 // Output: Multiplication of num1 and num2 =  80

// Division (/)
console.log("Division of num1 and num2 = ", num1/num2) 
// Output: Division of num1 and num2 =  1.25

// Modulus (%)
console.log("Remainder of num1 and num2 = ", num1%num2)
 // Output: Remainder of num1 and num2 =  2

// Exponential (**)
console.log("Exponential of num1 and num2 = ", num1**num2) 
// Output: Exponential of num1 and num2 =  100000000

// Q. no. 3: Write a program to find out the perimeter of a rectangle. Print the results to the console.
let length = 10;
let width = 20;
console.log("The perimeter of rectangle = ", 2*(length + width));
// Output: The perimeter of rectangle =  60

/* Q. no. 4: Write a program to demonstrate the results of comparison operators. Note that both the truth and false
condition for each operator must be specified. */
a1 = 5;
b1 = 5;
a2 = 10;
b2 = 12;
// Equal
console.log("a1 == b1", a1==b1) //Output:  true
console.log("a2 == b2", a2==b2) //Output:  false

// Less than
console.log("a2 < b2", a2<b2)  //Output:  true
console.log("a1 < b1", a1<b1)  //Output:  false

// Greater than
console.log("b2 > a2", b2>a2)   //Output:  true
console.log("a1 > b1", a1>b1)   //Output:  false

// Less than equal to
console.log("a1 <= b1", a1<=b1)  //Output:  true
console.log("b2 <= a2", b2<=a2)  //Output:  false

// Greater than equal to
console.log("a1 >= b1", a1>=b1)   //Output:  true
console.log("a2 >= b2", a2>=b2)   //Output:  false

// Not equal 
console.log("a2 != b2", a2!=b2)  //Output:  true
console.log("a1 != b1", a1!=b1)   //Output:  false

// Strictly equal
let a12 = 6
let b12 = "6"
console.log("a1 === b1", a1===b1)   //Output:  true
console.log("a12 === b12", a12===b12)  //Output:  false 

// Strictly Not  equal
console.log("a12 !== b12", a12!==b12)   //Output:  true
console.log("a1 !== b1", a1!==b1)    //Output:  false


//        What are Conditions, If, If-else, if-else-if

/* 1. Write a program of traffic control that accepts the traffic light displayed and prints the message. If the
traffic light is red print the vehicles must stop. */
 let traffic_light = "green";

 if (traffic_light == "red"){
    console.log("Vehicles must stop");
 }
 else if (traffic_light == "orange"){
    console.log("Vehicles must wait, the signal is changing to red or green");
 }
 else if (traffic_light == "green"){
    console.log("Vehicles may proceed with caution.");
 }
 else{
   console.log("Invalid traffic light.");
 }
 
 // Q. no. 2: Write a program to print the largest of 2 numbers.
 let aa = 10;
 let bb = 20;
 if (aa < bb){
    console.log("bb is greater than aa");
 }
 else{
    console.log("aa is greater than bb");
 }

 /* Q. no. 3: Write a program that takes a number as input and outputs "Fizz" if it is divisible by 3, "Buzz" if it is divisible
by 5, and "FizzBuzz" if it is divisible by both 3 and 5. Note that any number can be passed and not restricted to
the numbers divisible by 3 or 5. */
let anyNumber = 15;
if(anyNumber % 5 == 0 && anyNumber % 3 == 0){
    console.log("FizzBuzz")
}
else if( anyNumber % 3 == 0){
    console.log("Fizz")
}
else if(anyNumber % 5 == 0){
    console.log("Buzz")
}
else{
    console.log("Invalid input")
}

// Switch case
/* Q. no. 1: Write a program that takes in a day of the week (e.g., Monday, Tuesday, etc.) and outputs the number of
days until the weekend. */
 let day = "friday";
 switch(day){
    case "monday":
        console.log("There are 5 day's untill the weekend");
        break;
        case "tuesday":
        console.log("There are 4 day's untill the weekend");
        break;
        case "wednesday":
        console.log("There are 3 day's untill the weekend");
        break;
        case "thursday":
        console.log("There are 2 day's untill the weekend");
        break;
        case "friday":
        console.log("There are 1 day's untill the weekend");
        break;
        case "saturday":
        console.log("There are 0 day's untill the weekend");
        break;
 }

/* Q. no. 2: Write a program that takes in a number between 1 and 12 and outputs the corresponding month of the
year.*/
let monthNumber = 2;
switch(monthNumber){
    case 1:
        console.log("january");
        break;
        case 2:
        console.log("febraury");
        break;
        case 3:
        console.log("march");
        break;
        case 4:
        console.log("april");
        break;
        case 5:
        console.log("may");
        break;
        case 6:
        console.log("june");
        break;
        case 7:
        console.log("july");
        break;
        case 8:
        console.log("august");
        break;
        case 9:
        console.log("september");
        break;
        case 10:
        console.log("october");
        break;
        case 11:
        console.log("november");
        break;
        case 12:
        console.log("december");
        break;
}
        // Ternary Conditions
// Q. no. 1: Write a program that takes in a number and outputs whether it is positive, negative, or zero.
let number1 = -1;
number1 == 0 ? 
console.log("The number is zero"): number1 > 0 ?
console.log("The number is greater than zero"):console.log("The number is less than zero") 

// Q. no. 2: Create a program that takes in two numbers and prints the larger one.
let number2 = 10;
let number3 = 10;
number2 == number3 ? console.log("Both the numbers are equal"): number2>number3 ?
console.log("The larger number among the two numbers is number2"):
console.log("The larger number among the two numbers is number3")

                    //Loops
/* Q. no. 1: Write a program that generates the multiplication table in the textbook 
format for a given number. */
let s = 5;
for(i=1; i<=10; i++){
    console.log(s + " * " + i + " = " +  5*i )
}
/*   Output:
5 * 1 = 5
5 * 2 = 10
5 * 3 = 15
5 * 4 = 20
5 * 5 = 25
5 * 6 = 30
5 * 7 = 35
5 * 8 = 40
5 * 9 = 45
5 * 10 = 50 */

/* Q. no. 1: Write a program that prints all the positive even 
numbers till the number specified. */
let t = 10;
for(i=1; i<=t; i++){
    if(i%2==0){
    console.log(i);
}
}






