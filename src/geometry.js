/*
 * @author Nektro (Sean Denny)
 * Copyright (c) 2017
 *
 * Helper classes for 2D Geometry
 */
'use strict';

class Point {
    constructor(a, b, c, d) {
        this.x = a || 0;
        this.y = b || 0;
    }
    distanceTo(pt) {
        return Math.sqrt(Math.pow(pt.x - this.x, 2) + Math.pow(pt.y - this.y, 2));
    }
    add(pt) {
        this.x += pt.x;
        this.y += pt.y;
        return this;
    }
    sub(pt) {
        this.x -= pt.x;
        this.y -= pt.y;
        return this;
    }
}

class Circle {
    constructor(a, b, c) {
        this.x = a || 0;
        this.y = b || 0;
        this.radius = c || 0;
    }
    center() {
        return new Point(this.x, this.y);
    }
    intersects(ob) {
        if (ob instanceof Point) { // circle x point via https://math.stackexchange.com/a/198769
            return ob.distanceTo(this.center) <= this.radius;
        } else
        if (ob instanceof Circle) { // circle x circle via https://stackoverflow.com/a/8367547
            let dtc = this.center.distanceTo(ob.center); // distance to center
            return (dtc <= this.radius + ob.radius) && (dtc >= Math.abs(this.radius - ob.radius));
        }
        return false;
    }
}

class Line {
    constructor(p1, p2) {
        this.pt1 = p1 || new Point();
        this.pt2 = p2 || new Point();
    }
    length() {
        return this.pt1.distanceTo(this.pt2);
    }
}

class Rectangle {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
    }
    toPolygon() {
        return new Polygon([
            new Point(this.x             , this.y),
            new Point(this.x + this.width, this.y),
            new Point(this.x + this.width, this.y + this.height),
            new Point(this.x             , this.y + this.height)
        ]);
    }
}

class Square extends Rectangle {
    constructor(x, y, s) {
        super(x, y, s, s);
    }
}

class Polygon {
    constructor(pts) {
        this.pts = pts;
    }
}
