'use strict';
/*
 * @author Nektro (Sean Denny)
 * Copyright (c) 2017
 */
class Router {
    constructor(r, ops) {
        const options = Object.assign({}, {extension:'.html'}, ops || {});
        this.root = r;
        this.cache = new Map();
        this.extension = options.extension;
        this.element = document.body;
        window.addEventListener('hashchange', (e) => {
            this.gotoPage(e.newURL.substring(e.newURL.indexOf('#') + 1));
        });
    }
    resolveFileName(rt) {
        return [rt];
    }
    getFileName(pn) {
        let rsn = this.resolveFileName(pn);
        if (rsn !== undefined) return Promise.resolve(rsn);
        return Promise.resolve([`/blank`]);
    }
    processFile(src) {
        return src;
    }
    __getPage(pn, ops) {
        if (this.cache.has(pn)) {
            return Promise.resolve([this.cache.get(pn),ops]);
        }
        return fetch(`${this.root}/pages${pn}${this.extension}`).then((r) => {
            if (r.status === 200) return r.text();
            return this.getPage(`/blank`);
        })
        .then((r) => {
            const p = this.processFile(r);
            this.cache.set(pn, p);
            return Promise.resolve([p,ops]);
        });
    }
    getPageContent(p) {
        return this.getFileName(p).then((x) => {
            return this.__getPage(...x);
        });
    }
    gotoPage(pn) {
        this.getPageContent(pn).then((x) => {
            this.setPageContent(...x);
        });
    }
    setPageContent(con) {
        this.element.innerHTML = `${con}`;
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
