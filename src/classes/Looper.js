'use strict';
class Looper {
    constructor(mn, mx, sf, rt, fn) {
        this.loop = new Loop(mn, mx, sf);
        this.rate = rt;
        this.func = fn;
        this.frame = 0;
    }
    value() {
        return this.loop.value;
    }
    update() {
        const f = parseInt(new Date().getTime() / this.rate);
        if (f !== this.frame) {
            this.loop.inc();
            this.func();
        }
        this.frame = f;
    }
}
