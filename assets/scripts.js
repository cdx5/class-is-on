//Display today's date
var currentDateObject = new Date();
var currentDateFormatted = formatDate(currentDateObject);
document.getElementById("today").textContent = currentDateFormatted;

//Display next class date ...1630599000,
var allClassDatesUnix = [1631203800, 1631808600, 1632413400, 1633018200, 1633623000, 1634227800, 1634832600, 1635437400, 1636042200, 1636650600, 1637255400, 1638465000, 1639069800, 1639674600];

var currentTimestampUnix = Math.floor(currentDateObject.getTime()/1000.0); 

for (var i = 0; i < allClassDatesUnix.length; i++) {
    if (allClassDatesUnix[i] > currentTimestampUnix) {
        var nextClassDateUnix = allClassDatesUnix[i];
        var nextClassDateObject = new Date(nextClassDateUnix*1000);
        var nextClassDateFormatted = formatDate(nextClassDateObject);
        document.getElementById("next-class-date").textContent = nextClassDateFormatted;
        //Generate a countdown with the difference between the two dates
        var difference = (nextClassDateUnix) - (currentTimestampUnix);
        var differenceInDays = Math.ceil(difference / (3600 * 24));
        document.getElementById("countdown").textContent = differenceInDays;
        break;
    } else {
        document.getElementById("conditional-countdown").style.display = "none";
    }
}

//Global function to convert the date format to read: "Sunday, January 1, 1970" (used twice in the code above)
function formatDate(anyDateObject) {
    var weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
        dayOfWeek = weekday[anyDateObject.getDay()],
        dayOfMonth = anyDateObject.getDate(),
        months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
        monthName = months[anyDateObject.getMonth()],
        year = anyDateObject.getFullYear();
    var dateFormatted = dayOfWeek + ", " + monthName + " " + dayOfMonth + ", " + year;
    return dateFormatted;
}