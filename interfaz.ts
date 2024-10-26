document.getElementById('clienteForm')?.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const nuevoCliente = {
        nombre: (document.getElementById('nombre') as HTMLInputElement).value,
        apellido: (document.getElementById('apellido') as HTMLInputElement).value,
        email: (document.getElementById('email') as HTMLInputElement).value,
        telefono: (document.getElementById('telefono') as HTMLInputElement).value
    };

    // Guardar los datos del cliente en localStorage
    localStorage.setItem('cliente', JSON.stringify(nuevoCliente));

    // Redirigir a la página de compras
    window.location.href = 'compra.html';
});
