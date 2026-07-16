import * as circleFunctions from "./math.js" // import everything, circleFunctions is an object that holds all exported members

let radius=10;

circleFunctions.default()  // greet is a default export, not a named export, so with import * as, it's available as circleFunctions.default, not circleFunctions.greet.

console.log(circleFunctions.findcircumference(radius))

console.log(circleFunctions.findDiameter(radius))

console.log(circleFunctions.findArea(radius))

