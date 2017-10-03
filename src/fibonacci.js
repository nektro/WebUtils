/**
 * A generator function for the Fibonacci sequence as per https://oeis.org/A000045
 */
function* fibonacci_generator() {
    const seq = [0,1];
    while (seq[0] !== Infinity) {
        seq.push(seq[0] + seq[1]);
        yield seq[0];
        seq.shift();
    }
}
function fibonacci(x) {
    const f = fibonacci_generator();
    for (let i = 0; i < x; i++) {
        const y = f.next().value;
    }
    return f.next().value;
}
