function myFunction()
{
alert("Hello World!");
}


function sayHello(name, age) {
    document.write (name + " is " + age + " years old.");
 }


 function add(a,b){
			 
    console.log(a+b);
    document.write((a+b)+"<br>");
      
      }
 add(10,20);

 var res = mul(12, 30);  
function mul(x, y)  
{  
return x * y;  
}  
document.write(res);  

// Function Declaration
function greet(name) {
    return "Hello, " + name + "!";
}
document.write(greet()+"<br>");

// Function Expression
var greet = function(name) {
    return "Hello, " + name + "!";
};
document.write(functuon()+"<br>");


// Arrow Function (ES6)
var greet = (name) => {
    return "Hello, " + name + "!";
};


// Immediately Invoked Function Expression (IIFE)
(function() {
    console.log("This function runs immediately.");
})();

// Function with Default Parameters (ES6)
function greet(name = "Guest") {
    return "Hello, " + name + "!";
}

// Function with Rest Parameters (ES6)
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

