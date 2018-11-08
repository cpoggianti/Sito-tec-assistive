function gestoreClickAnteprime (){
	// CREAZIONE
	var panorama_frame = document.createElement('iframe');
	// ATTRIBUTI
	panorama_frame.setAttribute('height', '350px')
	panorama_frame.setAttribute('width', '100%')
	panorama_frame.setAttribute('allowfullscreen', 'true')
	var id = Number(this.id.replace('pan', ''))
	panorama_frame.setAttribute('src', panorama_url[id])
	// COLLOCAZIONE
	nodoPanorama.appendChild(panorama_frame);
}

//variabili
var nodoAnteprime = [];
var nodoPanorama;

function gestoreLoad(){
	try{
		nodoAnteprime = document.getElementsByClassName('anteprima');
		for ( var i = 0; i < nodoAnteprime.length; i++ ) {
			nodoAnteprime[i].onclick = gestoreClickAnteprime;
		}
		nodoPanorama = document.getElementById('fs_panorama');

	} catch(e){
		alert("gestoreLoad"+e);
	}
}
window.onload=gestoreLoad;