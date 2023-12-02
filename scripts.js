// Función para validar el número de tarjeta
function validarNumeroTarjeta(numeroTarjeta) {
    const patron = /^(\d{16})$/;
    if (!patron.test(numeroTarjeta)) {
        return false;
    }
    return true;
}
// Función Validar fecha
function validarFecha(fecha) {
    let patron = /^(\d{4})-(\d{2})-(\d{2})$/;
    let hoy = new Date();
    let anoActual = hoy.getFullYear();

    if (!patron.test(fecha)) {
        return false;
    }

    return true;
}

// Función para validar el código de seguridad
function validarCodigoSeguridad(codigoSeguridad) {
    const patron = /^(\d{3})$/;
    if (!patron.test(codigoSeguridad)) {
        return false;
    }
    return true;
}

// Función para validar el formulario
function validarFormulario(formulario) {
    if (!formulario.numeroTarjeta || !formulario.fecha || !formulario.codigoSeguridad || !formulario.nombre || !formulario.apellidos || !formulario.domicilio ) {
        return 'Faltan datos obligatorios';
    }
    if (!validarNumeroTarjeta(formulario.numeroTarjeta)) {
        return 'El número de tarjeta no es válido';
    }
    if (!validarFecha(formulario.fecha)) {
        return 'La fecha no es válida';
    }
    if (!validarCodigoSeguridad(formulario.codigoSeguridad)) {
        return 'El código de seguridad no es válido';
    }
    return 'Formulario válido';
}

// Obtiene los elementos del formulario
const formulario = document.getElementById('formulario');
const numeroTarjeta = document.getElementById('numeroTarjeta');
const fecha = document.getElementById('fecha');
const codigoSeguridad = document.getElementById('codigoSeguridad');
const nombre = document.getElementById('nombre')
const apellidos = document.getElementById('apellidos')
const domicilio = document.getElementById('domicilio')

// Escucha el evento de envío del formulario
formulario.addEventListener('submit', function (event) {
    event.preventDefault();
    const datosFormulario = {
        numeroTarjeta: numeroTarjeta.value,
        fecha: fecha.value,
        codigoSeguridad: codigoSeguridad.value,
        nombre: nombre.value,
        apellidos: apellidos.value,
        domicilio: domicilio.value
    };
    const resultado = validarFormulario(datosFormulario);
    if (resultado === 'Formulario válido') {
        alert('Formulario enviado con éxito');
    } else {
        alert(resultado);
    }
});