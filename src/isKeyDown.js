/*
* @author Nektro (Sean Denny)
* Copyright (c) 2016
*/
(function() {
    var keyStates = {};

    window.addEventListener('keydown', (e) => {
        keyStates[`k${e.keyCode}`] = true;
    });
    window.addEventListener('keyup', (e) => {
        keyStates[`k${e.keyCode}`] = false;
    });
    /**
     * Adds two numbers
     * @param {Number} a key ID
     * @return {Boolean} whether or not the specified key is currently being pressed
     */
    window.isKeyDown = function(k) {
        var v = keyStates[`k${k}`];

        if (v !== undefined)
            if (v === true)
                return true;

        return false;
    };
})();
