'use strict';
/*
 * @author Nektro (Sean Denny)
 * Copyright (c) 2017
 */
// object based switch statement
// does not support "running switch" ==> after a case run, "break" is effectively called
// // called after the callback function returns
class Switch {
    constructor() {
        this.cases = new MultiKeyMap();
    }
    // [cases array, callback]
    // add a case to this switch array that will run {cb} if {this.run} is called
    // with any of the values from the array {cs}
    case(cs, cb) {
        for (let i of cs) {
            this.cases.set(i, cb);
        }
    }
    // [switch value]
    // evaluate this switch statement with the value {v}
    run(v) {
        let res = this.cases.get(v);
        if (res !== undefined) {
            res(v);
        }
    }
}
