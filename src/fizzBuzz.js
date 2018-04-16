function adder(a,b) {
    return a + b;
}

adder(1,1);

// console.log(adder(3,1));

var fizzbuzzTestArray = [];
for (var i = 1; i <= 100; i++) {
    fizzbuzzTestArray.push(i);
}

function fizzbuzz(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        return 'fizzbuzz';
    } else if (number % 3 === 0) {
        return 'fizz';
    } else if (number % 5 === 0) {
        return 'buzz';
    } else {
        return number;
    }
}

var mappedArray = fizzbuzzTestArray.map(a => fizzbuzz(a));

console.log(mappedArray);

