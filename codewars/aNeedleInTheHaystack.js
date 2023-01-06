const findNeedle = (haystack) => {
    let result = ''
    haystack.filter((item, index) => {
        if (item === 'needle') {
            result = `found the needle at position ${index}`
        }
    })
    return result
}

// console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]))



const findNeedle2 = (haystack) => {
    return 'found the needle at position ' + haystack.indexOf('needle')
}

console.log(findNeedle2(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]))