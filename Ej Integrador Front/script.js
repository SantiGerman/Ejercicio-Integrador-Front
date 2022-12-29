function calcularDescuento() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var correo = document.getElementById("correo").value;
    var cantidad = document.getElementById("cantidad").value;

    cantidad = parseInt(cantidad);

    if (nombre === '' || apellido === '' || correo === '' || isNaN(cantidad)) {
        alert("Por favor complete correctamente el formulario.");
    } else {
        var resultado = cantidad * 200;

        var categoria = document.getElementById("categoria").value;
        switch (categoria) {
            case "estudiante":
                resultado = resultado * .2;
                break;
            case "trainee":
                resultado = resultado * .5;
                break;
            case "junior":
                resultado = resultado * .85;
        }

        resultado = parseFloat(resultado).toFixed(2);
        resultado = "Total a Pagar: $" + resultado;

        var divResultado = document.getElementById("resultado");
        divResultado.className = "bg-primary-subtle border border-primary-subtle rounded text-primary-emphasis col-8 my-4 mx-auto";

        var textoResultado = document.createElement("p");
        var texto = document.createTextNode(resultado);
        textoResultado.appendChild(texto);
        textoResultado.className = "m-3";

        divResultado.appendChild(textoResultado);
    }
}

function limpiar() {
    var form = document.getElementById("form");
    form.reset();

    var div = document.createElement("div");
    div.setAttribute("id", "resultado");

    var divResultado = document.getElementById("resultado");
    divResultado.replaceWith(div);
}