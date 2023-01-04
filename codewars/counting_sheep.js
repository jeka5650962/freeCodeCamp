const countSheeps = (arrayOfSheep) => {
    let n = 0
    for (let item of arrayOfSheep) {
        if (item === true) {
            n++
        }
    }
    return n
}

console.log(countSheeps([true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true]))


const result = (array) => array.filter(Boolean).length

console.log(result([true, false, true, true, false, false, false, true, true, true]))