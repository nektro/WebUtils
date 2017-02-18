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
    distanceTo(pt) {
        return Math.sqrt(Math.pow(pt.x - this.x, 2) + Math.pow(pt.y - this.y, 2));
    }
    add(pt) {
        this.x += pt.x;
        this.y += pt.y;
        return this;
    }
}

class Circle {
    constructor(a, b, c) {
        this.x = a | 0;
        this.y = b | 0;
        this.r = c | 0;
    }
    get center() {
        return new Point(this.x, this.y);
    }
    intersects(ob) {
        if (ob instanceof Point) { // circle x point via https://math.stackexchange.com/a/198769
            return ob.distanceTo(this.center) <= this.r;
        } else
        if (ob instanceof Circle) { // circle x circle via https://stackoverflow.com/a/8367547
            let dbc = this.center.distanceTo(ob.center);
            return (dbc <= this.r + ob.r) && (dbc >= Math.abs(this.r - ob.r)); 
        }
        return false;
    }
}
