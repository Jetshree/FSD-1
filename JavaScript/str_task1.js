// 1.  write a javascript to find position of first occurance of vowel 'a' and last occurance of vowel 'a' in goiven word 
// "ajanta" also return the string between them

s = "ajanta"
console.log("first occurance at: " + s.indexOf('a'))
console.log("last occurance at: " + s.lastIndexOf('a'))
console.log("string between them: " + s.substring(s.indexOf('a') + 1, s.lastIndexOf('a')))
console.log("string between them: " + s.substr(s.indexOf('a') + 1, s.lastIndexOf('a')-1))

// 2. given digit is 23, divide into two parts 2 and 3, aslo find 2^3

n="23"
p1=n.charAt(0)
p2=n.charAt(1)
console.log("2^3 = " + Math.pow(p1,p2))