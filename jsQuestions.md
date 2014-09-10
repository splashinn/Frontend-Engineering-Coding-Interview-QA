## JavaScript Questions:
==========

### Explain event delegation

**google**: avoid event been added to specific node, instead been added to parent node, and find the specific child node in event bubbling on that parent.

benefit:

1. if append a new child node, no need to rebind another event. new DOM can be created dynamically on the fly.
2. less event binding, save memory, especially for webapps.


### Explain how `this` works in JavaScript

**try**: this refers the current object. when it is used in a function. this associate with the object where the function is invoked.

**google**: evaluates to the value of the ThisBinding of the current execution context. if function is all by `obj.func()`, this will refer to `obj`, if `func.call(obj)` (apply, bind), this refer to `obj`, otherwise, refers to `window`


### Explain how prototypal inheritance works

**try**: assign objectA's prototype to another objectB. it makes inheritance happened. In another word, if property is not found in objectA, it will go to objectB in the use of JavaScript's prototype-chaining mechanism, So if still not found in objectB, JavaScript will go to objectB's prototype, say, Object till the end.


### How do you go about testing your JavaScript

**try**: simplest way is console.log(); or better ways like a assert function that log different message by boolean argument, or using a test framework like Jasmine to write test case first. like Behavior-driven development.

**google**: first write unit testable code, then use testing framework like QUnit to write unit test case.
> http://coding.smashingmagazine.com/2012/06/27/introduction-to-javascript-unit-testing/


### AMD vs. CommonJS?

**try**: they different stardard for js module loader, AMD is aync load, good for browser side environment, like RequireJS. CommonJS use sync approche, good for server-side js module loading, used by Node.js module.

**google**: AMD use `exports` objects to expose the API of a module, use `require()` to fetch dependency. RequireJS use `define()` to decare dependency before been loaded.


### What's a hashtable?

**try**: hashtable is a associated array, a set of key-value pair. every object in js is a hashtable.

**google**: used by table['key'] or table.key, different is key can be dynamically generated in the first approche.


### Explain why the following doesn't work as an IIFE: function foo(){ }();.
#### What needs to be changed to properly make it an IIFE?

**try**: because function foo(){ } will be first interpreted as a function declare, then the invoke symbol () will not refer that function. `(function foo(){})()` will do.

**google**: function foo(){} is statement. It will not excuted like a expression. also, `()` will be a grouping operate without expression in it, so a SyntaxError will be thown. Any way that make parser think `function` is not statement but an expression will work it a IIFE, like
```javascript
(function foo(){})();
(function foo(){}());
var i = function foo(){}();
!function foo(){}();
true, function foo(){}();
new function(){}();
```


### What's the difference between a variable that is: null, undefined or undeclared?
#### How would you go about checking for any of these states?

**try**: null is define variable be not assigned to any value. undefined happend when refering to a variable not exist. to check null, use `myVal == null`, to check undefined, use `typeof myVal == 'undefined'`.

**google**:  `null` is the assignment value of variable, it can be assign to variable as a reprsentation of no value. `undefined` is type of an declared varialbe that has not yet been assign to a value. `undeclared` means the variable does not exist at all, which will cause error.
aside: `undefined` is also a global variable that can be modified. So lots of library rewrite the `library` in case it is been modified.


### What is a closure, and how/why would you use one?

**try**: closure is a function inside another function. inner function can get access to outer function, but outer cannot. If inner funnction that is using outer function's variable is being used, the variable in the outer function will stay in memory even it is returned. Besides, property in the outer function cannot be accessed directly from outside, only by the inner function. This feature comes to the hidden property.

**google**: a closure is a function called in one context that remembers variables defined in another context – the context in which it was defined. Besides, it is unwise to unnecessary defined function inside a function, because it waste speed and memory.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures


### What's a typical use case for anonymous functions?

**try**: solove the loop error.

```javascript
// problem
var obj = {};
for (var i = 0; i < 10; i++ ) {
	obj[i] = function(){
		console.log("ret: " + i);
	};
}
obj[0]();

// correction
var obj = {};
for (var i = 0; i < 10; i++ ) {
	obj[i] = (function(index){
		return function(){
			console.log("ret: " + index);
		}
	})(i);
}
obj[0]();

```


### Explain the "JavaScript module pattern" and when you'd use it.
#### Bonus points for mentioning clean namespacing.
#### What if your modules are namespace-less?

**try**: module pattern is a way to better orginize JavaScript code. It break code into a bunch of module. It take advantage of IFEE to have private property. Private vaialble is under the namespace of the module in side a IFEE function scope in this case. if use object literal, namespace will be the object.
If namspace-less, global varible maybe polluted.


### How do you organize your code? (module pattern, classical inheritance?)

