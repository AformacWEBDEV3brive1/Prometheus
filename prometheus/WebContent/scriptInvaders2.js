function formulaire() {

 // ouvre les popin de debut de jeu
    var jouer = confirm("Voulez vous jouer ?");
    if (jouer == true) {
        go();
    }else {
        confirm("toto : 1 000 000 points");
    }


}

// tire un missile
function missile(event) {

    
    var vie = document.getElementById("vie").clientHeight;

    var missile = document.getElementById("missile");

//si la touche z est enfoncée
    if (event.keyCode == 90) {
       
       //creation du div missile et custom 
        projectile = document.createElement("div");
        projectile.id = "missile";
        projectile.style.width = "10px";
        projectile.style.height = "10px";
        projectile.style.backgroundColor = "black";
        projectile.style.bottom = "70px";
        projectile.style.position = "absolute";
        projectile.style.left = document.getElementById("vaisseau").style.marginLeft;
        var vaisseau = document.getElementById("vaisseau");

        //insertion du div missile
        document.body.insertBefore(projectile, vaisseau);


    }

    missile = document.getElementById("missile");

    var html = 950;
    var body = document.getElementsByTagName("body").clientHeight;




   

    var plateau = parseInt(document.getElementById("plateau").clientHeight);
   
    var distance = parseInt(document.getElementById("missile").style.bottom);


    var cible = vie + plateau;
    var process = setInterval(function () {
        distance = distance + 1;
        missile.style.bottom = distance + "px";


        //collision du missile du plateau
        if (distance > (html - cible)) {
            clearInterval(process);
            suppr(missile);
            removeElement(plateau);
           var pseudo = prompt("Vous obtenez 1 000 000 points! \nEntrez votre pseudo :");
        }
       
    }, 1);
    
    }
    // Suppression de la div.
function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
    document.cookie='cookie1=pseudo; expires=sun, 6 Aug 2017 00:00:00 UTC; path=/Prometheus/prometheus/WebContent/index.html'

}
function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}
//si le missile touche ou sort de l'ecran il disparait

function suppr(missile) {
    missile.parentNode.removeChild(missile);
}
function removeElement(et) {
    var plateau = document.getElementById("plateau");
    plateau.parentNode.removeChild(plateau);
}



//Déplacer le vaisseau sur la droite et la gauche
document.addEventListener('keydown', direction, false);
function direction(event) {
    //le vaisseau va à gauche
    if (event.keyCode == 81) {
        var vaisseau = parseInt(document.getElementById("vaisseau").style.marginLeft);
        vaisseau = vaisseau - 50;
        document.getElementById("vaisseau").style.marginLeft = vaisseau + "px";
    }
    // bouge de 5px
    var x = parseInt(document.getElementById("vaisseau").style.marginLeft);
    if (x <= -5) {
        x = -5;
        document.getElementById("vaisseau").style.marginLeft = x + "px";
    }
    //le vaisseau va à droite
    if (event.keyCode == 68) {
        var vaisseau = parseInt(document.getElementById("vaisseau").style.marginLeft);
        vaisseau = vaisseau + 50;
        document.getElementById("vaisseau").style.marginLeft = vaisseau + "px";
    }
    //bouge de 5 px
    var x = parseInt(document.getElementById("vaisseau").style.marginLeft);
    if (x >= 1800) {
        x = 1800;
        document.getElementById("vaisseau").style.marginLeft = x + "px";
    }
}

// fin déplacement


// debut du mouvement du plateau(extra terrestres)
function go() {

    var marginTop_Ets = 0;
    var interval;
// ralentir leur mouvement
    interval = setInterval(function () {
        var plateau=document.getElementById("plateau");
       if(plateau != null){
        document.getElementById("plateau").style.marginTop = marginTop_Ets + "px";
        //marginTop_Ets = marginTop_Ets + 5; => équivaut à la ligne d'en dessous
        marginTop_Ets += 5;

//arrêter leur descente
        if (marginTop_Ets > 500) {
            clearInterval(interval);
        }
}
    }, 1000);
    

}