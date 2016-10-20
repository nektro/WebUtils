'use strict';

class CustomEventTarget {
    constructor() {
        this.listeners = new Map();
    }
    addEventListener(t,f) {
        if (!this.listeners.has(t)) {
            this.listeners.set(t, Array());
        }
        this.listeners.get(t).push(f);
    }
    dispatchEvent(e) {
        this.listeners.get(e.type).forEach((v,i) => {
            v(e);
        });
    }
}
