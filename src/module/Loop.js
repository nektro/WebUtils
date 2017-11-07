/**
 */
//
export class Loop {
    constructor(sm, tp, st) {
        this.min = sm;
        this.max = tp;
        this.value = st;
    }
    inc() {
        this.value += 1;
        if (this.value > this.max) {
            this.value = this.min;
        }
    }
    dec() {
        this.value -= 1;
        if (this.value < this.min) {
            this.value = this.max;
        }
    }
}
