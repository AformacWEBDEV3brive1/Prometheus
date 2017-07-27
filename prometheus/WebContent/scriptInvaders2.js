function tire(){
	
	
	var ecran=0;
	
	//le missile apparait devant le vaisseau :initialisation
	var positionY=document.getElementById("vaisseau").style.marginTop;
	var positionX=document.getElementById("vaisseau").style.marginLeft;
	
	var missile = document.getElementById("missile");
	
	missile.style.marginTop =positionY;
	missile.style.marginLeft=positionX;
	
	//le missile est charger et tirer
	
	if(event.keyCode == 38){
		
		missile.style.display = "block";
	}
	
	
	
	//le missile monte 
	
	if(missile.style.display = "block"){
		var tir=parseInt(missile.style.marginTop);
		console.log(tir);
		var limite=1900 ;
		do{
			tir=tir-1;
			missile.style.marginTop=tir+"px";
			document.getElementById("missile").className="missile shoot";
		}while(tir<ecran);
		
		//document.getElementById("missile").className="missile";
	}
	
	//si le missile touche ou sort de l'ecran il disparait
	
	
}