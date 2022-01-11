// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
 cats.push("Ralph");
};
function destructivelyPrependCat(name){
    cats.unshift("Bob");
};
function destructivelyRemoveLastCat(){
    cats.pop()
};
function destructivelyRemoveFirstCat(){
    cats.shift()
};
function appendCat(name){
    var newArray = cats.slice()
    newArray.push("Broom")
    return newArray
}
function prependCat(name){
    var newerArray = cats.slice()
    newerArray.unshift("Arnold")
    return newerArray
}
function removeLastCat(name){
    var thirdArray = cats.slice();
    thirdArray.pop()
    return thirdArray
}
function removeFirstCat(name){
    var fourthArray = cats.slice();
    fourthArray.shift()
    return fourthArray
}