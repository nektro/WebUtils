/*
 * @author Nektro (Sean Denny)
 * Copyright (c) 2016-2017
 */
'use strict';
class GameObject {
    constructor() {
        this.gstates = new Array();
        this.activeState = -1;
        
        window.addEventListener('keydown', (e) => {
            if (this.activeState >= 0) {
                this.gstates[this.activeState].onKeyPressed(e.keyCode);
            }
        });
        window.addEventListener('click', (e) => {
            if (this.activeState >= 0) {
                this.gstates[this.activeState].onClick(e);
            }
        });
    }
    addState(gs) {
        if (gs instanceof GameState) {
            this.gstates.push(gs);
        }
    }
    gotoState(s) {
        this.activeState = s;
        this.gstates[this.activeState].init();
        this.loop();
    }
    start() {
        this.gotoState(0);
    }
    next() {
        this.gotoState(this.activeState + 1);
    }
    loop() {
        var st = this.gstates[this.activeState];
        st.update();
        st.draw();
        requestAnimationFrame(this.loop.bind(this));
    }
}
class GameState {
    constructor() { }
    init() { }
    update() { }
    draw() { }
    onKeyPressed() { }
    onClick() { }
}
