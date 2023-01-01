const pickIt = (arr) => {
    let odd = [], even = []
    for (let element of arr) {
        (element % 2 ? odd : even).push(element)
    }
    return [odd, even]
}

console.log(pickIt([1, 2, 3]))