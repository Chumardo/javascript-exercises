const fibonacci = function(number) {
    if (number <0) return "OOPS";
    if (number === 0) return 0;
    let first = 0;
    let last = 1;
    for (let i = 1; i < number; i++) {
        const temp = last;
        last = first + last;
        first = temp;
    }
    return last;
};

// Do not edit below this line
module.exports = fibonacci;
