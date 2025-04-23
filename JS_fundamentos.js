// Página utilizada de ejemplo: https://tecnomegastore.ec/

// Variables

let nombre = "Mi carrito" // string
let numeroOrden = 100 // int
let total = 468.50 // float
let estado = true // booleano
let nombreCliente = "Paulo Cisneros" // string
let productos = ["Laptop", "Celular", "Tablet"] // array
let detalleOrden = {
    id: 1,
    estado: "Activo",
    items: ["Laptop", "Celular", "Tablet"],
    precio: 468.50
}


const cedula = 1756301790 // int - inmutable

//Comentatio multilinea

/* Todas estas 
son variable
*/

// Template String

console.log(`Bienvenido - ${nombreCliente}`);

// Métodos de String
console.log(nombreCliente.length); // Longitud del string
console.log(nombreCliente.toUpperCase()); // Mayusculas
console.log(nombreCliente.toLocaleLowerCase()); // minusculas
console.log(nombreCliente.trim()); // Eliminar espacios en blanco
console.log(nombreCliente.charAt(0)); // Se obtiene el primer char
console.log(nombreCliente.includes("Paulo")); // Verificar si existe un texto
console.log(nombreCliente.replace("Cisneros", "Nacevilla")); // Reemplazar texto
console.log(nombreCliente.slice(0, 5)); // Extraer texto desde el índice 0 al 5
console.log(nombreCliente.substring(0, 5)); // Extraer texto desde el índice 0 al 5
console.log(nombreCliente.repeat(3)); // Repetir el string 3 veces
console.log(nombreCliente.split(" ")); // Separar el string por espacios

// Template literal
let nombre1 = "Jordy"
let apellido = "Cisneroos"
let edad = 22
let ciudad = "Quito"

const cuenta = true

console.log(nombre1 + " " + apellido + " tiene " + edad + " años y vive en " + ciudad);

// Números

let cuotas = 6
let cantiProductos = 3
let diasEnvio = "3"

console.log(cuotas, cantiProductos, diasEnvio); // Concatenar variables
console.log(typeof(cuotas)); // Tipo de dato de la variable

console.log("Suma: ",cuotas + cantiProductos); // Sumar variables
console.log("Resta: ",cuotas - cantiProductos); // Restar variables
console.log("Multiplicación: ",cuotas * cantiProductos); // Multiplicar variables
console.log("División: ",cuotas / cantiProductos); // Dividir variables
console.log("Modulo: ",cuotas % cantiProductos); // Módulo variables

// Manejo de operadores de incremento y decremento

let numeroProductos = 2
// Incremento
console.log(numeroProductos++); 
console.log(++numeroProductos)
// Decremento
console.log(numeroProductos--);
console.log(--numeroProductos)

// Math
console.log(Math.PI); // Valor de PI
console.log("Redondear: ", Math.round(4.5)); // Redondear
console.log("Raiz cuadrada: ", Math.sqrt(16)); // Raiz cuadrada
console.log("Valor absoluto: ", Math.abs(-10)); // Valor absoluto
console.log("Potencia: ", Math.pow(2, 3)); // Potencia
console.log("Valoe minimo: ", Math.min(2, 3, 4, 5)); // Valor mínimo
console.log("Valor máximo: ", Math.max(2, 3, 4, 5)); // Valor máximo
console.log("Valor aleatorio: ", Math.random()); // Valor aleatorio

// Orden de precedencia 

console.log(3 + 5 * 2);
console.log(4 * 7 ** 3);


// Conversión de números

let numero = "10"
let numero2 = "2.5"

console.log(Number.parseInt(numero)); // Convertir a entero
console.log(Number.parseFloat(numero2)); // Convertir a float

// Booleanos

let saldoCuenta = 1000
let saldoCarrito = 500
let estadoCuenta 
let rucConfirmado = false

// operadores de asignación de adición
saldoCuenta += saldoCarrito
console.log(saldoCuenta);

// operadores de comparación
let cuentaBanco = "1000"
console.log(saldoCuenta == cuentaBanco); 

// evaluar tipo de dato y contenido
console.log(saldoCuenta === saldoCarrito);

// operadores aritmeticos
console.log(saldoCarrito + parseInt(cuentaBanco)); 

// Operadores lógicos
console.log(saldoCarrito != saldoCuenta); 

// evalua tipo de dato y contenido
console.log(saldoCarrito !== cuentaBanco);

// Operador ternario
let resultado = (saldoCarrito > saldoCuenta) ? "Saldo insuficiente" : "Saldo suficiente"
console.log(resultado);

// Condicionales

const carrito = []

// condicional simple
if (carrito.length > 0) {
    console.log("El carrito tiene productos");
}

// con operador ternario
carrito.length > 0 ? console.log("El carrito tiene productos") : console.log("El carrito está vacío");

// condicional doble 
if (carrito.length > 0) {
    console.log("El carrito tiene productos");
}
else {
    console.log("El carrito está vacío");
}

// condicional múltiple

switch (carrito.length) {
    case 0:
        console.log("El carrito está vacío");
        break;
    case 1:
        console.log("El carrito tiene un producto");
        break;
    case 2:
        console.log("El carrito tiene dos productos");
        break;
    default:
        console.log("El carrito tiene más de dos productos");
}

// bucles
// for
let contador = 0
for (let i = 0; i < 10; i++) {
    console.log(i);
    contador += i
}

// while
while (contador < 2) {
    console.log("El contador es menor que 2");
    contador++
}

// Do y while
do {
    console.log("El contador es menor que 2");
    contador++
}
while (contador < 2);

// forEach, forof , for in y map

const envios = ["Quito", "Guayaquil", "Cuenca", "Loja"]
const cliente = {
    nombre: "Paulo",
    apellido: "Cisneros",
}

// forEach
envios.forEach((envio, index) => {
    console.log(`El envio ${index + 1} es a ${envio}`);
});

//for of
for (const envio of envios) {
    console.log(`El envio es a ${envio}`);
}

// for in
for (const index in envios) {
    console.log(`El envio ${index + 1} es a ${envios[index]}`);
}

// for in con objeto
for (const key in cliente) {
    console.log(`La propiedad ${key} tiene el valor ${cliente[key]}`);
}

// Funciones

function bienvenida(nombre) {
    console.log(`Bienvenido ${nombre}`);
}
bienvenida("Paulo")

// funcion declarada
function totalOrden(precio, iva) {
    return precio + (precio * iva)
}
totalOrden(100, 0.12)

// funcion expresada
const totalOrden2 = function(precio, iva) {
    return precio + (precio * iva)
}
totalOrden2(100, 0.12)

// funcion con parametros por defecto
const totalOrden3 = function(precio, iva = 0.12) {
    return precio + (precio * iva)
}
totalOrden3(100)

// parametros rest
const totalOrden4 = function(precio, ...iva) {
    let total = precio
    iva.forEach((item) => {
        total += item
    })
    return total
}
totalOrden4(100, 0.12, 0.15, 0.18)

// return de una funcion
const totalOrden5 = function(precio, iva) {
    return precio + (precio * iva)
}
totalOrden5(100, 0.12)

// funciones flecha
const totalOrden6 = (precio, iva) => {
    return precio + (precio * iva)
}
totalOrden6(100, 0.12)

// this
const cliente1 = {
    nombre: "Paulo",
    apellido: "Cisneros",
    saludar : function() {
        console.log(`Hola ${this.nombre} ${this.apellido}`);
    }
}
cliente1.saludar()








