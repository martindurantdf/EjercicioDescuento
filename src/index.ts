/*
•Implemente un algoritmo que calcule y muestre
por pantalla el precio final de un producto
después de aplicarle un descuento
• El precio inicial del producto es $450,50
• El descuento a aplicar es del 10%. Recuerde que
puede obtener el 10% de un valor multiplicado por 0,1
• El precio y el descuento deben ser guardados en
variables (no ingresados por teclado)
 */
let valorProducto: number;
let valorDescuento: number;
let precioFinal: number;

valorProducto = 450.5;
valorDescuento = 0.1;
precioFinal = valorProducto - valorProducto * valorDescuento;
console.log("El valor del producto es: $", valorProducto);
console.log("El valor del descuento es: $", valorProducto * valorDescuento);
console.log("A pagar con descuento: $", precioFinal);
