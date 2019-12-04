document.addEventListener("DOMContentLoaded", function(){
    // Handler when the DOM is fully loaded
    const quienvota = document.querySelector('.quienvota');
    quienvota.addEventListener('input', function (evt) {
        let quienvotaprocesado = this.value;
        const boton1 = document.querySelector('.toPantalla1');
        quienvotaprocesado = quienvotaprocesado.trim();
        quienvotaprocesado = quienvotaprocesado.toLowerCase();
        quienvotaprocesado = quienvotaprocesado.replace(/ /g,'');
        console.log(quienvotaprocesado);
        if( checkMalasPalabras(quienvotaprocesado) ) {
            
            for(let i=0; i<=100; i++) {
                alert('Parcero chupelo y pongase serio');
                quienvota.value = "";
            }
        }

        if( this.value.length > 1 ) {
            boton1.classList.add('visible');
        } else {
            boton1.classList.remove('visible');
        }
    });

});


document.addEventListener('click', function (event) {

	// If the clicked element doesn't have the right selector, bail
	if (!event.target.matches('.link')) return;

	// Don't follow the link
	event.preventDefault();

	// Log the clicked element in the console
    console.log(event.target);
    const destino = event.target.getAttribute('data-destino');
    const pantallas = document.querySelectorAll('.pantalla');
    pantallas.forEach( ( pantalla )=>{
        const meta = pantalla.getAttribute('data-pantalla');
        pantalla.classList.remove( 'oculta' );
        if( meta !== destino ) {
            pantalla.classList.add('oculta');
        }
    });
    scroll(0,0);

}, false);

const checkMalasPalabras = (palabra) => {
    const malasPalabras = [
        'nalgas', 
        'basura', 
        'trasero',
        'chupelo',
        'madre',
        'sgpm',
        'mama',
        'mamelo',
        'gordo',
        'gonorrea',
        'hijoeputa',
        'perra',
        'culo',
        'verga'
    ];
    var rgx = new RegExp(malasPalabras.join("|")+"|" + "/gi");
  return (rgx.test(palabra));
}

