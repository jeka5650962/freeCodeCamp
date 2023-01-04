const squareSum = (numbers) => {
    let result = 0
    for (let num of numbers) {
        result += Math.pow(num, 2)
    }
    return result
}

console.log(squareSum([1, 2, 2]))