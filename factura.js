var factura = JSON.parse(localStorage.getItem('factura') || '{}');
if (factura) {
    var facturaDiv = document.getElementById('factura');
    if (facturaDiv) {
        facturaDiv.innerHTML = "<h2>Cliente: ".concat(factura.cliente.nombre, " ").concat(factura.cliente.apellido, "</h2>\n            <p>Email: ").concat(factura.cliente.email, "</p>\n            <p>Tel\u00E9fono: ").concat(factura.cliente.telefono, "</p>\n            <h3>Componente: ").concat(factura.componente, "</h3>\n            <p>Precio: $").concat(factura.precio, "</p>\n        ");
    }
}
else {
    document.getElementById('factura').innerHTML = '<p>No hay factura disponible.</p>';
}
