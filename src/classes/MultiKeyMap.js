'use strict';
/*
 * @author Nektro (Sean Denny)
 * Copyright (c) 2017
 */
// map multiple keys to the same value
class MultiKeyMap {
    constructor() {
        this.keys = new Map();
        this.values = new Array();
    }
    // [key, value]
    // map the key {k} to the value {v}
    set(k,v) {
        let vi = this.values.indexOf(v);
        if (vi < 0) {
            vi = this.values.length;
            this.values.push(v);
        }
        this.keys.set(k, vi);
    }
    // [key]
    // get the value in this map for the key {k}
    get(k) {
        //
        if (this.keys.has(k)) {
            return this.values[this.keys.get(k)];
        }
    }
}
