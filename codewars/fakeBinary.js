const fakeBin = (x) => {
    let tmp = x.replace(/[1-4]/gi, '0')
    return tmp.replace(/[5-9]/gi, '1')
}

console.log(fakeBin('45385593107843568'))

const fakeBin2 = (x) => {
    return x.split('').map(n => n < 5 ? 0 : 1).join('')
}

console.log(fakeBin2('45385593107843568'))