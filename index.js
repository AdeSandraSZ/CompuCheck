/*
const btn = document.getElementById('btn');

const hi = document.getElementById('hi');

btn.addEventListener('click', function handleClick() {
    hi.innerHTML= "Hola GitHub";
})
*/

/*
document.getElementById("registro").addEventListener("submit", function (event) {
    event.preventDefault();

    var cargando = document.getElementById("cargando");
    cargando.style.display = "block"; // Muestra el elemento de carga

    setTimeout(function () {
        
        var ncontrol = document.getElementById("ncontrol").value;
        var raton = document.querySelector('input[name="raton"]:checked').value;
        var teclado = document.querySelector('input[name="teclado"]:checked').value;
        var cpu = document.querySelector('input[name="cpu"]:checked').value;
        var cable = document.querySelector('input[name="cable"]:checked').value;
        var comentario = document.getElementById("comentario").value;

        alert("Número de control: " + ncontrol + "\nRatón: " + raton + "\nTeclado: " + teclado + "\nGabinete: " + cpu + "\nCable de red: " + cable + "\nComentario: " + comentario);

        // Restablece el formulario y oculta el elemento de carga
        document.getElementById("registro").reset();
        cargando.style.display = "none"; 
    }, 2000);
});
*/

function procesarFormulario(event) {
    event.preventDefault();

    var cargandoDiv = document.getElementById('cargando');
    cargandoDiv.style.display = 'block';

    setTimeout(function () {
        document.getElementById("registro").reset();
        cargandoDiv.style.display = 'none';

        window.open('registrolisto.html', '_blank');
    }, 2000);
}


