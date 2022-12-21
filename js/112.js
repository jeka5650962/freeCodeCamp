function countUp(n) {
    if (n < 1) {
        return [];
    } else {
        const countArray = countUp(n - 1);
        countArray.push(n);
        return countArray;
    }
}
// console.log(countUp(5))


function goUp(n) {
    const arr =[]
    for (let i = 1; i <= n; i++) {
        arr.push(i)
    }
    return arr
}

// console.log(goUp(5))

// ↓ Пример без рекурсии
function calcSum(numOne, numTwo) {
    let result = 1
    // умножаем result на numOne numTwo раз в цикле
    for (let i = 0; i < numTwo; i++) {
        result *= numOne
    }
    return result
}

// console.log(calcSum(3, 4))

// ↓ Пример с рекурсией
function doSum(one, two) {
    if (two === 1) {
        return one
    } else {
        return one * doSum(one, two - 1)
    }
}

console.log(doSum(3, 4))