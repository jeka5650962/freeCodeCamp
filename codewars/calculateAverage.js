const findAverage = (array) => {
    let sumNumbers = array.reduce((sum, item) => {
        return sum + item
    }, 0)

    if (array.length === 0) {
        return 0
    } else {
        return sumNumbers / array.length
    }
}

console.log(findAverage([]))