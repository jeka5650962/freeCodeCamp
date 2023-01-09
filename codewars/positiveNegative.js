const countPositivesSumNegatives = (input) => {
    let resultArray = []

    if (Array.isArray(input) && !input.length || input === null) {
        return resultArray
    }

    let countPositive = input.filter(item => {
        return item > 0
    })

    resultArray.push(countPositive.length)

    let sumNumbers = input.reduce((sum, item) => {
        if (item < 0) {
            return sum + item
        } else {
            return sum
        }
    }, 0)

    resultArray.push(sumNumbers)

    return resultArray
}

console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]))