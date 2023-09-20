/* You can put js scripts both in body and head 
    If in html ile put the code in between <script></script> */

<script>
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed."
}
</script>

/* in external files no need*/

function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
  }

document.write(5 + 6);
window.alert(5 + 6);
console.log(5+6);
alert(5+6);
window.print(5+6);


let x, y, z;    // Statement 1
x = 5;          // Statement 2
y = 6;          // Statement 3
z = x + y;      // Statement 4

a = 5; b = 6; c = a + b;
print(c);

/* var	Declares a variable
let	Declares a block variable
const	Declares a block constant
if	Marks a block of statements to be executed on a condition
switch	Marks a block of statements to be executed in different cases
for	Marks a block of statements to be executed in a loop
function	Declares a function
return	Exits a function
try	Implements error handling to a block of statements */

/* Always use const if the value should not be changed
    Always use const if the type should not be changed (Arrays and Objects)
    Only use let if you can't use const
    Only use var if you MUST support old browsers.*/

// let cannot be redeclared in the same block;
{
let x = "John Doe";
let x = 0;
}
{
    let x = "John Doe";
}
{
    let x = 15;
}

{
let text1 = "A";
let text2 = "B";
let result = text1 < text2;
}

let text1 = "20";
let text2 = "5";
let result = text1 < text2;


// objects
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
