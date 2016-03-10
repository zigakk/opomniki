window.addEventListener('load', function() {
	//stran nalozena
	var izvediPrijavo=function(event) {
		var ime = document.querySelector("#uporabnisko_ime").value;
		var element = document.getElementById("uporabnik");
		element.innerHTML = ime;
		document.getElementsByClassName("pokrivalo")[0].style.display = "none";
	}
	document.querySelector("#prijavniGumb").addEventListener('click', izvediPrijavo);
	
	var dodajOpomnik = function() {
		var naziv = document.querySelector("#naziv_opomnika").value;
		var cas = document.querySelector("#cas_opomnika").value;
		document.getElementById("naziv_opomnika").value = "";
		document.getElementById("cas_opomnika").value = "";
		
		var element = document.getElementById("opomniki");
		element.innerHTML += "<div class='opomnik shadow rob'> <div class='naziv_opomnika'> " + naziv + " </div> <div class='cas_opomnika'> Opomnik čez <span>" + cas + "</span> sekund.</div> </div>"
		
	}
	document.querySelector("#dodajGumb").addEventListener('click', dodajOpomnik);
	
	//Posodobi opomnike
	var posodobiOpomnike = function() {
		var opomniki = document.querySelectorAll(".opomnik");
		
		for (i = 0; i < opomniki.length; i++) {
			var opomnik = opomniki[i];
			var casovnik = opomnik.querySelector("span");
			var cas = parseInt(casovnik.innerHTML);
	
			//TODO: 
			if (cas == 0)
			{
				alert("Opomnik!\n\nZadolžitev" + opomnik.getElementsByClassName("naziv_opomnika")[0].innerHTML + "je potekla!");
				document.querySelector("#opomniki").removeChild(opomnik);
			}
			else
			{
				opomnik.querySelector("span").innerHTML = cas - 1;
			}
			// - če je čas enak 0, izpiši opozorilo "Opomnik!\n\nZadolžitev NAZIV_OPOMNIK je potekla!"
			// - sicer zmanjšaj čas za 1 in nastavi novo vrednost v časovniku
		}
	}
	setInterval(posodobiOpomnike, 1000);
	
});