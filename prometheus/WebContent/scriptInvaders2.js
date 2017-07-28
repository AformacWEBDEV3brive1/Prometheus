function tire() {

	// le missile apparait devant le vaisseau :initialisation
	var positionY = document.getElementById("vaisseau").style.marginTop;
	var positionX = document.getElementById("vaisseau").style.marginLeft;

	var missile = document.getElementById("missile");

	missile.style.marginTop = positionY;
	missile.style.marginLeft = positionX;

	// le missile est charger et tirer
	if (event.keyCode == 38) {

		missile.style.display = "block";
	}

	// le missile monte
	if (missile.style.display = "block") {
		var tir = parseInt(missile.style.marginTop);
		console.log(tir);

		intervalID = setInterval(function() {

			do {

				tir = tir - 25;
				missile.style.marginTop = tir + "px";
				console.log(tir);

			} while (tir <= 0);
		
		}, 100);

		
	}
	clearInterval(intervalID);
	// si le missile touche ou sort de l'ecran il disparait
	if (tir < 0) {
		clearInterval(intervalID);
		// missile.style.display = "none";
	}

}
