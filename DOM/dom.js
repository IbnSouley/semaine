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

//evenement
let galImages = document.querySelectorAll('#singleGallery img');
for(images of galImages){
    image.onclick = () => {
        alert("Bonjour !");
    }
}
//utiliser addEvenListener et l'evenement click
for(let i = 0; i < galImages.length; i++){
    let image = galImages[i];
    image.addEventListener('click', showSinglePict, false);
    
    image.addEventListener('click', () => {alert('Bonjour !')}, false);

    image.addEventListener('click', () => {alert('Au revoir !')}, false);

}

function showSinglePict(e) {
    let image = e.target;
    let imageContainer = document.getElementById('galleryContainer');
    let bigImage = imageContainer.querySelector('img');
    bigImage.src = image.src;
    imageContainer.classList.toggle('visible');
    imageContainer.addEventListener('click', closeSinglePict, false);
}

function closeSinglePict() {
    let imageContainer = document.getElementById('galleryContainer');
    imageContainer.classList.toggle('visible');
}
//Inspecter les proprietes des evenements
for(let i = 0; i < galImages.length; i++){
    let image = galImages[i];
    image.addEventListener('click', showSinglePict, false);
}

function showSinglePict(e){
    let image = e.target;
}