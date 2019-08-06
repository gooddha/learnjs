function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('Родители разрешили?');
    }
}

function checkAgeTernary(age) {
    age > 18 ? true : confirm('Родители разрешили?');
}

function checkAgeOr(age) {
    return (age > 18) || confirm('Родители разрешили?');
}

function min(a, b) {
    a < b ? a : b;
}

function pow(x, n) {
    let result = x;
    for (let i = 1; i <= n; i++) {
        result *= x;
    }
    return result;
}
