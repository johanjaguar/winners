document.addEventListener("DOMContentLoaded", function(){
    // Handler when the DOM is fully loaded


    
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