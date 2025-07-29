// DÉROULE LES DETAILS D'UNE RUBRIQUE SUR LE CV

// Affecte l'écouteur d'évenement aux titres des rubriques sur le CV
for(let details of $('.details')) {
	details.parentElement.children[0].addEventListener('click', display_details);
	if(details.parentElement.children[1].classList.contains('h7')) {
		details.parentElement.children[1].addEventListener('click', display_details);
	}
	if(window.innerWidth <= 1200) {
		details.classList.add('close');
		details.parentElement.getElementsByTagName('svg')[0].classList.add('close');
	}
}

// Fonction pour dérouler ou ré-enrouler les détails d'une rubrique sur le CV
function display_details(event) {
	if (this.parentNode.getElementsByClassName('details')[0].classList.contains('close')) {
		this.parentNode.getElementsByClassName('details')[0].classList.remove('close');
		this.parentNode.getElementsByTagName('svg')[0].classList.remove('close');
	
	}
	else {
		this.parentNode.getElementsByClassName('details')[0].classList.add('close');
		this.parentNode.getElementsByTagName('svg')[0].classList.add('close');
	}
}












// CARTE ET MARQUEURS

let stepCounter = 1;

let cdtOverView = [46.310550, 2.735285];

// Initialisation de la carte

let mymap = L.map('map').setView([51.505, -0.09], 6);

// ajoute la carte satellite google map

googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
}).addTo(mymap);



// Récupère toutes les divs popups

let htmlPopups = $('.html-popups');



// Créer tous les marqueurs et popups

let paris12 = L.marker([48.8488116, 2.3805376]).addTo(mymap)
 	  .bindPopup(htmlPopups[0]);

let perreux = L.marker([48.8336844, 2.506668]).addTo(mymap)
    .bindPopup(htmlPopups[1]);
let amiens = L.marker([49.871637, 2.265072]).addTo(mymap)
    .bindPopup(htmlPopups[2]);

let clermont = L.marker([45.8268615,3.1178237]).addTo(mymap)
		.bindPopup(htmlPopups[3]);

let vietnam = L.marker([10.873816, 106.793540], ).addTo(mymap)
		.bindPopup(htmlPopups[4]);

let lyon = L.marker([45.781208, 4.871911]).addTo(mymap)
    .bindPopup(htmlPopups[5]);

let toulouse = L.marker([43.613955,1.4630624]).addTo(mymap)
 	  .bindPopup(htmlPopups[6]);

let paris18 = L.marker([48.8899409,2.3639158]).addTo(mymap)
		.bindPopup(htmlPopups[7]);

let salamanca = L.marker([40.9720652,-5.676327]).addTo(mymap)
		.bindPopup(htmlPopups[8]);





//Fonction bouton étape suivante

function fly_to_next_step(event){

	event.stopPropagation();	

	switch (stepCounter) {

		case 1:
		switch ($('.next-step')[0].textContent) {
			case "Commencer":
			$('.next-step')[0].textContent = "Suivant";
				break;

			case "Start":
			$('.next-step')[0].textContent = "Next";
				break;

			case "Inicie":
			$('.next-step')[0].textContent = "Siguiente"
				break;
		}

		mymap.flyTo(paris12.getLatLng(), 13);
		$("#paris12-popup").show();
		paris12.openPopup();
		stepCounter += 1;
			break;


  	case 2:
    mymap.flyTo(perreux.getLatLng(), 14);
		$("#perreux-popup").show();
  	perreux.openPopup();
		stepCounter += 1;
   	 	break;


  	case 3:
    mymap.flyTo(amiens.getLatLng(), 13);
		$("#amiens-popup").show();
    amiens.openPopup();
		stepCounter += 1;
   		break;


   	case 4:
   	mymap.flyTo(clermont.getLatLng(), 13);
		$("#clermont-popup").show();
   	clermont.openPopup();
		stepCounter += 1;
   		break;


  	case 5:
    mymap.flyTo(vietnam.getLatLng(), 7);
		$("#vietnam-popup").show();
    vietnam.openPopup();
		stepCounter += 1;
   	  break;


  	case 6:
    mymap.flyTo(lyon.getLatLng(), 13);
		$("#lyon-popup").show();
    lyon.openPopup();
		stepCounter += 1;
   	  break;


  	case 7:
    mymap.flyTo(toulouse.getLatLng(), 13);
		$("#toulouse-popup").show();
    toulouse.openPopup();
		stepCounter += 1;
   	  break;

   	case 8:
    mymap.flyTo(salamanca.getLatLng(), 10);
		$("#salamanca-popup").show();
    salamanca.openPopup();
		stepCounter += 1;
   	  break;

   	case 9:
    switch ($('.next-step')[0].textContent) {
			case "Suivant":
			$('.next-step')[0].textContent = "Terminer";
				break;

			case "Next":
			$('.next-step')[0].textContent = "Finish";
				break;

			case "Siguiente":
			$('.next-step')[0].textContent = "Acabar"
				break;
		}

   	mymap.flyTo(salamanca.getLatLng(), 10);
		$("#salamanca-popup").show();
   	salamanca.openPopup();
   	stepCounter += 1;
   		break;


  	default:
    switch ($('.next-step')[0].textContent) {
			case "Terminer":
			$('.next-step')[0].textContent = "Commencer";
				break;

			case "Finish":
			$('.next-step')[0].textContent = "Start";
				break;

			case "Acabar":
			$('.next-step')[0].textContent = "Inicie"
				break;
		}

		mymap.flyTo(cdtOverView, 6);
		salamanca.closePopup();
		stepCounter = 1;
	}
};





