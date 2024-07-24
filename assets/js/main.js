$(document).ready(function() {

	$('.img-magic').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}
		
	})

});
var boton = 0;
function desplegar() {
    if (boton == 0) {
        document.getElementById("formulario").style.display = "flex";
        boton = 1;
    }else {
        document.getElementById("formulario").style.display = "none";
        boton= 0;
    }
    
}

const mensaje = document.querySelector("#mensaje");
const form = document.querySelector("#formulario");

form.addEventListener("submit", (event) => {
	
	var nombrenovio = document.getElementById("nombrenovio").value;
	var nombrenovia = document.getElementById("nombrenovia").value;
    var ciudad = document.getElementById("ciudad").value;
let html = `
		<div class="alert alert-success" role="alert">Estimados ${nombrenovio} y ${nombrenovia} pronto te contactaremos!!</div>
     `
	 ;
    if (ciudad != "") {
        event.preventDefault()
        mensaje.innerHTML = html;
    }

setTimeout(function() {
    /* Hacemos desaparecer el mensaje suavemente */
    mensaje.style.opacity = 0;
    /* Tras 0.5 segundos (500 ms) de la animación cargamos la web de destino */
  }, 3000);
  
})

