(function(){
    var formulario = document.getElementsByName('formulario')[0],
        elementos = formulario.elements,
        boton = document.getElementById('btn');

    var validarNombre = function(e){
        if (formulario.nombre.value == 0){
            alert("Completa el campo nombre");
            e.preventDefault();
        }
    };
    var validarEmail = function(e){
        if (formulario.email.value == 0){
            alert("Completa el campo mail");
            e.preventDefault();
        }
    };

    var validar = function(e){
        validarNombre(e);
        validarEmail(e);
    };
    formulario.addEventListener("submit", validar);
}())
