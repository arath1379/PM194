const persona = {
    nombre: "Ivan Isay",
    edad: 37,
    direccion: {
        ciudad: "Queretaro",
        pais: "Mexico"
    }
};

//aplica destructuracion aqui
const {nombre, edad, direccion: {ciudad, pais}} = persona;
//imprime el mensaje
console.log('Me llamo ' + nombre + ' y tengo ' + edad + ' años y vivo en ' + ciudad + ', ' + pais);