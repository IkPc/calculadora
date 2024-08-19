function calc(x,y,z) {
    switch (z) {
        case '+':
            return `${x} ${z} ${y} = ${x + y}`;
        case '-':
            return `${x} ${z} ${y} = ${x - y}`;
        case '*':
            return `${x} ${z} ${y} = ${x * y}`;
        case '/':
            return `${x} ${z} ${y} = ${x / y}`;
        default:
            console.log('Something went wrong.')
    }
};

module.exports = calc;