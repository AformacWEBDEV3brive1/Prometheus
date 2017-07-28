function tire() {

// le missile apparait devant le vaisseau :initialisation
    var positionY = document.getElementById("vaisseau").style.marginTop;
    var positionX = document.getElementById("vaisseau").style.marginLeft;
    var missile = document.getElementById("missile");
    missile.style.marginTop = positionY;
    missile.style.marginLeft = positionX;
    // le missile est charger et tirer
    if (event.keyCode == 90) {

        missile.style.display = "block";
    }

// le missile monte
    if (missile.style.display = "block") {
        var tir = parseInt(missile.style.marginTop);
        console.log(tir);
        intervalID = setInterval(function () {

            do {

                tir = tir - 25;
                missile.style.marginTop = tir + "px";
                console.log(tir);
            } while (tir <= 0);
        }, 100);
        clearInterval(intervalID);
// si le missile touche ou sort de l'ecran il disparait
        if (tir < 0) {
            clearInterval(intervalID);
            // missile.style.display = "none";
        }

    }

}

//si le missile touche ou sort de l'ecran il disparait




//Déplacer le vaisseau sur la droite et la gauche

document.addEventListener('keydown', direction, false);
function direction(event) {

    if (event.keyCode == 81) {
        var vaisseau = parseInt(document.getElementById("vaisseau").style.marginLeft);
        vaisseau = vaisseau - 50;
        document.getElementById("vaisseau").style.marginLeft = vaisseau + "px";
    }
    var x = parseInt(document.getElementById("vaisseau").style.marginLeft);
    if (x <= -5) {
        x = -5;
        document.getElementById("vaisseau").style.marginLeft = x + "px";
    }

    if (event.keyCode == 68) {
        var vaisseau = parseInt(document.getElementById("vaisseau").style.marginLeft);
        vaisseau = vaisseau + 50;
        document.getElementById("vaisseau").style.marginLeft = vaisseau + "px";
    }

    var x = parseInt(document.getElementById("vaisseau").style.marginLeft);
    if (x >= 1840) {
        x = 1840;
        document.getElementById("vaisseau").style.marginLeft = x + "px";
    }
}

// fin déplacement


function go(){
    
    console.log("debut de la fonction go");
    
    var marginTop_Ets = 0;
    var interval;
    
    interval = setInterval(function(){
        console.log("appel de la fonction anonyme pour deplacement des ETs : "+marginTop_Ets);
        document.getElementById("plateau").style.marginTop = marginTop_Ets + "px";
        //marginTop_Ets = marginTop_Ets + 5; => équivaut à la ligne d'en dessous
        marginTop_Ets += 5 ; 
        
        if(marginTop_Ets > 500 ){
            clearInterval(interval);
        }
        
    }, 1000);
    
    console.log("fin de la fonction go");
}