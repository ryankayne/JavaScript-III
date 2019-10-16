/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global/Window Binding
When using 'this' in the global scope, 'this' will refer to the window/console object. When it's used outside of any function, the console will display all the global properties in the console.

* 2. Implicit Binding
When you have an object that utilizes a method, you can use 'this' to refer to a function you will invoke at a later time. It's important to remember that it matters where the function is invoked, not where it is declared. The shortcut way to identify what function is being called is to look to the left of the '.' or 'dot' in the invocation, e.g. myFunction.test(); In this example, test would be the method 'this' is referring to. 

* 3. Explicit Binding
When using 'this' in this context, you will tell the function where exactly it needs to go to find the object 'this' is looking for. Explicit Binding takes advantage of several methods like call, apply, and bind to be able to tell where 'this' should reference despite where it was called. This can be helpful for callbacks. When using call and apply, it will immediately invoke the function, but when using bind, it can be invoked at a later time. 

* 4. New Binding 
When using the 'new' keyword, you construct a new, empty object and JS saves it as 'this'. You create a Constructor function (by using a capital first letter of the variable). When a function is invoked with the 'new' keyword, the 'this' keyword is being bound to the newly constructed object. 



*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

// Principle 2

// code example for Implicit Binding

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding