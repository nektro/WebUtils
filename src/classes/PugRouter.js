'use strict';
/*
 * @author Nektro (Sean Denny)
 * Copyright (c) 2017
 */
class PugRouter {
    constructor(r, pa) {
        this.root = r;
        this.pages = pa || new Array();
        this.pages.push('/');
        this.cache = new Map();
        window.addEventListener('hashchange', (e) => {
            this.gotoPage(e.newURL.substring(e.newURL.indexOf('#') + 1));
        });
    }
    resolveFileName(rt) {
        if (this.pages.indexOf(rt) > -1) return `${rt}.pug`;
    }
    getPugFileName(pn) {
        if (pn === '/') return Promise.resolve('/index.pug');
        let rsn = this.resolveFileName(pn);
        if (rsn !== undefined) return Promise.resolve(rsn);
        return Promise.resolve('/blank.pug');
    }
    getPageContent(p) {
        return this.getPugFileName(p).then((pl) => {
            if (this.cache.has(pl)) {
                return Promise.resolve(this.cache.get(pl));
            }
            else {
                return fetch(`${this.root}/pages${pl}`).then((x) => { return x.text() }).then((x) => {
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
