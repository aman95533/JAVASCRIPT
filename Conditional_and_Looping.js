var age = 20;
         
if( age > 18 ) {
   document.write("<b>You are eligible to cast the vote.</b>"+"<br>");
}


var score = 85;

if (score >= 90) {
    document.write("Grade: A<br>");
} else if (score >= 80) {
    document.write("Grade: B<br>");
} else if (score >= 70) {
    document.write("Grade: C<br>");
} else {
    document.write("Grade: F<br>");
}


var day = 3;
var dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}

document.write("Today is " + dayName + ".<br>");

///lopps====================================================================

var i;
for (i = 0; i < 3; i = i + 1)
{
    console.log(i);
}

var count;
            document.write("Starting Loop" + "<br />");
            for(count = 0; count < 10; count++) {
               document.write("Current Count : " + count );
               document.write("<br />");
            }         
            document.write("Loop stopped!");

  for (var i = 0; i < 100; i++) {
                
        if (i % 2 === 0) {
            console.log(i + " is an even number.");
        }
         else {
                    
            console.log(i + " is an odd number.");
        }
    }
                         

