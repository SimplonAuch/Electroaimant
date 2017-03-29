	$(document).ready(function(){
		//alert(bonjour);
		var createPoint =function(){
		};
				//creation du nombre de point l'utillisateur choisira
			var pointNumber = prompt("Veuillez saisir le nombre de point");	
					//console.log(pointNumber);	
			for(var i = 0; i <= pointNumber; i++) {
				$('<div class="debris"></div>').appendTo("#jeu");

			};
	});




