/*
* @author Nektro (Sean Denny)
* Copyright (c) 2016
*/
(function() {
    var keyStates = new Set();

    window.addEventListener('keydown', (e) => {
        keyStates.add(e.keyCode);
    });
    window.addEventListener('keyup', (e) => {
        keyStates.delete(e.keyCode);
    });
    /**
     * Adds two numbers
     * @param {Number} a key ID
     * @return {Boolean} whether or not the specified key is currently being pressed
     */
    window.isKeyDown = function(k) {
        return keyStates.has(k);
    };
})();