module pattern
```javascriptjavascript
var myModule = (function(){

	var privateVar = "abc";
	var privateMethod = function() {
		console.log(privateVar);
	};

	return {
		setVar: function(str) {
			privateVar = str;
		},
		getVar: function() {
			return privateVar;
		},
		printVar: privateMethod
	};

})();
```
classical inheritance
```javascript
function Person (name) {
	this.name = name;
}
Person.prototype.sayMyName = function() {
	console.log("My name is " + this.name);
};
Person.prototype.walk = function() {
	console.log("I am walking...");
};

function Student(name){
	Person.call( this, name );
}

Student.prototype = new Person();
// Student.prototype = Object.create(Person.prototype);

Student.prototype.read = function() {
	console.log("I am reading...");
};


var neil = new Student("neill");
neil.sayMyName();
neil.walk();
neil.read();
console.log(neil instanceof Student); // true
console.log(neil instanceof Person); // true
```


### What's the difference between host objects and native objects?

native objects are define by EMCAScript specification, like Object, Array, String
host objects are defined in the host environment, like windows, history, XMLHttpRequest, document


### Difference between: function Person(){}, var person = Person(), and var person = new Person()

function Person(){} is a function statement the declare a function. Or in term of classical inheritance, it is a constructor of a class.
var person = Person() is execute the Person function and assign the return value to person.
var person  = new Person() will create a new object and make object's prototype to Person's prototype (inheritance), and exec the Person function (constructor) in the scope of the new object. Then assign the return object to person. If not a object return, the new object to will be assigned to person.


### What's the difference between .call and .apply?
call receive arguements as ifinite length, apply receive argument as array.

### explain Function.prototype.bind
Function.prototype.bind bind the scope (this) of the function to the first arguement.

### When do you optimize your code?
when we have to deal with old browsers like IE6 IE7.

### Can you explain how inheritance works in JavaScript?
By prototype, if object did find data in itself, it will check its prototype. If still not found, check prototype's prototype till the final Object object.

### When would you use document.write()?
#### Most generated ads still utilize document.write() although its use is frowned upon
dyanmically load some JavsScript files, google analytics tool

### What's the difference between feature detection, feature inference, and using the UA string
modernizr

### Explain AJAX in as much detail as possible
use XMLHttpRequest object in JavaScript to send/receive data ayncly to sever.

### Explain how JSONP works (and how it's not really AJAX)
JSONP is just dynamically write a <script></script> tag to make a HTTP request with a customed function name in the url, and execute a customized function. server will send back a data (json) wrapped with the provided function name.

### Have you ever used JavaScript templating?
yes, mustache.js with backbone, jade on express

### If so, what libraries have you used? (Mustache.js, Handlebars etc.)
Mustache.js

### Explain "hoisting".
variable and function declaration will moved invisiblly to the top of the containing scope.

### Describe event bubbling.
event bubbling is a JavaScript event propagation in HTML DOM. when a event happened, say click, it will trigger from the element from the bottom up to find the binding element.

### What's the difference between an "attribute" and a "property"?
attribute refers to the literal attribute on HTML tags. property refers to properties of DOM object parsed from HTML tags by brower.

### Why is extending built in JavaScript objects not a good idea?
It will break the consistency of the default behavior of built in objects. Bad for large project.

### Why is extending built ins a good idea?
Well, convenient for developer on small project.

### Difference between document load event and document ready event?
load event happend when resources are all loaded. ready event happend when DOM have been parsed by browser.

### What is the difference between == and ===?

== is true when values can be regards as the same. like 1 == true, undefined == null
=== is truen when values are truely the same.

### Explain how you would get a query string parameter from the browser window's URL.
use regular expression

### Explain the same-origin policy with regards to JavaScript.
Ajax cannot request resources other than current domain.

### Describe inheritance patterns in JavaScript.
use Ojbect.create() to inheritance a Object, by prototype

### Make this work: javascript [1,2,3,4,5].duplicate(); // [1,2,3,4,5,1,2,3,4,5]
```javascript
// version 1
Array.prototype.duplicate = function() {
	var i = 0,
		arr = [];
		for (i = 0;i < this.length; i++) {
			arr.push(this[i]);
		};
		for (i = 0;i < this.length; i++) {
			arr.push(this[i]);
		};
		return arr;
}
// version 2en an "attribute" and a "property"?
Array.prototype.duplicate = function() {
	var i = 0,
		arr = this.join("");
		arr += arr;
		return arr.split("").map(function(v){
			return +v;
		});
}

// version 3;
Array.prototype.duplicate = function() {
	return this.concat(this);
}
```

### Describe a strategy for memoization (avoiding calculation repetition) in JavaScript.
memorization cache a function's result in the object, key as a argument.
> http://addyosmani.com/blog/faster-javascript-memoization/

### Why is it called a Ternary expression, what does the word "Ternary" indicate?
three, receiving three arguments for conditional operator

### What is the arity of a function?
length...

### What is "use strict";? what are the advantages and disadvantages to using it?
throw error when old feature of JavaScript is used. Better for code quality, avoid deprecated feature. disadvantages for less compatible.
