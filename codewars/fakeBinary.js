const fakeBin = (x) => {
    let tmp = x.replace(/[1-4]/gi, '0')
    return tmp.replace(/[5-9]/gi, '1')
}

console.log(fakeBin('45385593107843568'))