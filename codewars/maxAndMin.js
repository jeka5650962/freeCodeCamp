const min = (list) => Math.min.apply(null, list)

const max = (list) => Math.max.apply(null, list)

const min2 = (list) => Math.min(...list)

const max2 = (list) => Math.max(...list)

console.log(min([-52, 56, 30, 29, -54, 0, -110]))
console.log(max([4, 6, 2, 1, 9, 63, -134, 566]))

console.log(min2([-52, 56, 30, 29, -54, 0, -110]))
console.log(max2([4, 6, 2, 1, 9, 63, -134, 566]))