//chaine de caractere
let x; 

const nom = 'DOUCOURE';
const age = 28;

x = "Bonjour, mon nom est " + nom + " et j'ai " + age + " ans";

//Template Litteral
x = `Bonjour, je suis ${nom} et j'ai ${age} ans`;

console.log(x);

//chaine de caractere propriete et methode
const s = new String('Hello World!');

x = typeof s;

x = s.length;

//Acces valeur par clé
x = s[0];

x = s.__proto__;
//magiscule
x = s.toUpperCase();
//minuscule
x = s.toLowerCase();
//permet d'afficher les lettres
x = s.charAt(0);
//permet d'afficher les chiffres
x = s.indexOf('e');
//permet d'afficher le mot hell
x = s.substring(0,4);

x.slice(-11, -6);//ça ne marche pas

x = '      Hello World';
//regouper les mots en suprimant l'espace
x = x.trim();
//permet de remplacer hello par mamadou
x = s.replace('World', 'mamadou');
//permet de verifier si c'est vrai ou faux
x = s.includes('Hello');

x = s.valueOf();

x = s.split('');

console.log(x);

//Capitalize challenge

let myString = 'Doucoure';

let myNewString;

//solution 1 :
myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);
//solution 2 :
myNewString = myString[0].toUpperCase() + myString.substring(1);
//solution 3 :
myNewString = `${myString[0].toUpperCase() + myString.slice(1)}`;

console.log(myNewString);

//Working whith Number
