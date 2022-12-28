let v1 = 50, v2 = 100, v3 = 150, v4 = 200, v5 = 2, v6 = 250;

const equal1 = (a = v1, b = v1) => a + b

const equal2 = (a = v4, b = v2) => a - b

const equal3 = (a = v1, b = v5) => a * b

const equal4 = (a = v4, b = v5) => a / b

const equal5 = (a = v2, b = v4) => a % b