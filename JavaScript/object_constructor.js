function emp(id, name) {
    this.id = id
    this.name = name
}
let e1 = new emp(1, "abc")
console.log(e1.id + " " + e1.name)