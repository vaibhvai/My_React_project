//Q.1] How do you add a new property email: "alice@example.com" to the person object?
const person = { name: "Alice", 
    age: 25,
   add : function(newproperties){
    Object.assign(this, newproperties)
   }}
person.add({email: "alice@example.com", School : 'VPM R Z Shah'})
person.age = 28
//delete person.age
console.log(person)
