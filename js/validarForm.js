function validarFormulario() {

var nombreApellido = document.getElementById('nombre-apellido').value;
var correo = document.getElementById('correo').value;
var telefono = document.getElementById('telefono').value;
var mensaje = document.getElementById('mensaje').value;

var errorMessage = '';

// Validar que el mensaje no esté vacío
if (mensaje.trim() === '') {
  errorMessage += 'El campo del mensaje no puede estar vacío.<br>';
}

// Validar correo electrónico
var correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!correoRegex.test(correo)) {
  errorMessage += 'Correo electrónico no válido.<br>';
}

// Validar teléfono
var telefonoRegex = /^\d{9}$/;
if (!telefonoRegex.test(telefono)) {
  errorMessage += 'Teléfono debe tener 9 dígitos numéricos.<br>';
}

// Mostrar mensaje de error o enviar formulario
var errorDisplay = document.getElementById('error-message');
if (errorMessage !== '') {
  errorDisplay.innerHTML = errorMessage;
} else {
  errorDisplay.innerHTML = '';
  // Aquí puedes enviar el formulario, por ejemplo, mediante una petición AJAX
  
}
}
