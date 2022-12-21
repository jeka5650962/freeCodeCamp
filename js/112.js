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

/* ------------------------------------------------------------------ */

function goUp(n) {
    const arr =[]
    for (let i = 1; i <= n; i++) {
        arr.push(i)
    }
    return arr
}
// console.log(goUp(5))

/* ------------------------------------------------------------------ */

// Пример без рекурсии:
function calcSum(numOne, numTwo) {
    let result = 1
    // умножаем result на numOne numTwo раз в цикле
    for (let i = 0; i < numTwo; i++) {
        result *= numOne
    }
    return result
}
// console.log(calcSum(3, 4))

// Пример с рекурсией:
function doSum(one, two) {
    if (two === 1) {
        return one
    } else {
        return one * doSum(one, two - 1)
    }
}

// console.log(doSum(3, 4))

/* ------------------------------------------------------------------ */

const people = ['Jeka', 'Lena', 'Dima', 'Bob']

/*for (let i = 0; i < people.length; i++) {
    console.log(people[i])
}*/

/*function getPeople(arr) {
    console.log(arr[0])
    console.log(arr[1])
    console.log(arr[2])
    console.log(arr[3])
}*/

function getPeople(arr, index = 0) {
    console.log(arr[index])
    index++
    if (index < people.length) {
        getPeople(people, index)
    }
}

// getPeople(people)

/* ------------------------------------------------------------------ */

let someNumber = 0

function plus() {
    someNumber++
    console.log(someNumber)
    if (someNumber === 10) return
    plus()
}

plus()