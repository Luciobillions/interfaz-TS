const factura = JSON.parse(localStorage.getItem('factura') || '{}');

if (factura) {
    const facturaDiv = document.getElementById('factura');
    if (facturaDiv) {
        facturaDiv.innerHTML = `
            <h2>Cliente: ${factura.cliente.nombre} ${factura.cliente.apellido}</h2>
            <p>Email: ${factura.cliente.email}</p>
            <p>Teléfono: ${factura.cliente.telefono}</p>
            <h3>Componente: ${factura.componente}</h3>
            <p>Precio: $${factura.precio}</p>
        `;
    }
} else {
    document.getElementById('factura')!.innerHTML = '<p>No hay factura disponible.</p>';
}
