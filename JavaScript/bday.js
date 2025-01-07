// write a function to calculate number of days remaining in your upcoming birthday in current year 

function bday(d1, d2) {
    oneday = 24 * 60 * 60 * 1000
    d1_ms = d1.getTime()
    d2_ms = d2.getTime()
    diff_ms = Math.abs(d1_ms - d2_ms)
    return Math.round(diff_ms / oneday)
}

var md1 = new Date()
md1.setDate(18)
md1.setMonth(7)
var md2 = new Date()
console.log("no. of days left: " + bday(md1, md2))
