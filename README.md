# WebUtils
A collections of JavaScript libraries that help making web sites, apps, and games easier.

----
### general.js
<dl>
    <dt>addScript(url, callback)</dt>
    <dd>add a script located at {url} to the page and optionally run {callback} when script has finished loading</dd>
    
    <dt>getInheritance(o)</dt>
    <dd>returns an array containing the inheritance tree of an Object {o}</dd>
    
    <dt>solve(x, op, y)</dt>
    <dd>solve the math equation <em>x op y</em></dd>
</dl>

----
### keyboard.js
<dl>
    <dt>KeyHelp.isKeydown(key)</dt>
    <dd>return if the {key} is being being pressed down</dd>
    
    <dt>KeyHelp.areKeysDown(keyArry)</dt>
    <dd>return true if all of the keys in {keyArray} are pressed Down</dd>
    
    <dt>KeyHelp.getKeyMap()</dt>
    <dd>return an Array of all keys currently being pressed</dd>
    
    <dt>KeyHelp.codes</dt>
    <dd>Map of key names to key codes</dd>
</dl>

----
### geometry.js
Do 2D geometry with ease
* Point
* * constructor(x, y)
* * distanceTo(Point) : Number
* * add(Point) : this
* Circle
* * constructor(x, y, radius)
* * center() : Point
* * intersects(Point|Circle) : Boolean

----
### classes/Game.js
* GameObject
- - constructor()
- - addState(GameState)
- - gotoState(Number)
- - start()
- - next()
- GameState
- - constructor()
- - init()
- - update()
- - draw()
- - onKeyPressed()
- - onClick()

----
### classes/Loop.js
Keep count, never go out of bounds
- Loop
- - constructor(min, max, startValue)
- - inc()
- - dec()
- - get this.value

----
### classes/Looper.js
Call a function every certain amount of time __Requires Loop.js__
- Looper
- - constructor(min, max, start, framerate, function)
- - update() // must be called every frame
