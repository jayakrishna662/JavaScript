export default function greet(){ // Default export(only one for module)
  console.log("Welcome");
}

const pi=3.14;

function findcircumference(r){
  return 2*pi*r;
}

function findArea(r){
  return pi*r*r;
}

function findDiameter(r){
  return 2*r;
}

export {findcircumference, findArea, findDiameter} // Named exports

