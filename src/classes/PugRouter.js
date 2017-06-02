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
        this.observer = new MutationObserver((ml) => {
            document.querySelectorAll(`a[href^="#"]`).forEach((v,i) => {
                v.addEventListener('click', (e) => {
                    this.gotoPage(v.getAttribute('href').substring(1));
                });
            });
        });
    }
    getPugFileName(pn) {
        if (pn === '/') return Promise.resolve('index');
        if (this.pages.indexOf(pn) > -1) return Promise.resolve(pn);
        return Promise.resolve('blank');
    }
    getPageContent(p) {
        return this.getPugFileName(p).then((pl) => {
            if (this.cache.has(pl)) {
                return Promise.resolve(this.cache.get(pl));
            }
            else {
                return fetch(`${this.root}/pages/${pl}.pug`).then((x) => { return x.text() }).then((x) => {
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
    start() {
        // fix hash
        if (location.hash.length === 0)
            location.hash = "/";
        // add listener
        // fix # links
        this.gotoPage(location.hash.substring(1));
        this.observer.observe(document.body, { childList:true });
    }
}
