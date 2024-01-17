const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const arrowLeft = document.querySelector ('.arrow_left');
const arrowRight = document.querySelector ('.arrow_right');
const bannerImg = document.querySelector ('.banner_img');
const tagLine = document.querySelector ('#banner p');
const dots = document.querySelector(`.dot`);

arrowLeft.addEventListener("click", move)
arrowRight.addEventListener("click", move)
dots.addEventListener(`click`, dot);
let compteur = 0;


function changeImg () {
	for (let i = 0; i < slides.length; i++) {
		compteur = 0;
	}
	bannerImg.src = `assets/images/slideshow/${slides[compteur] .image}`;
	tagLine.innerHTML = slides [compteur] .tagLine;
}

function dot() {
	for (let i = 0; i < dots.length; i++) {
		
	}
}

// Créer un évenement au click sur la flèche de gauche, puis le compteur passe à -1.
// pareil pour la flèche de droite sauf compteur passe à +1.
// appeler la fonction changeimg pour le changement img et tagline