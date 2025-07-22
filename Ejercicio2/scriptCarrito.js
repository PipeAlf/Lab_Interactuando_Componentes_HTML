let totalItems = 0;
let totalPrecio = 0;
let productosEnCarrito = [];

function agregarAlCarrito(nombre, precio) {
  totalItems++;
  totalPrecio += precio;
  productosEnCarrito.push(nombre);

  document.getElementById('total-items').textContent = totalItems;
  document.getElementById('total-precio').textContent = totalPrecio;

  if (totalPrecio > 50) {
    alert("¡Envío gratis aplicado!");
  }

  console.log("Productos en el carrito:", productosEnCarrito);
}

function vaciarCarrito() {
  totalItems = 0;
  totalPrecio = 0;
  productosEnCarrito = [];

  document.getElementById('total-items').textContent = totalItems;
  document.getElementById('total-precio').textContent = totalPrecio;

  alert("Carrito vaciado");
}
