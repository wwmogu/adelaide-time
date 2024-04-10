// function getCountryName() {
//     return document.getElementById("countryName").value;
// }

// function getCountryTime() {
//     const countryTime = document.getElementById("countryTime").value;
//     return countryTime;
// }

function convertTime() {
    var newYork    = moment.tz("2014-06-01 12:00", "America/New_York");
    var losAngeles = newYork.clone().tz("America/Los_Angeles");
    var london     = newYork.clone().tz("Europe/London");

    console.log(newYork.format()    );// 2014-06-01T12:00:00-04:00
    console.log(losAngeles.format() );// 2014-06-01T09:00:00-07:00
    console.log(london.format()     );// 2014-06-01T17:00:00+01:00
}
