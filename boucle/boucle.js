//video 10 Utilisation des boucles
//boucle for
for (let i = 1; i < 10; i++) {
    console.log(`La valeur de la variable i est ${i}.`);
}
console.log("Boucle terminée !");

//boucle while
var a = 1;

while (a < 10) {
    console.log(`La valeur de la variable a est ${a}.`);
    a++;
}
console.log("Boucle terminée !");

//boucle do while
var b = 2
do {
    console.log(`La valeur de la variable b est ${b}.`);
    b++;
}while(b < 10)
    console.log("Boucle terminée !");

// boucle for each est une variable qui contient +sieurs donné
var colors = ["Rouge", "Vert", "Bleu"];
var person = {
    prenom : "Mamadou",
    nom : "Doucoure",
    age : 28,
    sexe : "M"
};

for (color in colors) {
    console.log(color);
    console.log(`Ma couleur préférée est le ${colors[color]}.`);
    
}

for (prop in person) {
    console.log(`La valeur de la clé ${prop} est ${person[prop]}`);
    
}