function simularPeticionAPI() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Datos recibidos correctamente");
        }, 5000); // 5 segundos de espera para simular una llamada a API
    });
}

async function obtenerDatos() {
    try {
        const resultado = await simularPeticionAPI();
        console.log(resultado);
    } catch (error) {
        console.log("Ocurrió un error:", error);
    }
}

// Llamada a la función async
obtenerDatos();
