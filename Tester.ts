console.log("Hello World");

const code: any = {word: "target"};

const firstObject: any = {target: code};
const secondObject: any = {... firstObject};
secondObject.target.word = "Infiltrated";

console.log("First object: " + firstObject.target.word);
console.log("Second object: " + secondObject.target.word);