const productos = [
    {nombre: "Laptop", precio: 12000},
    {nombre: "Mouse", precio: 250},
    {nombre: "Monitor", precio: 3000},
    {nombre: "Teclado", precio: 750},
];
// tu codigo aqui

const productosFiltrados = productos.filter(producto => producto.precio > 1000);

const nombres = productosFiltrados.map(producto => producto.nombre);

console.log(nombres);