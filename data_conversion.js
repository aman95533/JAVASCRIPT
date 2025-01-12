// Converting a String to a Number
var str = "123";
var num = Number(str);
console.log(num);  // 123
console.log(typeof(num));  // number

// Converting a Number to a String
var num = 123;
var str = num.toString();
console.log(str);  // "123"
console.log(typeof(str));  // string

// Converting a Boolean to a String
var bool = true;
var str = String(bool);
console.log(str);  // "true"
console.log(typeof(str));  // string

// Converting a String to a Boolean
var str = "true";
var bool = (str === "true");
console.log(bool);  // true
console.log(typeof(bool));  // boolean

// Converting an Array to a String
var arr = [1, 2, 3];
var str = arr.join(", ");
console.log(str);  // "1, 2, 3"
console.log(typeof(str));  // string
