// Variables 
// Contenedor (caja) de información
// ES6(
// let - const 
// var ❌ - Hoisting

// Tipo de datos primitivos
let numOrden = 127 // int
let modulo = "Mis ordenes" //string
let status = true //  boolean
let tipoPago= 'E' // char
let precioFinal = 155.99 // float
const CI = 1171765322 // int - inmutable


// Tipos de datos compuestos
// array - objeto
let ordenes = ["Balon", "Camiseta", "Zapatos"] 
let detalleOrden = {
    id:1,
    estado:"Activo",
    items: ["Balon", "Camiseta", "Zapatos"],
    precio: 155.99
}
// Tarea desafío :  Objeto vs JSON
let detalleOrdenJSON = {
    "id":1,
    "estado":"Activo",
    "items": ["Balon", "Camiseta", "Zapatos"],
    "precio": 155.99
}


// Stings

let nombreCompleto = "   Byron Loarte    "
nombreCompleto.length  // Logitud
nombreCompleto.toUpperCase() // Mayusculas


nombreCompleto.toLowerCase() // Minusculas
nombreCompleto.trim() // Eliminar espacios en blanco
nombreCompleto.charAt(0) // Obtener el primer caracter
nombreCompleto.includes("Byron") // Verificar si existe un texto

console.log(nombreCompleto.length)
console.log(nombreCompleto)

// ES6 - Template String
console.log(`Bienvenido - ${nombreCompleto}`)


// Numbers 
let cuotas =  "6"
console.log(cuotas + 3)
// ES6 
console.log(+cuotas + 3)
// Orden de presedencia
console.log(4 * 3 ** 2)
// 36



// Booleans

let saldoUsuario = 1000
let saldoTrajeta = "1000"

// comparación valor
console.log(saldoUsuario == saldoTrajeta)

// ES6 - Comparacion estricta
// comparación valor y tipo de dato
console.log(saldoUsuario === saldoTrajeta)


// Condicionales 
// if

const carritoCompras = []

if (carritoCompras.length === 0) {
    console.log("El carrito vacío")
}
else{
    console.log("El carrito con productos")
}

// ES6 - Operador Ternario
const mensaje = carritoCompras.length === 0 ? "El carrito vacío" : "El carrito con productos"



// Summary 
// Internet - Punente que conecta dos dispositivos para intercambiar información
// WEB - Puente que conecta dos dispositivos para intercambiar páginas web
// API - Puente que conecta dos dispositivos para intercambiar recursos

// JS - Lenguaje de programación que permite crear páginas web dinámicas e interactivas
// V8 - Compilador de JS
// Node - herramienta + v8 que permite ejecutar JS en el servidor
// EcmaScript - Reglas para escribir JS
// JSON o XML - estandar abierto para el intercambi de información
// JSON vs Objeto  - Comillas dobles en la clave
