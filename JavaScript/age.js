// write a function to find your age

function age(d1, d2) {
    return d2.getFullYear()-d1.getFullYear()
}

var md1 = new Date()
md1.setDate(18)
md1.setMonth(7)
md1.setFullYear(2005)
var md2 = new Date()
console.log("current age: " + age(md1, md2))
