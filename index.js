// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  return cats.push(name);
}

function destructivelyPrependCat(name) {
  return cats.unshift(name);
}

function destructivelyRemoveLastCat() {
  return cats.pop();
}

function destructivelyRemoveFirstCat() {
  return cats.shift();
}

function appendCat(name){
  let newArr = [...cats, name];
  return newArr;
}

function prependCat(name) {
  let newArr = [name, ...cats];
  return newArr;
} 

function removeLastCat() {
  let newArr = [...cats.slice(0, cats.length-1)];
  return newArr;
}

function removeFirstCat() {
  let newArr = [...cats.slice(1)];
  return newArr;
}