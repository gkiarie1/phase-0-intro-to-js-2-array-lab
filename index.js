// Write your solution here!
let cats=["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(){
  cats.push("Ralph");
}


function destructivelyPrependCat(){
  cats.unshift('Bob');
}


function destructivelyRemoveLastCat(){
  cats.pop();
}

function destructivelyRemoveFirstCat(){
  cats.shift();
}

function appendCat(name){
  const newCats= [...cats,name];
  return newCats;
}


function prependCat(name){
  const firstCat=[name,...cats];
  return firstCat
  
}

function removeLastCat(){
  return cats.slice(0,-1);
}
const myCats=removeLastCat();

function removeFirstCat(){
  return cats.slice(1);
}
const lastCats=removeFirstCat();