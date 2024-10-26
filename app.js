var componentes = [
    {
        title: 'CPU',
        price: 300000,
        image: './img/CPU.png'
    },
    {
        title: 'GPU',
        price: 400000,
        image: './img/GPU.png'
    },
    {
        title: 'RAM',
        price: 100000,
        image: './img/RAM.png'
    },
    {
        title: 'Placa Madre',
        price: 150000,
        image: './img/placa-madre.png'
    },
    {
        title: 'SSD',
        price: 120000,
        image: './img/ssd.png'
    },
    {
        title: 'Fuente de Poder',
        price: 80000,
        image: './img/fuente-poder.png'
    },
    {
        title: 'Gabinete',
        price: 60000,
        image: './img/gabinete.png'
    },
    {
        title: 'Tarjeta de Sonido',
        price: 30000,
        image: './img/tajetadesonido.png'
    },
    {
        title: 'Ventilador',
        price: 15000,
        image: './img/ventilador.png'
    },
];
function compra(componente, precio) {
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
function crearCard(componente) {
    var col = document.createElement('div');
    col.className = 'col-md-4 mb-4';
    col.innerHTML = "\n        <div class=\"card\">\n            <img class=\"card-img-top\" src=\"".concat(componente.image, "\" alt=\"").concat(componente.title, "\" style=\"max-height: 200px; object-fit: cover;\" />\n            <div class=\"card-body\">\n                <h5 class=\"card-title\">").concat(componente.title, "</h5>\n                <p class=\"card-text\">Precio: $").concat(componente.price, "</p>\n                <button class=\"btn btn-primary\" onclick=\"compra('").concat(componente.title, "', ").concat(componente.price, ")\">Comprar</button>\n            </div>\n        </div>\n    ");
    return col;
}
function mostrarComponentes() {
    var lista = document.getElementById('componentes-lista');
    if (lista) {
        componentes.forEach(function (componente) {
            var card = crearCard(componente);
            lista.appendChild(card);
        });
    }
}
// Llamar a la función para mostrar los componentes al cargar la página
mostrarComponentes();
