const productos = [
    {
      nombre: 'Tortugas Ninja 1er Tomo',
      descripcion: 'Comic creado por Kevin Eastman',
      precio: 250.00,
      imagen: 'img1.jpg'
    },
    {
      nombre: 'Tortugas Ninja 2do Tomo',
      descripcion: 'Comic creado por Kevin Eastman',
      precio: 250.00,
      imagen: 'img4.jpg'
    },
    {
      nombre: 'Tortugas Ninja 3er Tomo',
      descripcion: 'Comic creado por Kevin Eastman',
      precio: 250.00,
      imagen: 'img2.jpg'
    },
    {
      nombre: 'Tortugas Ninja 4to Tomo',
      descripcion: 'Comic creado por Kevin Eastman',
      precio: 250.00 ,
      imagen: 'img3.jpg'
    }
  ];
  
  const catalogo = document.getElementById('catalogo');
  
  function crearTarjetaProducto(producto) {
    const card = document.createElement('div');
    card.className = 'producto-card';
  
    const imagen = document.createElement('img');
    imagen.src = producto.imagen;
    imagen.alt = producto.nombre;
  
    const titulo = document.createElement('h2');
    titulo.textContent = producto.nombre;
  
    const descripcion = document.createElement('p');
    descripcion.textContent = producto.descripcion;
  
    const precio = document.createElement('span');
    precio.className = 'precio';
    precio.textContent = `$${producto.precio.toFixed(2)}`;
  
    const boton = document.createElement('button');
    boton.className = 'btn-comprar';
    boton.textContent = 'Comprar';
  
    card.appendChild(imagen);
    card.appendChild(titulo);
    card.appendChild(descripcion);
    card.appendChild(precio);
    card.appendChild(boton);
  
    return card;
  }
  
  function renderizarcatalogo() {
    productos.forEach(producto => {
      const tarjeta = crearTarjetaProducto(producto);
      catalogo.appendChild(tarjeta);
    });
  }
  
  window.onload = renderizarcatalogo;