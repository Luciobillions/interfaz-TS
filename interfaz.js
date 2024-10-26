var _a;
(_a = document.getElementById('clienteForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    var nuevoCliente = {
        nombre: document.getElementById('nombre').value,
        apellido: document.getElementById('apellido').value,
        email: document.getElementById('email').value,
        telefono: document.getElementById('telefono').value
    };
    // Guardar los datos del cliente en localStorage
    localStorage.setItem('cliente', JSON.stringify(nuevoCliente));
    // Redirigir a la página de compras
    window.location.href = 'compra.html';
});
