"use strict";
console.log("Hello World");
const code = { word: "target" };
const firstObject = { target: code };
const secondObject = Object.assign({}, firstObject);
secondObject.target.word = "Infiltrated";
console.log("First object: " + firstObject.target.word);
console.log("Second object: " + secondObject.target.word);
//# sourceMappingURL=Tester.js.map