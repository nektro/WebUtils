function addScript(url,on) {
    var script = document.createElement('script');
    if (on !== undefined) script.addEventListener('load', function(e) { on(e); });
    script.async = false;
    script.setAttribute('src',url);
    document.head.appendChild(script);
}
