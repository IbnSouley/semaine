//video 16 l'objet array est utilisé pour stocker +sieurs valeurs
let colors = ["rouge", "Vert", "Bleu"];

console.log(colors.length);//renvoie la longueur de l'array
console.log(colors.join());// permet de joindre different element ensemble pour creer un chaine de caractere
colors.push("Orange"); //La methode push permet d'ajouter un element à la fin de l'array. La methode unshift pour le debut de l'array, la methode shif() permet de retirer la premiere element de l'array, methode pop() pour supprimer la derniere element et enfin reverse() pour inverser
console.log(colors);

//Declarer les variables
var mois = ['janvier', 'fevrier', 'mars', 'avril', 'mai', 'juin', 'juillet'];
console.log(mois);

//Retirer le dernier valeur du tableau mois
mois.pop();
console.log(mois);

//Afficher les valeurs du tableau en utilisant la methode document.write
document.write("Janvier, Fevrier, Mars, Avril, Mai, Juin, Juillet");

//Ajouter la valeur aout à la fin du tableau

mois.push("aout");
console.log(mois);

//Remplacer la valeur 'fevrier' par 'fevrier'
mois.splice(1, 1, 'fevrier');
console.log(mois);

//Afficher le nombre de valeurs du tableau en utilisant document.write
document.write(" le nombre de valeurs du tableau est :" + mois.length);

//Afficher la troisieme valeur du tableau
document.write(" la troisieme valeur du mois est : " + mois[2]);
