/**
 * Adds a <script> to the page
 * @param {String} url: the URL of the script file
 * @param {Function} [optional] on: a callback function for when the file has finsished loading
 */
function addScript(url,on) {
    var script = document.createElement('script');
    if (on !== undefined) script.addEventListener('load', function(e) { on(e); });
    script.async = false;
    script.setAttribute('src',url);
    document.head.appendChild(script);
}
/**
 * @param {Object} o: an object
 * @returns {Array} an array of prototypes defined by the Inheritance tree of {o}
 */
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
