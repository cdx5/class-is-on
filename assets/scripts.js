//Display today's date
var currentDateObject = new Date();
var currentDateFormatted = formatDate(currentDateObject);
document.getElementById("today").textContent = currentDateFormatted;

//Display next class date
var allClassDatesUnix = [1630599000, 1631203800, 1631764800, 1632369600, 1632974400, 1633579200, 1634184000, 1634788800, 1635393600, 1635998400, 1636606800, 1637211600, 1638421200, 1639026000, 1639630800];

var currentTimestampUnix = Math.floor(currentDateObject.getTime()/1000.0); 

if (currentTimestampUnix < 1639630800) {
    for (var classDateUnix of allClassDatesUnix) {
        if(classDateUnix > currentTimestampUnix) {
            var nextClassDateUnix = classDateUnix;
            var nextClassDateObject = new Date(nextClassDateUnix*1000);
            var nextClassDateFormatted = formatDate(nextClassDateObject);
            document.getElementById("next-class-date").textContent = nextClassDateFormatted;
            //Generate a countdown with the difference between the two dates
            var difference = (nextClassDateUnix) - (currentTimestampUnix);
            var differenceInDays = Math.ceil(difference / (3600 * 24));
            document.getElementById("countdown").textContent = differenceInDays;
            break;
        }
    }
} else {
    document.getElementById("conditional-countdown").style.display = "none";
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