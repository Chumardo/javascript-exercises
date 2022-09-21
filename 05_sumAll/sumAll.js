const sumAll = function(first_n, second_n) {
    let sum = 0;
    for (let i = first_n; i < second_n + 1; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
