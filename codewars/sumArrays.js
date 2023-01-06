const sum = (numbers) => numbers.reduce((result, item) => {
    return result + item
}, 0)

console.log(sum([1, 5.2, 4, 0, -1]))