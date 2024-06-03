//video 16 l'objet array est utilisé pour stocker +sieurs valeurs
let colors = ["ROuge", "Vert", "Bleu"];

console.log(colors.length);//renvoie la longueur de l'array
console.log(colors.join());// permet de joindre different element ensemble pour creer un chaine de caractere
colors.push("Orange"); //La methode push permet d'ajouter un element à la fin de l'array. La methode unshift pour le debut de l'array, la methode shif() permet de retirer la premiere element de l'array, methode pop() pour supprimer la derniere element et enfin reverse() pour inverser
console.log(colors);