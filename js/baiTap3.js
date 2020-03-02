function factorial(num) {
    num = parseInt(prompt("nhập số:"));
    let sun =1;
    for (let i = 2; i <= num; i++) {
        sun *= i;
    }
    return sun;
}

alert(factorial());