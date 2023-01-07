const countPositivesSumNegatives = (input) => {
    let resultArray = []
    let temp = input.reduce((sum, item) => {
        if (item < 0) {
            return sum + item
        }
        return sum
    }, 0)
    console.log(temp)
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))

// [10, -65]