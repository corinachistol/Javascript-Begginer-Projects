window.addEventListener("load", calculateTime)

function calculateTime() {
    let date = new Date();
    // console.log(data)

    let dayNumber = date.getDay()
    let hour = date.getHours()
    console.log(hour)
    let minute = date.getMinutes()
    let ampm= hour >= 12 ? "PM" : "AM"
    let dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]

    hour = hour % 12
    hour = hour ? hour : "12" 
    hour = hour < 10 ? "0" + hour : hour
    minute= minute < 10 ? "0" + minute : minute

    document.getElementById("day").innerHTML = dayNames[dayNumber]
    document.getElementById("hour").innerHTML = hour
    document.getElementById("minute").innerHTML = minute
    document.getElementById("ampm").innerHTML = ampm

    setTimeout(calculateTime,200)
}

