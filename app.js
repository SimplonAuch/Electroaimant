

var nbDebris = 200;
var puissance = 40;


$(document).ready(function(){



	// Génération de saleté

	for( var i=0 ; i<nbDebris ; i++ ) {

		$('<div/>').addClass('debris').css({
			top: Math.random() * 490,
			left: Math.random() * 490
		}).appendTo('#jeu');
	}


	var actif = false;



	// Activer l'électro-aimant

	$('#jeu').on('mousedown', function(){
		actif = true;
	})


	// Désactiver l'électro-aimant

	$('#jeu').on('mouseup', function(){
		actif = false;
	})


	// Coller la saleté - version 1

	var collerV1 = function( e ){

		if( ! actif ) return;

		var sourisX = e.pageX;
		var sourisY = e.pageY;

		$('.debris').each(function(id,s) {

			var offset = $(s).offset();

			var debrisX = offset.left;
			var debrisY = offset.top;

			if( debrisX < sourisX+puissance
				&& debrisX > sourisX-puissance
				&& debrisY < sourisY+puissance 
				&& debrisY > sourisY-puissance ) {

				$(this).offset({ top:sourisY, left:sourisX });
			}
		});
	}


	// Coller la saleté - version 2

	var collerV2 = function( e ){

		if( ! actif ) return;

		var sourisX = e.pageX;
		var sourisY = e.pageY;
		var cadreOffset = $(this).offset();

		$('.debris').each(function(id,s) {

			var offset = $(s).offset();

			var debrisX = offset.left;
			var debrisY = offset.top;

			if( debrisX < sourisX +puissance
				&& debrisX > sourisX-puissance
				&& debrisY < sourisY+puissance 
				&& debrisY > sourisY-puissance ) {

				$(this).stop().animate({
					top: sourisY - cadreOffset.top,
					left: sourisX - cadreOffset.left
				}, 100);

			}
		});
	}


	$('#jeu').on('mousemove', collerV2 );




});