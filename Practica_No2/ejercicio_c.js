const personas = [
    {nombre:"Ana",edad:22},
    {nombre:"Luis",edad:25},
    {nombre:"Ivan",edad:37}
 ];

 //tu codigo aqui

 //Encontrar un persona con nombre Luis
const nombres = personas.find(persona => persona.nombre === "Luis")
console.log(nombres);

//Imprimir todas las personas y sus edades
personas.forEach(persona => {
    console.log(`Nombre: ${persona.nombre}, Edad: ${persona.edad}`);
});

//Sumar todas las edades con reduce
const totalEdades = personas.reduce((total, persona) => total + persona.edad, 0);
console.log("Suma total de edades:", totalEdades);
