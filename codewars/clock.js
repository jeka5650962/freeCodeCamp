const past = (h, m, s) => (h * 60 * 60 + m * 60 + s) * 1000

console.log(past(0, 1, 1))

// 61000