interface Componente {
    title: string;
    price: number;
    image: string;
}

const componentes: Componente[] = [
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
function compra(componente: string, precio: number) {
    const cliente = JSON.parse(localStorage.getItem('cliente') || '{}');

    // Crear la factura
    const factura = {
        cliente: cliente,
        componente: componente,
        precio: precio
    };

    // Guardar la factura en localStorage
    localStorage.setItem('factura', JSON.stringify(factura));

    // Redirigir a la página de la factura
    window.location.href = 'factura.html';
}

function crearCard(componente: Componente): HTMLElement {
    const col = document.createElement('div');
    col.className = 'col-md-4 mb-4';

    col.innerHTML = `
        <div class="card">
            <img class="card-img-top" src="${componente.image}" alt="${componente.title}" style="max-height: 200px; object-fit: cover;" />
            <div class="card-body">
                <h5 class="card-title">${componente.title}</h5>
                <p class="card-text">Precio: $${componente.price}</p>
                <button class="btn btn-primary" onclick="compra('${componente.title}', ${componente.price})">Comprar</button>
            </div>
        </div>
    `;
    
    return col;
}

function mostrarComponentes() {
    const lista = document.getElementById('componentes-lista');
    if (lista) {
        componentes.forEach(componente => {
            const card = crearCard(componente);
            lista.appendChild(card);
        });
    }
}

// Llamar a la función para mostrar los componentes al cargar la página
mostrarComponentes();
