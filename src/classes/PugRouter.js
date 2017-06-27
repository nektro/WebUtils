'use strict';
/*
 * @author Nektro (Sean Denny)
 * Copyright (c) 2017
 */
class PugRouter {
    constructor(r, pa) {
        this.root = r;
        this.pages = pa;
        this.pages.push('/');
        this.cache = new Map();
        window.addEventListener('hashchange', (e) => {
            this.gotoPage(e.newURL.substring(e.newURL.indexOf('#') + 1));
        });
    }
    getPugFileName(pn) {
        if (pn === '/') return Promise.resolve('/index');
        if (this.pages.indexOf(pn) > -1) return Promise.resolve(pn);
        return Promise.resolve('/blank');
    }
    getPageContent(p) {
        return this.getPugFileName(p).then((pl) => {
            if (this.cache.has(pl)) {
                return Promise.resolve(this.cache.get(pl));
            }
            else {
                return fetch(`${this.root}/pages${pl}.pug`).then((x) => { return x.text() }).then((x) => {
                    let file = pug.compile(x)();
                    if (!(this.cache.has(pl))) this.cache.set(pl, file);
                    return Promise.resolve(file);
                });
            }
        });
    }
    gotoPage(pn) {
        this.getPageContent(pn).then((x) => {
            this.setPageContent(x);
        });
    }
    setPageContent(con) {
        document.body.innerHTML = con;
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
    }
}
