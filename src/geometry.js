/*
 * @author Nektro (Sean Denny)
 * Copyright (c) 2017
 *
 * Helper classes for 2D Geometry
 */
'use strict';

class Point {
    constructor(a, b, c, d) {
        this.x = a | 0;
        this.y = b | 0;
    }
}

class Circle {
    constructor(a, b, c) {
        this.x = a | 0;
        this.y = b | 0;
        this.r = c | 0;
    }
}
