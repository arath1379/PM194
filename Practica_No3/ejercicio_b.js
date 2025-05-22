function verificarUsuario(usuario) {
    return new Promise((resolve, reject) => {
        if (usuario === "admin") {
            resolve("Acceso concedido");
        } else {
            reject("Acceso denegado");
        }
    });
}

// Prueba con "admin"
verificarUsuario("admin")
    .then(resultado => { console.log(resultado); })   // Acceso concedido
    .catch(error => { console.log(error); });

// Prueba con "Ivan"
verificarUsuario("Ivan")
    .then(resultado => { console.log(resultado); })
    .catch(error => { console.log(error); });         // Acceso denegado

verificarUsuario("Arath")
    .then(resultado => { console.log(resultado); })
    .catch(error => { console.log(error); });         // Acceso denegado