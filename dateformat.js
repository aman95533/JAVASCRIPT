const d=new Date("2025-01-03");
document.write("ISO FORMAT<br>")
document.write(d+"<br>");

const d1=new Date("2025-03")
document.write(d1+"<br>");

const d2=new Date("2025")
document.write(d2+"<br><br>");

document.write("ISO FORMAT with UTC <br>");
const d3=new Date("2025-01-03T12:00:00Z");
document.write(d3+"<br>");

document.write("SHORT FORMAT <br>");
const d4=new Date("03/25/2015");
document.write(d4+"<Br>")


document.write("LONG FORMAT <br>");
const d5=new Date("Mar 25 2015");
document.write(d5+"<Br>")


let msec=Date.parse("Mar 21 2025"); //1 jan 1970
document.write(msec+" <br>");


const d6=new Date("2021-03-25");
d6.getFullYear();
document.write(d6+"<br>");


const d7=new Date();
d7.getFullYear();
document.write(d7+"<br>");
document.write(d7.getMonth()+"<br>");

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const d8=new Date("2025-01-03");
let month=months[d8.getMonth()];
document.write(month+"<br>");

document.write(d8.getDate()+"<br>");


