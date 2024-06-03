//video 1 creation des variables
var a = 4, b = 8, c = 5, result;
//video 2 declarer, initiliaser et nommer des variables : on peut utiliser le undercorde, des chiffres, dollar, caractere specieux pour nommer

//video 3 operateur mathematique
result = (a + b) * c;
console.log("la somme de (a+b)*c est:" + result);

//video 4 addition et concatenation
var e = "9"
var aNum = Number(a), eNum = Number(e)
result = aNum + eNum
console.log(result);

//video 5 revisiter chaine de caractere
var firstName = "Mamadou"
console.log(firstName.length);//la proprieté lenght permet de renvoyer la chaine de caractere 

var lastName = "doucoure"
console.log(lastName.toUpperCase());// la methode toUpperCase() qui permet de convertir la chaine de caractere tout en majuscule et toLowerCase() en miniscule

result = firstName + " " + lastName
console.log(result);

//video 6 travailler avec des chaine des caractere

var phrase = "Je suis bakeliste :\"en programmation\"."

console.log(phrase);

//video 7 declararer avec la variable const
 const Name = "doucoure";
console.log(typeof(Name));

//video 8 Apprendre les operateurs de comparaison
var a = 2, b = 1;

if (a == b) {
    console.log('la reponse à la question est "true".');
}else{
    console.log('la reponse à la question est "false".');
}
