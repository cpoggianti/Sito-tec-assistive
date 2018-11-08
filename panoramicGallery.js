function gestoreClickImg{
	
}

//variabili
var nodoImg;

unction gestoreLoad(){
	try{
		nodoImg=document.getElementById("panoramic");
		
		nodoImg.onclick=gestoreClickImg;

	} catch(e){
		alert("gestoreLoad"+e);
	}
}
window.onload=gestoreLoad;