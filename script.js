const dayEl = document.getElementById("day-name")
const hours = document.getElementById("hours-name")
const minutes = document.getElementById("min-name")
const seconds = document.getElementById("sec-name")
const period = document.getElementById("period")

const date = new Date ()

let day = ""
let dayNum = date.getDay ()
let hoursNum = date.getHours ()
let minNum = date.getMinutes ()
let secNum = date.getSeconds ()

function findDay (dayNum) {
    if (dayNum === 1) day = "MO"
    else if (dayNum === 2) day = "TU"
    else if (dayNum === 3) day = "WE"
    else if (dayNum === 4) day = "TH"
    else if (dayNum === 5) day = "FR"
    else if (dayNum === 6) day = "SA"
    else if (dayNum === 7) day = "MO"

    return day
}

function setTime () {
    if (hoursNum > 12) {
        hours.textContent = hoursNum - 12 
        period.textContent = "PM"
    }
    else {
        hours.textContent = hoursNum
        period.textContent = "AM"
    } 
    
    minutes.textContent = minNum
    seconds.textContent = secNum
}

function time () {
    secNum++

    if (secNum === 60) {
        secNum = 1
        minNum++

        if (minNum === 60) {
            minNum = 1
            hoursNum++

            if (hoursNum === 24) {
                hoursNum = 1
                dayNum++

                if (dayNum === 7) {
                    dayNum = 1
                }
            }
        }
    }

    setTimeout (time, 1000)

    setTime ()
}

time ()









