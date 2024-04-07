function getCountryName() {
    return document.getElementById("countryName").value;
}

function getCountryTime() {
    const countryTime = document.getElementById("countryTime").value;
    return countryTime;
}

function any2utc(anyDateString) {
    var date = new Date(anyDateString);
    var now_utc = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(),
                    date.getUTCDate(), date.getUTCHours(),
                    date.getUTCMinutes(), date.getUTCSeconds());
    return new Date(now_utc);
    // console.log(new Date(now_utc));
    // console.log(date.toISOString());
}

function est2utc(estTime) {
    // this function will convert EST time to UTC time, which is used for USA stock market
    const utcTime = any2utc(estTime);
    return utcTime;
}

function utc2adl(utcTime) {
    const adlTime = 
        utcTime.toLocaleString("en-US", {
            timeZone: "Australia/Adelaide"
        });
    return adlTime;
}

function convertTime() {
    const countryName = getCountryName();
    console.log("Country Name is: " + countryName);

    const countryTime = getCountryTime();
    console.log("Country Time is: " + countryTime);
    // Convert to Adelaide time
    // const adelaideTime = new Date();
    switch (countryName) {
        case "USA": {
            const utcTime = est2utc(countryTime);
            console.log("UTC Time is: " + utcTime);
            const adelaideTime = utc2adl(utcTime);
            console.log("Adelaide Time is: " + adelaideTime);
            break;
        }
    }
}