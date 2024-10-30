//Array para almacenar las tareas

let tareas = [];

//Función para agregar una nueva tarea al array

function agregarTarea(nombreRecibido, fechaLimiteRecibida = null){
    tareas.push({ nombre : nombreRecibido , completada : false , fechaLimite : fechaLimiteRecibida});
}

//Eliminar una tarea

function eliminarTarea(indice){

    if(indice >= 0 && indice < tareas.length){
        tareas.splice(indice, 1);
        console.log("Tarea eliminada correctamente!");
    }else{
        console.log("Índice de tarea inválido");
    }
    
}

//Función para marcar tarea como completada

function completarTarea(indice){

    if(indice >= 0 && indice < tareas.length){
        tareas(indice).completada = true;
        console.log("Tarea marcada como correcta")
    }else{
        console.log("Índice de tarea inválido")
    }
}

//Función para modificar una tarea específica

function modificarTarea(indice, nuevoNombre){

    if(indice >= 0 && indice < tareas.length){
        tareas[indice].nombre = nuevoNombre;
    }

}





// agregarTarea("Pasear al perro", "28-12-24");
// agregarTarea("Comprar cena");
