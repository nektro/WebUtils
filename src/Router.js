'use strict';
/*
 * @author Nektro (Sean Denny)
 * Copyright (c) 2017
 */
class Router {
    constructor(r, ops) {
        const options = Object.assign({}, {pages:[], extension:'.html'}, ops || {});
        this.root = r;
        this.pages = options.pages;
        this.pages.push('/');
        this.cache = new Map();
        this.extension = options.extension;
        this.element = document.body;
        window.addEventListener('hashchange', (e) => {
            this.gotoPage(e.newURL.substring(e.newURL.indexOf('#') + 1));
        });
    }
    resolveFileName(rt) {
        if (this.pages.indexOf(rt) > -1) return [`${rt}${this.extension}`];
    }
    getFileName(pn) {
        if (pn === '/') return Promise.resolve([`/index${this.extension}`]);
        let rsn = this.resolveFileName(pn);
        if (rsn !== undefined) return Promise.resolve(rsn);
        return Promise.resolve([`/blank${this.extension}`]);
    }
    processFile(src) {
        return src;
    }
    getPageContent(p) {
        return this.getFileName(p).then((pl) => {
            if (this.cache.has(pl[0])) {
                return Promise.resolve([this.cache.get(pl[0]),pl[1]]);
            }
            else {
                return fetch(`${this.root}/pages${pl[0]}`).then((x) => { return x.text() }).then((x) => {
                    let file = this.processFile(x);
                    if (!(this.cache.has(pl[0]))) this.cache.set(pl[0], file);
                    return Promise.resolve([file,pl[1]]);
                });
            }
        });
    }
    gotoPage(pn) {
        this.getPageContent(pn).then((x) => {
            this.setPageContent(...x);
        });
    }
    setPageContent(con) {
        this.element.innerHTML = (con);
    }
    start(ch) {
        // fix hash
        if (location.hash.length === 0) {
            location.hash = "/";
        }
        else {
            // else hash is set, go to that
            this.gotoPage(location.hash.substring(1));
        }
        // set new root element
        if (ch instanceof Element) {
            this.element = ch;
        }
    }
}
