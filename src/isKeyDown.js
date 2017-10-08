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
     * @param {Number} a key ID
     * @return {Boolean} whether or not the specified key is currently being pressed
     */
    window.isKeyDown = function(k) {
        return keyStates.has(k);
    };
    /**
     * @param {Array<Number>} an array of key IDs
     * @return {Boolean} whether or not all of the keys in the array are being pressed
     */
    window.areKeysDown = function(ka) {
        for (var y of ka)
            if (keyStates.has(y) === false)
				return false;
        return true;
    };
})();
