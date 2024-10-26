function comprar(componente, precio) {
    var cliente = JSON.parse(localStorage.getItem('cliente') || '{}');
    // Crear la factura
    var factura = {
        cliente: cliente,
        componente: componente,
        precio: precio
    };
    // Guardar la factura en localStorage
    localStorage.setItem('factura', JSON.stringify(factura));
    // Redirigir a la página de la factura
    window.location.href = 'factura.html';
}
