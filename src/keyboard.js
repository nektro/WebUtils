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
        },
        areKeysDown: function(ka) {
        },
        getKeyMap: function() {
        }
    };
})();
