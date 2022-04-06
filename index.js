// Write your solution here!



cats = ["Milo", "Otis", "Garfield"];



function cats() {
    cats.length = 0;

    return cats.push('Milo', 'Otis', 'Garfield');
}


function destructivelyAppendCat(name) {

    return cats.push(name);
}

function destructivelyPrependCat(name) {
    return cats.unshift(name)
}







function destructivelyRemoveLastCat(name) {

    return cats.pop();
}

function destructivelyRemoveFirstCat() {
    return cats.shift()
}



function appendCat(name) {
    let arr = [...cats, name];
    return arr;

}


function prependCat(name) {
    let arr = [name, ...cats];
    return arr;

}

function removeFirstCat() {

    return cats.slice(1);
}

function removeLastCat() {
    return cats.slice(0, cats.length - 1);
}




