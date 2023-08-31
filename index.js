const cats= ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name){
cats.push(name)
}
function destructivelyPrependCat(name){
cats.unshift(name)
}
function destructivelyRemoveFirstCat(){
cats.shift();}
function destructivelyRemoveLastCat(){
cats.pop();
}
function appendCat(name){
const copycats= [...cats, name];
return copycats
}
function prependCat(name){
const copycats= [name, ...cats]
return copycats
}
function removeFirstCat(name){
const copycats= cats.slice(1)
return copycats
}
function removeLastCat(name){
const copycats=cats.slice(0,-1)
return copycats
}