// Fonction pour revenir à la map depuis une page de détails d'une ville
function go_back_map(){

  event.stopPropagation();

  let openedDetails = event.explicitOriginalTarget.parentElement.parentElement.parentElement.parentElement.id;

  $('#map').show(function(){
    $('html, body').animate({
      scrollTop: $('#map').offset().top
    }, 'slow')
  });

  setTimeout(function(){
    $('#'+ openedDetails).hide(function(){
    })
  }, 1500);    
}





// WIP - Fonction pour afficher la page des détails d'une étape de ma vie professionnelle
function go_details(){

  event.stopPropagation();

  let buttonOrigin = event.explicitOriginalTarget.id;
  let detailsToOpen = buttonOrigin.substring(0, buttonOrigin.length - 8);

  $('#' + detailsToOpen).show(function(){
    $('html, body').animate({
      scrollTop: $('#' + detailsToOpen).offset().top
    }, 'slow')
  });

  setTimeout(function(){
    $('#map').hide(function(){
    })
  }, 1500);    
}





// Boutons pour passer du CV à la carte, et inversemment
$("#map").hide();
$('.ville').hide();

$(".go-cv").click(function(){
	goToByScroll('#cv');
});

$(".go-map").click(function(){
	goToByScroll('#map');
});

$(".html-popups").hide();

// Fonctions pour passer du CV à la map ou inversement

function goToByScroll(div) {

	$(div).show(function(){
		$('html, body').animate({
			scrollTop: $(div).offset().top
		}, 'slow')
	});

	

	let otherDiv;

	if(div == "#map"){
		otherDiv = "#cv";
	}

	else if(div == "#cv"){
		otherDiv = "#map";
	}

	setTimeout(function(){
		$(otherDiv).hide(function(){
//			document.location.href = div;
		})
	}, 1500);
}





// WIP - Objets qui contiennent le texte de chaque popup

let paris12PopupContent = {
  title: "Paris",
  element1: "",
  element2: "",
  element3: "",
  element4: "",
};

let perreuxPopupContent = {
  title: "Le Perreux-sur-Marne",
  navLeft: "",
  navRight: "",
  element1: "",
  element2: "",
  element3: "",
  element4: "",
};



let listeVilles = ['paris12','perreux','amiens','clermont','vietnam','lyon','toulouse', 'paris18', 'salamanca'];
  
for(ville of listeVilles){
  $('#' + ville).html += htmlPopupContent(ville + 'PopupContent');

}





// WIP - Objets qui contiennent le détails des pages de chaque étape de ma vie

/*

let paris12Details = {
  title: "Paris 12",
  subtitle: "C'est le 18 janvier 1999 que Félix naquit.",
  image: "images/villes/hopital_saint_antoine.jpeg",
  details1: "94170 Le Perreux-sur-Marne"
}

let perreuxDetails = {
  title: "Le Perreux-sur-Marne",
  subtitle: "C'est le 18 janvier 1999 que Félix naquit.",
  image: "images/villes/hopital_saint_antoine.jpeg",
  details1: "94170 Le Perreux-sur-Marne"
}


function htmlCityDetails(data) {
  return `<li>Le ${data.title} pèse ${data.subtitle} et contient des vitamines ${data.image}</li>`;
}

document.querySelector('#paris12').innerHTML += htmlCityDetails(paris12Details);
document.querySelector('#perreux').innerHTML += htmlCityDetails(perreuxDetails);

*/




// Première commande effectuée lors de l'ouverture de la page -> Centre la carte avec une vue d'ensemble

mymap.flyTo(cdtOverView, 6);
