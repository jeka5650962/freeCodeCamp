const solution = (str) => {
    let result = '' // w // ow // row // lrow // dlrow
    for (let i of str) {
        result = i + result // w + '' // o + w // r + ow // l + row // d + lrow
    }
    return result
}

// console.log(solution('world'))

const solution2 = (str) => {
    return str.split('').reverse().join('')
}

console.log(solution2('hello'))