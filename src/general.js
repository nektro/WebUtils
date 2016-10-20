function addScript(url,on) {
    var script = document.createElement('script');
    if (on !== undefined) script.addEventListener('load', function(e) { on(e); });
    script.async = false;
    script.setAttribute('src',url);
    document.head.appendChild(script);
}
function getInheritance(o) {
    var it = [];
    var p = o;
    while (p !== null) {
        if (p !== o)
            it.push(p);
        p = p.__proto__;
    }
    return it;
}
