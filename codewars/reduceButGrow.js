const grow = (x) => {
    return x.reduce((accum, item) => {
        return accum * item
    })
}

console.log(grow([4, 1, 1, 1, 4]))