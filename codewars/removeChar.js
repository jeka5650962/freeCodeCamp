const removeChar = (str) => {
    // let result = ''
    let tmp = str.split('')
    tmp.shift()
    tmp.pop()
    return tmp.join('')
}

// console.log(removeChar('jeka'))

const removeChar2 = (string) => {
    return string.slice(1, -1)
}

console.log(removeChar2('person'))