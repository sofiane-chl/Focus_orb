let texte = "Coffee crate";  // string

const persone ={
    name: "John",
    age: 30,
    city: "New York"
}

let tab = [1, 2, 3, 4, 5]; 

console.log(tab); 

persone.city = "Paris"; // maintenant la ville est "Paris"
console.log(persone);

// On peut aussi ajouter ou modifier d'autres propriétés :
persone.age = 35; // modification
persone.profession = "Développeur"; // ajout d'une nouvelle propriété

console.log(persone);

const balance = 12;
const deliveryFee = 6;
console.log(balance + deliveryFee);
