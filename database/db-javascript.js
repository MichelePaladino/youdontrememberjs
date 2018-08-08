const javascript = [
  { 
    logo: 'js',
    question: `What is specificity? How do you calculate specificity?`,
    answer: `Specificity is a process of determining which css rule will be applied to an element. It determines which rules will take precedence.`,
    reference: `<a rel="noopener noreferrer" target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity">MDN: Specificity</a>
    <br/><a rel="noopener noreferrer" target="_blank" href="https://specificity.keegan.st/">Keegan: Specificity Calculator</a>`,
    id: 1,
  },
  { 
    logo: 'js',
    question: `Explain event delegation`,
    answer: `Event delegation is a technique involving adding event listeners to a parent element instead of adding them to the descendant elements. The listener will fire whenever the event is triggered on the descendant elements due to event bubbling up the DOM. The benefits of this technique are:
    <li>Memory footprint goes down because only one single handler is needed on the parent element, rather than having to attach event handlers on each descendant.</li>
    <li>There is no need to unbind the handler from elements that are removed and to bind the event for new elements.</li>`,
    reference: `<a rel="noopener noreferrer" target="_blank" href="https://davidwalsh.name/event-delegate">davidwalsh: Event Delegate</a>
    <br/><a rel="noopener noreferrer" target="_blank" href="https://stackoverflow.com/questions/1687296/what-is-dom-event-delegation">StackOverflow: What is DOM Event Delegation</a>`,
    id: 2,
  },
  { 
    logo: 'js',
    question: `Explain how <strong>this</strong> works in JavaScript`,
    answer: `A hand-wavey explanation is that the value of this depends on how the function is called. 
    <li>If the new keyword is used when calling the function, this inside the function is a brand new object.</li>
    <li>If apply, call, or bind are used to call/create a function, this inside the function is the object that is passed in as the argument.</li>
    <li>If a function is called as a method, such as obj.method() — this is the object that the function is a property of.</li>
    <li>If a function is invoked as a free function invocation, meaning it was invoked without any of the conditions present above, this is the global object. In a browser, it is the window object. If in strict mode ('use strict'), this will be undefined instead of the global object.</li>
    <li>If multiple of the above rules apply, the rule that is higher wins and will set the this value.</li>
    <li>If the function is an ES2015 arrow function, it ignores all the rules above and receives the this value of its surrounding scope at the time it is created.</li>`,
    reference: `<a rel="noopener noreferrer" target="_blank" href="https://codeburst.io/the-simple-rules-to-this-in-javascript-35d97f31bde3">Arnav Aggrawal: The simple rules to this in JavaScript</a>
    <br/><a rel="noopener noreferrer" target="_blank" href="https://stackoverflow.com/a/3127440/1751946">StackOverflow: How does the “this” keyword work?</a>`,
    id: 3,
  },
  { 
    logo: 'js',
    question: `Explain how prototypal inheritance works`,
    answer: `This is an extremely common JavaScript interview question. All JavaScript objects have a prototype property, that is a reference to another object. When a property is accessed on an object and if the property is not found on that object, the JavaScript engine looks at the object's prototype, and the prototype's prototype and so on, until it finds the property defined on one of the prototypes or until it reaches the end of the prototype chain. This behavior simulates classical inheritance, but it is really more of delegation than inheritance.`,
    reference: `<a rel="noopener noreferrer" target="_blank" href="https://www.quora.com/What-is-prototypal-inheritance/answer/Kyle-Simpson">Quora: Kyle Simpson, What is prototypal inheritance?</a>
    <br/><a rel="noopener noreferrer" target="_blank" href="https://davidwalsh.name/javascript-objects">davidwalsh: JavaScript Objects</a>`,
    id: 4,
  },
  { 
    logo: 'js',
    question: `What do you think of AMD vs CommonJS?`,
    answer: `Both are ways to implement a module system, which was not natively present in JavaScript until ES2015 came along. CommonJS is synchronous while AMD (Asynchronous Module Definition) is obviously asynchronous. CommonJS is designed with server-side development in mind while AMD, with its support for asynchronous loading of modules, is more intended for browsers.
    I find AMD syntax to be quite verbose and CommonJS is closer to the style you would write import statements in other languages. Most of the time, I find AMD unnecessary, because if you served all your JavaScript into one concatenated bundle file, you wouldn't benefit from the async loading properties. Also, CommonJS syntax is closer to Node style of writing modules and there is less context-switching overhead when switching between client side and server side JavaScript development.
    I'm glad that with ES2015 modules, that has support for both synchronous and asynchronous loading, we can finally just stick to one approach. Although it hasn't been fully rolled out in browsers and in Node, we can always use transpilers to convert our code.`,
    reference: `<a rel="noopener noreferrer" target="_blank" href="https://auth0.com/blog/javascript-module-systems-showdown/">auth0: JavaScript Module Systems Showdown</a>
    <br/><a rel="noopener noreferrer" target="_blank" href="https://stackoverflow.com/questions/16521471/relation-between-commonjs-amd-and-requirejs">StackOverflow: Relation between CommonJS, AMD and RequireJS</a>`,
    id: 5,
  },
  { 
    logo: 'js',
    question: `Explain why the following doesn't work as an IIFE: <strong>function foo(){ }();</strong>. What needs to be changed to properly make it an IIFE?`,
    answer: `IIFE stands for Immediately Invoked Function Expressions. The JavaScript parser reads function foo(){ }(); as function foo(){ } and ();, where the former is a function declaration and the latter (a pair of brackets) is an attempt at calling a function but there is no name specified, hence it throws Uncaught SyntaxError: Unexpected token ).

    Here are two ways to fix it that involves adding more brackets: (function foo(){ })() and (function foo(){ }()). These functions are not exposed in the global scope and you can even omit its name if you do not need to reference itself within the body.`,
    reference: `<a rel="noopener noreferrer" target="_blank" href="http://lucybain.com/blog/2014/immediately-invoked-function-expression/">lucybain: IIFE</a>`,
    id: 6,
  },
  { 
    logo: 'js',
    question: `What is a closure, and how/why would you use one?`,
    answer: `A closure is the combination of a function and the lexical environment within which that function was declared. The word "lexical" refers to the fact that lexical scoping uses the location where a variable is declared within the source code to determine where that variable is available. Closures are functions that have access to the outer (enclosing) function's variables—scope chain even after the outer function has returned.
    <br/>Why would I use one?
    <li>Data privacy / emulating private methods with closures. Commonly used in the module pattern.</li>
    <li>Partial applications or currying.</li>`,
    reference: `<a rel="noopener noreferrer" target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures">MDN: Closures</a>
    <br/><a rel="noopener noreferrer" target="_blank" href="https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36">medium: What's a closure</a>`,
    id: 7,
  },
  { 
    logo: 'js',
    question: `Can you describe the main difference between a .forEach loop and a .map() loop and why you would pick one versus the other?`,
    answer: `To understand the differences between the two, let's look at what each function does.
    <br/><br/><strong>forEach</strong>
    <li>Iterates through the elements in an array.</li>
    <li>Executes a callback for each element.</li>
    <li>Does not return a value.</li>
    <br/>const a = [1, 2, 3];
    <br/>const doubled = a.forEach((num, index) => {
    <br/>&nbsp;&nbsp;&nbsp;&nbsp;// Do something with num and/or index.
    <br/>});
    <br/>// doubled = undefined
    <br/><br/><strong>map</strong>
    <li>Iterates through the elements in an array.</li>
    <li>"Maps" each element to a new element by calling the function on each element, creating a new array as a result.</li>
    <br/>const a = [1, 2, 3];
    <br/>const doubled = a.map(num => {
    <br/>&nbsp;&nbsp;&nbsp;&nbsp;return num * 2;
    <br/>});
    <br/>// doubled = [2, 4, 6]</li>
    <br/><br/>The main difference between .forEach and .map() is that .map() returns a new array. If you need the result, but do not wish to mutate the original array, .map() is the clear choice. If you simply need to iterate over an array, forEach is a fine choice.`,
    reference: `<a rel="noopener noreferrer" target="_blank" href="https://codeburst.io/javascript-map-vs-foreach-f38111822c0f">codeburst: Map vs forEach</a>`,
    id: 8,
  },
  { 
    logo: 'js',
    question: `How do you organize your code? (module pattern, classical inheritance?)`,
    answer: `In the past, I used Backbone for my models which encourages a more OOP approach, creating Backbone models and attaching methods to them.

    The module pattern is still great, but these days, I use React/Redux which utilize a single-directional data flow based on Flux architecture. I would represent my app's models using plain objects and write utility pure functions to manipulate these objects. State is manipulated using actions and reducers like in any other Redux application.
    
    I avoid using classical inheritance where possible. When and if I do, I stick to <a rel="noopener noreferrer" target="_blank" href='https://medium.com/@dan_abramov/how-to-use-classes-and-sleep-at-night-9af8de78ccb4'>these rules.</a>`,
    reference: ``,
    id: 9,
  },
  { 
    logo: 'js',
    question: `What's a typical use case for anonymous functions?`,
    answer: `They can be used in IIFEs to encapsulate some code within a local scope so that variables declared in it do not leak to the global scope.
    <br/><br/>(function() {
    <br/>&nbsp;&nbsp;&nbsp;&nbsp;// Some code here.
    <br/>})();
    <br/><br/>As a callback that is used once and does not need to be used anywhere else. The code will seem more self-contained and readable when handlers are defined right inside the code calling them, rather than having to search elsewhere to find the function body.
    <br/><br/>setTimeout(function() {
      <br/>&nbsp;&nbsp;&nbsp;&nbsp;console.log('Hello world!');
    <br/>}, 1000);
    <br/><br/>Arguments to functional programming constructs or Lodash (similar to callbacks).
    <br/><br/>const arr = [1, 2, 3];
    <br/>const double = arr.map(function(el) {
      <br/>&nbsp;&nbsp;&nbsp;&nbsp;return el * 2;
    <br/>});
    <br/>console.log(double); // [2, 4, 6]`,
    reference: `<a rel="noopener noreferrer" target="_blank" href="https://www.quora.com/What-is-a-typical-usecase-for-anonymous-functions">Quora: What's a typical usecase for anonymous functions?</a>
    <br/><a rel="noopener noreferrer" target="_blank" href="https://stackoverflow.com/questions/10273185/what-are-the-benefits-to-using-anonymous-functions-instead-of-named-functions-fo">StackOverflow: What are the benefits to using anonymous functions instead of named functions for callbacks and parameters in JavaScript event code?</a>`,
    id: 10,
  },
  { 
    logo: 'js',
    question: `What's the difference between host objects and native objects?`,
    answer: `Native objects are objects that are part of the JavaScript language defined by the ECMAScript specification, such as String, Math, RegExp, Object, Function, etc.
    <br/>Host objects are provided by the runtime environment (browser or Node), such as window, XMLHTTPRequest, etc.`,
    reference: `<a rel="noopener noreferrer" target="_blank" href="https://stackoverflow.com/questions/7614317/what-is-the-difference-between-native-objects-and-host-objects">StackOverflow: What's the difference between native objects and host objects?</a>`,
    id: 11,
  },
  { 
    logo: 'js',
    question: `Difference between: function Person(){}, var person = Person(), and var person = new Person()?`,
    answer: `This question is pretty vague. My best guess at its intention is that it is asking about constructors in JavaScript. Technically speaking, function Person(){} is just a normal function declaration. The convention is to use PascalCase for functions that are intended to be used as constructors.
    <br/><br/>var person = Person() invokes the Person as a function, and not as a constructor. Invoking as such is a common mistake if it the function is intended to be used as a constructor. Typically, the constructor does not return anything, hence invoking the constructor like a normal function will return undefined and that gets assigned to the variable intended as the instance.
    <br/><br/>var person = new Person() creates an instance of the Person object using the new operator, which inherits from Person.prototype. An alternative would be to use Object.create, such as: Object.create(Person.prototype).
    <br/><br/><br/>function Person(name) {
      <br/>&nbsp;&nbsp;&nbsp;&nbsp;this.name = name;
    <br/>}
    
    <br/><br/>var person = Person('John');
    <br/>console.log(person); // undefined
    <br/>console.log(person.name); // Uncaught TypeError: Cannot read property 'name' of undefined
    
    <br/><br/>var person = new Person('John');
    <br/>console.log(person); // Person { name: "John" }
    <br/>console.log(person.name); // "john"`,
    reference: `<a rel="noopener noreferrer" target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new">MDN: new operator</a>`,
    id: 12,
  },
  { 
    logo: 'js',
    question: `What's the difference between .call and .apply?`,
    answer: `Both .call and .apply are used to invoke functions and the first parameter will be used as the value of this within the function. However, .call takes in comma-separated arguments as the next arguments while .apply takes in an array of arguments as the next argument. An easy way to remember this is C for call and comma-separated and A for apply and an array of arguments.
    <br/><br/>function add(a, b) {
      <br/>&nbsp;&nbsp;&nbsp;&nbsp;return a + b;
    <br/>}

    <br/>console.log(add.call(null, 1, 2)); // 3
    <br/>console.log(add.apply(null, [1, 2])); // 3`,
    reference: ``,
    id: 13,
  },
  { 
    logo: 'js',
    question: `Explain Function.prototype.bind.`,
    answer: `Taken word-for-word from MDN:
    <br/>"The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called".
    <br/><br/>
    In my experience, it is most useful for binding the value of this in methods of classes that you want to pass into other functions. This is frequently done in React components.`,
    reference: `<a rel="noopener noreferrer" target="_blank" href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_objects/Function/bind">MDN: Bind</a>`,
    id: 14,
  },
  { 
    logo: 'js',
    question: `Explain Ajax in as much detail as possible`,
    answer: `Ajax (asynchronous JavaScript and XML) is a set of web development techniques using many web technologies on the client side to create asynchronous web applications. With Ajax, web applications can send data to and retrieve from a server asynchronously (in the background) without interfering with the display and behavior of the existing page. By decoupling the data interchange layer from the presentation layer, Ajax allows for web pages, and by extension web applications, to change content dynamically without the need to reload the entire page. In practice, modern implementations commonly substitute use JSON instead of XML, due to the advantages of JSON being native to JavaScript.
    <br/>The XMLHttpRequest API is frequently used for the asynchronous communication or these days, the fetch API.`,
    reference: `<a rel="noopener noreferrer" target="_blank" href="https://en.wikipedia.org/wiki/Ajax_(programming)">wikipedia: Ajax</a>
    <br/><a rel="noopener noreferrer" target="_blank" href="https://developer.mozilla.org/en-US/docs/AJAX">MDN: Ajax</a>`,
    id: 15,
  },
  { 
    logo: 'js',
    question: `What are the advantages and disadvantages of using Ajax?`,
    answer: `<strong>Advantages</strong>
    <li>Better interactivity. New content from the server can be changed dynamically without the need to reload the entire page.</li>
    <li>Reduce connections to the server since scripts and stylesheets only have to be requested once.</li>
    <li>State can be maintained on a page. JavaScript variables and DOM state will persist because the main container page was not reloaded.</li>
    <li>Basically most of the advantages of an SPA.</li>

    <br/><strong>Disadvantages</strong>
    
    <li>Dynamic webpages are harder to bookmark.</li>
    <li>Does not work if JavaScript has been disabled in the browser.</li>
    <li>Some webcrawlers do not execute JavaScript and would not see content that has been loaded by JavaScript.</li>
    <li>Basically most of the disadvantages of an SPA.</li>`,
    reference: ``,
    id: 16,
  },
  { 
    logo: 'js',
    question: `Explain "hoisting"`,
    answer: `Hoisting is a term used to explain the behavior of variable declarations in your code. Variables declared or initialized with the var keyword will have their declaration "moved" up to the top of the current scope, which we refer to as hoisting. However, only the declaration is hoisted, the assignment (if there is one), will stay where it is.
    <br/><br/>Note that the declaration is not actually moved - the JavaScript engine parses the declarations during compilation and becomes aware of declarations and their scopes. It is just easier to understand this behavior by visualizing the declarations as being hoisted to the top of their scope. Let's explain with a few examples.
    
    <br/><br/>// var declarations are hoisted.
    <br/>console.log(foo); // undefined
    <br/>var foo = 1;
    <br/>console.log(foo); // 1
    
    <br/><br/>// let/const declarations are NOT hoisted.
    <br/>console.log(bar); // ReferenceError: bar is not defined
    <br/>let bar = 2;
    <br/>console.log(bar); // 2
    
    <br/><br/><br/>Function declarations have the body hoisted while the function expressions (written in the form of variable declarations) only has the variable declaration hoisted.
    
    <br/><br/> // Function Declaration
    <br/>console.log(foo); // [Function: foo]
    <br/>foo(); // 'FOOOOO'
    <br/>function foo() {
      <br/>&nbsp;&nbsp;&nbsp;&nbsp;console.log('FOOOOO');
    <br/>}
    <br/>console.log(foo); // [Function: foo]
    
    <br/><br/> // Function Expression
    <br/>console.log(bar); // undefined
    <br/>bar(); // Uncaught TypeError: bar is not a function
    <br/>var bar = function() {
      <br/>&nbsp;&nbsp;&nbsp;&nbsp;console.log('BARRRR');
    <br/>};
    <br/>console.log(bar); // [Function: bar]`,
    reference: ``,
    id: 17,
  },
  { 
    logo: 'js',
    question: `Describe event bubbling`,
    answer: `When an event triggers on a DOM element, it will attempt to handle the event if there is a listener attached, then the event is bubbled up to its parent and the same thing happens. This bubbling occurs up the element's ancestors all the way to the document. Event bubbling is the mechanism behind event delegation.`,
    reference: `<a rel="noopener noreferrer" target="_blank" href="https://javascript.info/bubbling-and-capturing">javascript.info: Bubbling and Capturing</a>
    <br/><a rel="noopener noreferrer" target="_blank" href="https://medium.com/@vsvaibhav2016/event-bubbling-and-event-capturing-in-javascript-6ff38bec30e">medium: Even Bubbling and Event Capturing in JavaScript</a>`,
    id: 18,
  },
]

module.exports.javascript = javascript