//IIFE Immediately Invoked Function Execution
(function (num1,num2) {
    var result = num1 + num2
    console.log(result);
})(10, 12);

//fonction fléche
((num1,num2) => {
    var result = num1 + num2
    console.log(result);
})(14, 12);

//Envoyer des données dans une fonction
var a = 2, b = 3, result;

function addNumbers(num1, num2) {
    result = num1 + num2;
    console.log(result);
}

addNumbers(4, 6);
addNumbers(10, 5);

//retourner les donnees d'une fonction
function Numbers(numb1 = 2, numb2 = 4) {
    var result = numb1 + numb2;
    return result;
}

var addedNumbers = Numbers(14, 8);
console.log(addedNumbers);

//utiliser let pour declarer des variables
function add(num1, num2) {
    if (true) {
        let result = num1 + num2;
        console.log(result);
    }
}

add(5, 6);