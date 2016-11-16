/*
* @author Nektro (Sean Denny)
* Copyright (c) 2016
*/
(function() {
    var keyStates = new Map();

    window.addEventListener('keydown', (e) => {
        keyStates.set(e.keyCode, 1);
    });
    window.addEventListener('keyup', (e) => {
        keyStates.set(e.keyCode, 0);
    });
    /**
     * Adds two numbers
     * @param {Number} a key ID
     * @return {Boolean} whether or not the specified key is currently being pressed
     */
    window.isKeyDown = function(k) {
        if (keyStates.has(k))
            if (keyStates.get(k) === 1)
                return true;
        return false;
    };
})();
