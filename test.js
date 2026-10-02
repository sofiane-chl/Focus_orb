// pour faire un commentaire, on utilise //
console.log("Hello World");


let nombre = 10;
nombre = 20;
console.log(nombre);

// primitives types de données
// string, number, boolean, null, undefined, symbol, bigint

// string
const nom = "John";
console.log(nom);

// number
const age = 20;
console.log(age);

// boolean true or false
const isStudent = true;
console.log(isStudent);

// null
const nothing = null;
console.log(nothing);

// undefined
const undefinedVariable = undefined;
console.log(undefinedVariable);

// symbol
const symbol = Symbol("symbol");
console.log(symbol);

// bigint
const bigNumber = 123456789012345678901234567890n;
console.log(bigNumber);



console.log(typeof age);
console.log(typeof isStudent);
console.log(typeof nothing);
console.log(typeof undefinedVariable);
console.log(typeof symbol);
console.log(typeof bigNumber);

console.log(typeof ("42" + 1));


const pilotName = "Wedge";
const topSpeed = 1050;
console.log(pilotName + " is flying at " + topSpeed + " km/h");
console.log(`${pilotName} is flying at ${topSpeed} km/h`);


let liste = [1, 2, 3, 4, 5];
console.log(liste.length);

let objet = {
    nom: "John",
    age: 20,
    isStudent: true
}
console.log(objet);

let objet2 = {
    nom: "Jane",
    age: 21,
    isStudent: false
}

function add(a, b) {
    return a + b;
}