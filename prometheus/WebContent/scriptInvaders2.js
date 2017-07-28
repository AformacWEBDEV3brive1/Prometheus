function missile() {

        
        
        var vie = document.getElementById("vie").clientHeight;
        var go = document.getElementById("go").clientHeight;
        var missile = document.getElementById("missile");

        if (missile == null) {
            console.log("l'element nexiste pas");
            projectile = document.createElement("div");
            projectile.id = "missile";
            projectile.style.width = "10px";
            projectile.style.height = "10px";
            projectile.style.backgroundColor = "black";
            projectile.style.bottom = "70px";
            projectile.style.position = "absolute";
            var vaisseau = document.getElementById("vaisseau");

            document.body.insertBefore(projectile, vaisseau);
        }

        missile = document.getElementById("missile");

        var html=950;
        var body=document.getElementsByTagName("body").clientHeight;
        
      
        
        
        console.log(" html : "+html+" body : "+body);
        
        var plateau = parseInt(document.getElementById("plateau").clientHeight);
          console.log("vie : "+vie+" go : "+go+" plateau : "+plateau);
        console.log("l'element existe");
        var distance = parseInt(document.getElementById("missile").style.bottom);
        
        
        var cible = vie+go+plateau;
        var process = setInterval(function () {
            distance = distance + 1;
            missile.style.bottom = distance + "px";


           // console.log("distance : "+distance+" plateau : "+plateau);
            if (distance >(html-cible)) {
                clearInterval(process);
                suppr(missile);
                removeElement(plateau);

            }


        }, 1);
          // Suppression de la div.
    


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
r
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