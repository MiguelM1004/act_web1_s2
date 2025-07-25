let edad = 67;
let distanciaKm = 120;
let tarifaBase = distanciaKm * 0.21;
let precioFinal;

if (edad < 18) {
    precioFinal = tarifaBase * 0.8;  // 20% descuento
} else if (edad >= 65) {
    precioFinal = tarifaBase * 0.6;  // 40% descuento
} else {
    precioFinal = tarifaBase;  // Sin descuento
}

console.log(precioFinal.toFixed(2));  // Redondeamos a 2 decimales
