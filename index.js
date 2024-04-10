function getCountryName() {
    return document.getElementById("countryName").value;
}

function getCountryTime() {
    const countryTime = document.getElementById("countryTime").value;
    return countryTime;
}

function est2acst() {
    // new york is in est time zone
    // adelaide is in acst time zone
    var userTime = getCountryTime();
    console.log("User Time: " + userTime);
    var estTime = moment.tz(userTime, "America/New_York");
    var adelaideTime = estTime.clone().tz("Australia/Adelaide");
    console.log("EST Time: " + estTime.format());
    console.log("Adelaide Time: " + adelaideTime.format());

    // var newYork    = moment.tz("2014-06-01 12:00", "America/New_York");
    // var losAngeles = newYork.clone().tz("America/Los_Angeles");
    // var london     = newYork.clone().tz("Europe/London");

    // console.log(newYork.format()    );// 2014-06-01T12:00:00-04:00
    // console.log(losAngeles.format() );// 2014-06-01T09:00:00-07:00
    // console.log(london.format()     );// 2014-06-01T17:00:00+01:00
}
