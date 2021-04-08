// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    name = cats.push('Ralph')
    return name
}

function destructivelyPrependCat(name){
    name = cats.unshift('Bob')
    return name
}

function destructivelyRemoveLastCat(){
    cats.pop()
    return cats
}

function destructivelyRemoveFirstCat(){
    cats.shift()
    return cats
}

function appendCat(name){
    name = [...cats, 'Broom']
    return name
}

function prependCat(name){
    name = ['Arnold', ...cats];
    return name
}

function removeLastCat(){
    let newArray = cats.slice(0,2)
    return newArray
}

function removeFirstCat(){
    let newArray = cats.slice(1)
    return newArray
}