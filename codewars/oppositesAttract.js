const loveFunc = (flower1, flower2) => (flower1 + flower2) % 2 ? true : false
const loveFunc2 = (flower1, flower2) => !!((flower1 + flower2) % 2)

console.log(loveFunc(1, 4))
console.log(loveFunc2(1, 4))