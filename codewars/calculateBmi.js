const bmi = (weight, height) => {
    let result = weight / Math.pow(height, 2)

    if (result <= 18.5) {
        return 'Underweight'
    }

    if (result <= 25) {
        return 'Normal'
    }

    if (result <= 30) {
        return 'Overweight'
    }

    if (result > 30) {
        return 'Obese'
    }
}

console.log(bmi(80, 1.80))