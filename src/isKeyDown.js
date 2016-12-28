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
     * @param {Number} a key ID
     * @return {Boolean} whether or not the specified key is currently being pressed
     */
    window.isKeyDown = function(k) {
        if (keyStates.has(k))
            if (keyStates.get(k) === 1)
                return true;
        return false;
    };
    /**
     * @param {Array<Number>} an array of key IDs
     * @return {Boolean} whether or not all of the keys in the array are being pressed
     */
    window.areKeysDown = function(ka) {
        for (var y in ka)
            if (keyStates.has(y))
                if (keyStates.get(y) === 0)
                    return false;
        return true;
    };
})();
