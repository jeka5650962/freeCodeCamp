const arr = {name: "dog", legs: 4, color: "white"}

const animal = (obj) => `This ${obj.color} ${obj.name} has ${obj.legs} legs.`

console.log(animal(arr))