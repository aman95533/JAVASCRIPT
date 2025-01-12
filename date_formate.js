// const d=new Date("2015-03-25");
// document.write("ISO FORMATE<br>"); //ISO 8601
// document.write(d);

// const d1=new Date("2025-03")
// document.write("<br>ISO FORMATE<br>");   //ISO 8601
// document.write(d1);

// const d2=new Date("2025");
// document.write("<br>ISO FORMATE<br>");  //ISO 8601
// document.write(d2);

// const d3=new Date("2015-03-25T12:00:00Z");  //ISO 8601
// document.write("<br>ISO FORMATE<br>");
// document.write(d3);

// const d4=new Date("2015-03-25T12:00:00-06:30");  //ISO 8601
// document.write("<br>ISO FORMATE<br>");
// document.write(d4);

// const d5=new Date("03/25/2015");  //MM/DD/YYYY(short date)
// document.write("<br>ISO FORMATE<br>");
// document.write(d5);

// const d6=new Date("Mar 25 2015");  //MMM DD YYYY(long date)
// document.write("<br>ISO FORMATE<br>");
// document.write(d6);

// //parsing dates
// msec=Date.parse("March 21, 2025");
// document.write("<br>ISO FORMATE<br>");
// document.write(msec);

// //get date methods
// const d7=new Date("2021-03-25");
// d.getFullYear();
// document.write("<br>ISO FORMATE<br>");
// document.write(d7.getMonth());

// const d8=new Date();
// d8.getDate();
// document.write("<br>ISO FORMATE<br>");
// document.write(d8.getMonth());

// const months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
// const d9=new Date("2025-03-03");
// let month=months[d9.getMonth()];
// document.write("<br>ISO FORMATE<br>");
// document.write(month);

// const d10=new Date("2025-03-25");
// d10.getDate();
// document.write("<br>ISO FORMATE<br>");
// document.write(d10.getDate());

// const d11=new Date();
// d11.getDate();
// document.write("<br>ISO FORMATE<br>");
// document.write(d11.getDate());

// const d12 = new Date("2021-03-25");
// d12.getHours();
// document.write("<br>ISO FORMATE<br>");
// document.write(d12.getHours()+"<br>");

// const d13 = new Date();
// d13.getHours();
// document.write(d13.getHours()+"<br>");

// const d14 = new Date("2021-03-25");
// d14.getMinutes();
// document.write(d14.getMinutes()+"<br>");

// const d15 = new Date();
// d15.getMinutes();
// document.write(d15.getMinutes()+"<br>");



// const d16 = new Date();
// d16.setFullYear(2025);
// document.write(d16.setFullYear()+"<br>");

// const d17 = new Date();
// d17.setMonth(3);
// document.write(d17.setMonth()+"<br>");

// const d18 = new Date();
// d18.setDate(15);
// document.write(d18.setDate()+"<br>");

// const d19 = new Date();
// d19.setHours(22);
// document.write(d19.setHours()+"<br>");

// const d20 = new Date();
// d20.setMinutes(30);
// document.write(d20.setMinutes()+"<br>");

// const d21 = new Date();
// d21.setSeconds(30);
// document.write(d21.setSeconds()+"<br>");


let text = "2100, 01, 14";
const today = new Date();
const someday = new Date();
someday.setFullYear(2100, 0, 14);   // 14 Jan 2100
if (someday > today) {
  text = "Today is before January 14, 2100.";
} else {
  text = "Today is after January 14, 2100.";
}