//video 19 Le dom est une convention qui permet de manipuler les elements d'une page web
let header = document.getElementById('mainHeader');//permet d'aller chercher des elements dans la page grace à leur identifiant
let active = document.getElementsByClassName('active');
let links = document.getElementsByTagName('a');
let footer = document.getElementById('mainFooter');
let par = footer.getElementsByTagName('p')
console.log(par);

// //créer l'element a
// let elemA = document.createElement('a');
// //changer l'attribut href de l'element a 
// elemA.href = 'produits.html';
// //créer un textNode
// let linklabel = document.createTextNode('Produits');
// //ajouter le texte à l'element a 
// elemA.appendChild(linklabel);
// //créer un element li
// let elemLi = document.createElement('li');
// //ajouter l'element a à l'element li
// elemLi.appendChild(elemA);
// //rechercher l'element ul et y ajouter l'element li créer plus tot
// document.querySelector('#mainNav ul').appendChild(elemLi)

//Pour changer le backgroundImage
// let pageContent = document.getElementById('pageContent');
// pageContent.style.backgroundImage = 'url(image.png)'