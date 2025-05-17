let nombre = "Armando";         // Se usa let porque será reasignado
const edad = 25;                // No cambia, se usa const

nombre = "Ana Maria";

const saludo = `Hola, ${nombre}. Tienes ${edad} años.`;  // Template literal para mayor claridad

console.log(saludo);            // Imprime el mensaje
