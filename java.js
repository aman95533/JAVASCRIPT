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

// var a =5;
// function add(){
//     var b=15;
//     console.log(a+b);
//         function mul(){
//             var c=18;
//             console.log(b*c);
//         }
//         mul();
// }
// add();

// ---------------------multiply two numbers-----------------------
// var res=mul(12,30);
// function mul(a,b){
//     return a*b;
// }
// document.write(res);

// --------------divide two numbers-------------------
// function myFunction(a,b){
//     return a/b;
// }
// const result=myFunction(8,2);
// console.log(result);

// -----------arrow function-------------
// function add(a,b){
//     console.log(a+b);
// };
//     add(10,20);
// var add2=(a,b)=>{
//     console.log(a+b);
// };
// add2(102,20);
// var add3=(a,b)=>{console.log(a+b);
// };
// add3(30,20);

// var a=100;
// var b=13;
// var c=10;
// var linebreak="<br>";
// document.write("a+b+c=");
// result=a+b+c;
// document.write(result);
// document.write(linebreak);
// document.write("a+b=");
// result=a+b;
// document.write(result);
// document.write(linebreak);


// ------------------Add string and Number----------------------
// function myFunction(){
//     var x=5+5;
//     var y="5"+5;
//     var z="Hello"+5;
//     var demoP=document.getElementById("demo");
//     demoP.innerHTML="5+5="+x+"<br>"+"5+5="+y+"<br>"+"Hello+5="+z;
// }

// var Mycollection=[1,"meera maam",true,{name:"sanjeev",age:30},function(name){
//     console.log(name);
// },["abhishek","bachhan","amitabh","bachhan"]];

// console.log(Mycollection);

// -----------------------------arguments in js---------------------
// function information(firstName,lastName,language){
//     if(arguments.length===3){
//         console.log(fisrt name);
//         console.log(last name);
//         console.log(language);
//     }
// }
// information();
// information("jitendra","abhi","vivek");

// function sayHello(){
//     alert("Hello World!");
// }

// function over(){
//     document.getElementById('mytext').style.color='#000';
// }
// function mout(){
//     document.getElementById('mytext').style.color='magenta';
// }

// var retVal=confirm("Do you want to continue?");
// if(retVal==true){
//     alert("user wants to continue!");
// }
// else{
//     alert("user does not want to continue!");
// }

// var retVal=prompt("Enter your name:","your name here");
// alert("You have entered:"+retVal);

// var name=prompt("Enter your Name:","Name");
// document.write("<h2>Hello"+ name +"</h2>");

// var question="what is 10+10";
// var answer=20;
// var correct='<img src="3.jpg" height="150" width="250">';
// var incorrect='<img src="close.png" height="150" width="250">';
// var response=prompt(question,"0");
// for(count=0;count<3;count++){
//     if(response!=answer){
//         confirm("wrong,press Okk for another chance");
//         response=prompt(question,"0");
//         if(count==1){
//             alert("better luck next time");
//         }
//     }
//     else{
//         alert("Great!!you are right");
//         count=3;
//     }
// }
// var output=(response==answer)?correct:incorrect;
// document.write("<br>");
// document.write(output);


// function Redirect(){
//     window.location="https://www.google.com";
// }
// document.write("You will be redirected to main page in 10 sec.");
// setTimeout('Redirect()',10000);

function validationForm(){
    var x=document.forms["myForm"]["fname"].value;
    if(x==null||x==""){
        alert("First name must be filled out");
        return false;
    }
}

// function validateForm(){
// var y=document.forms["myForm"]["call"].value;

//     if(y.length!=10){
//         alert("enter 10 digit mobile number");
//         return false;
//     }
//     if(!y.match(/^[0-9]+{10}$/)){
//         alert("only digits,please");
//         return false;
//     }
// }

function validateForm(){
    var x=document.forms["myForm"]["email"].value;
    var atpos=x.indexof("@");
    var dotpos=x.lastindexof(".");
    if(atpos<1//dotpos<atpos+2//dotpos+2>=x.length){
        alert("Not a valid e-mail address");
        return false;
    }
