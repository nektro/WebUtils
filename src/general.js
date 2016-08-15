/**
 * Adds a <script> to the page
 * @param {String} the URL of the script file
 * @param {Function} [optional] a callback function for when the file has finsished loading
 */
function addScript(url,on) {
    var script = document.createElement('script');
    if (on !== undefined) script.addEventListener('load', function(e) { on(e); });
    script.async = false;
    script.setAttribute('src',url);
    document.head.appendChild(script);
}
