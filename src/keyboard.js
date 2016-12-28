(function() {
    var KeyStates = new Map();
    window.addEventListener('keydown', (e) => {
        keyStates.set(e.keyCode, 1);
    });
    window.addEventListener('keyup', (e) => {
        keyStates.set(e.keyCode, 0);
    });
    
    window.KeyHelp = {
        codes: {
        },
        isKeyDown: function(k) {
            if (keyStates.has(k))
                if (keyStates.get(k) === 1)
                    return true;
            return false;
        },
        areKeysDown: function(ka) {
            for (var y in ka)
                if (keyStates.has(y))
                    if (keyStates.get(y) === 0)
                        return false;
            return true;
        },
        getKeyMap: function() {
            return keyStates;
        }
    };
})();
