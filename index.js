const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat() {
    cats.push('Ralph')
}
function destructivelyPrependCat() {
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}
function appendCat() {
    const newCats = [...cats, "Broom"]
    return newCats;
}
function prependCat() {
    const moreCats = ["Arnold", ...cats]
    return moreCats;
}
function removeLastCat() {
    const removeLastCat = [
        ...cats.slice(0,-1)
    ]
    return removeLastCat;
}
function removeFirstCat() {
    const removeFirstCat = [
        ...cats.slice(1)
    ]
    return removeFirstCat;
}