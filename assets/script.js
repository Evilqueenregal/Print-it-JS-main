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
const bannerImg = document.querySelector ('.banner-img');
const tagLine = document.querySelector ('#banner p');
const dots = document.querySelector('.dots');


let compteur = 0;

function changeImg () {
	compteur++;
	if (compteur == slides.length) {
		compteur = 0
	};
	bannerImg.src = `./assets/images/slideshow/${slides[compteur].image}`;
	tagLine.innerHTML = slides[compteur].tagLine;
}

slides.forEach(slide => {
	const dot = document.createElement("div");
	dot.classList.add("dot");
	dots.appendChild(dot);
});

const dot = document.querySelectorAll('.dot');
dot[0].classList.add('dot_selected');

function changeDots() {
	dot.forEach(dot => dot.classList.remove('dot_selected'));
	dot[compteur].classList.add('dot_selected');
}

arrowLeft.addEventListener("click", ()=> {
	changeImg();
	changeDots();
})

arrowRight.addEventListener("click", ()=> {
	changeImg();
	changeDots();
})

// Créer un évenement au click sur la flèche de gauche, puis le compteur passe à -1.
// pareil pour la flèche de droite sauf compteur passe à +1.
// appeler la fonction changeimg pour le changement img et tagline 