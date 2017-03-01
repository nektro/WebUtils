/**
 * Based on the Python built-in function, use this to iterate of a list of numbers. Be sure to use a for..of loop
 * ex) for (let i of range(10) { // [0,1,2,3,4,5,6,7,8,9]
 * ex) for (let i of range(20,10) { // [10,11,12,13,14,15,16,17,18,19]
 * ex) for (let i of range(10,0,2) { // [0,2,4,6,8]
 */
function* range(stop, start, step) {
    start = (start || 0);
    stop = (stop || 0);
    step = (step || 1);
    let curr = start;
    while (curr < stop) {
        yield curr;
        curr += step;
    }
}
