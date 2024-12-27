var a=10;
function functionA(){
    console.log("start function A");
    function functionB(){
        console.log("In function B");
    }
    functionB();
}
functionA();

console.log("globalcontext");

var name = 'aman';
function first(){
    var a = 'hello!';
    second();
    var x = a + name;
    console.log(x);
}
function second(){
    var b = 'hi!';
    third();
    var z = b + name;
    console.log(z);
}
function third(){
    var c ='hey!';
    var z= c + name;
    console.log(z);
}
first();

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

---------------------multiply two numbers-----------------------
var res=mul(12,30);
function mul(a,b){
    return a*b;
}
document.write(res);

--------------divide two numbers-------------------
function myFunction(a,b){
    return a/b;
}
const result=myFunction(8,2);
console.log(result);

-----------arrow function-------------
function add(a,b){
    console.log(a+b);
};
    add(10,20);
var add2=(a,b)=>{
    console.log(a+b);
};
add2(102,20);
var add3=(a,b)=>{console.log(a+b);
};
add3(30,20);

var a=100;
var b=13;
var c=10;
var linebreak="<br>";
document.write("a+b+c=");
result=a+b+c;
document.write(result);
document.write(linebreak);
document.write("a+b=");
result=a+b;
document.write(result);
document.write(linebreak);


------------------Add string and Number----------------------
function myFunction(){
    var x=5+5;
    var y="5"+5;
    var z="Hello"+5;
    var demoP=document.getElementById("demo");
    demoP.innerHTML="5+5="+x+"<br>"+"5+5="+y+"<br>"+"Hello+5="+z;
}

var Mycollection=[1,"meera maam",true,{name:"sanjeev",age:30},function(name){
    console.log(name);
},["abhishek","bachhan","amitabh","bachhan"]];

console.log(Mycollection);

