// var a=10;
// function functionA(){
//     console.log("start function A");
//     function functionB(){
//         console.log("In function B");
//     }
//     functionB();
// }
// functionA();

// console.log("globalcontext");

// var name = 'aman';
// function first(){
//     var a = 'hello!';
//     second();
//     var x = a + name;
//     console.log(x);
// }
// function second(){
//     var b = 'hi!';
//     third();
//     var z = b + name;
//     console.log(z);
// }
// function third(){
//     var c ='hey!';
//     var z= c + name;
//     console.log(z);
// }
// first();

var a =5;
function add(){
    var b=15;
    console.log(a+b);
        function mul(){
            var c=18;
            console.log(b*c);
        }
        mul();
}
add();