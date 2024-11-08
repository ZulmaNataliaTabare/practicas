
// Importar prompt-sync
const prompt = require('prompt-sync')();


//Array para almacenar las tareas

let tareas = [];

let categoriasNombres = [
    "Trabajo",
    "Personal",
    //Agregar más categorías según sea necesario.
];



//función que muestra todas las categorías

function mostrarTodasLasCategorias() {
    console.log("Categorías existentes: ");
    categoriasNombres.forEach(function(categoria, indice){
        console.log(indice + ": " + categoria)
    });

}

//función que sirve para cargar nuevas categorías por el usuario

function agregarNuevaCategoriaPorElUsuario(nombreCategoria){
    categoriasNombres.push(nombreCategoria);
    console.log("Categoría " + nombreCategoria + " agregada correctamente!");
}

//Función para agregar una nueva tarea al array

function agregarTarea(nombreRecibido, fechaLimiteRecibida = null) {

    mostrarTodasLasCategorias();

    let numeroCategoria = parseInt(prompt("Ingrese el número de la categoría para la nueva tarea: "));

    if(numeroCategoria >= 0 && numeroCategoria < categoriasNombres.length){
        tareas.push({ nombre: nombreRecibido, completada : false, fechaLimite: fechaLimiteRecibida, categoria : numeroCategoria});
    console.log("Tarea agregada con éxito!");
    
    }else{
        console.log("Número de categoría incorrecto!");
    }
    
}




//Eliminar una tarea

function eliminarTarea(indice) {

    if (indice >= 0 && indice < tareas.length) {
        tareas.splice(indice, 1);
        console.log("Tarea eliminada correctamente!");
    } else {
        console.log("Índice de tarea inválido");
    }

}

//Función para marcar tarea como completada

function completarTarea(indice) {

    if (indice >= 0 && indice < tareas.length) {
        tareas(indice).completada = true;
        console.log("Tarea marcada como correcta")
    } else {
        console.log("Índice de tarea inválido")
    }
}

//Función para modificar una tarea específica

function modificarTarea(indice, nuevoNombre, nuevaFechaLimite = null, nuevoNumeroDeCategoria) {

    if (indice >= 0 && indice < tareas.length) {
        tareas[indice].nombre = nuevoNombre !== undefined ? nuevoNombre : tareas[indice].nombre; 
        tareas[indice].fechaLimite = nuevaFechaLimite !== undefined ?  nuevaFechaLimite : tareas[indice].fechaLimite;
        tareas[indice].categoria = nuevoNumeroDeCategoria !== undefined ? nuevoNumeroDeCategoria : tareas[indice].categoria;
        console.log("Modificación correcta!");        
    } else {
        console.log("{Índice de tarea inválido")
    }

}

//Función que filtra tareas por categorías

function filtrarTareasPorCategoria (numeroCategoria, ){
    let tareasFiltradas = tareas.filter(function(tarea){
        return tarea.categoria === numeroCategoria;
    });
    return tareasFiltradas;
}

//función que muestra cant de tareas completadas

function contarTareasCompletadasPorCategoria(numeroCategoria){

    let tareasCategoria = filtrarTareasPorCategoria(numeroCategoria);
    let tareasCompletadas = tareasCategoria.reduce(function(contador, tarea){
        return tarea.completada ? contador + 1 : contador;
    }, 0)

    let tareasEnTotal = tareasCategoria.length;

    console.log("Tareas completadas de la categoría " + numeroCategoria + ": " + tareasCompletadas + " de " + tareasEnTotal + " tareas!");

}


//función que muestra todas las tareas no completadas

function mostrarTareasNoCompletadas(){
    console.log("Tareas no completadas: ");
    tareas.forEach(function(tarea){
        if(!tarea.completada){
            console.log("-Nombre: " + tarea.nombre + ", Categoría: " + categoriasNombres[tarea.categoria]);
        }

    }); 

}








//Función para mostrar el menú de opciones

function mostrarMenu() {
    console.log("---Menú---");
    console.log("1.Agregar tarea");
    console.log("2.Eliminar tarea");
    console.log("3.Marcar tarea como completada");
    console.log("4.modificar una tarea");
    console.log("5.Mostrar todas las tareas");
    console.log("6.Ver todas las categorías");
    console.log("7.Agregar una nueva categoría");
    console.log("8.Filtrar tareas por categorías");
    console.log("9.Visualizar cantidad de tareas completadas por categoría");
    console.log("10.Visualizar todas las tareas no completadas");
    console.log("0.Salir");

}

// Función para interactuar con el usuario

function interactuarConUsuario() {
    
    let option = -1;

    while (option != 0) {
        mostrarMenu();
        option = parseInt(prompt("Ingrese la opción seleccionada:"));


        switch (option) {
            case 1:
                let nombreTareaNueva = prompt("Ingrese el nombre de la tarea a cargar: ");
                agregarTarea(nombreTareaNueva);
                break;

            case 2:
                let indiceAEliminar = parseInt(prompt("Ingrese el indice de la tarea a eliminar: "));
                eliminarTarea(indiceAEliminar);
                break;

            case 3:
                let indiceACompletar = parseInt(prompt("Ingrese el indice de la tarea a completar: "));
                completarTarea(indiceACompletar);
                break;

                case 4:
                    let indice = parseInt(prompt("Ingrese el índice a modificar: "))    

                    if(indice >= 0 && indice < tareas.length){

                        let opcion = parseInt(prompt("¿Qué propiedad desea modificar? 1. Nombre, 2. Fecha límite, 3. Número de categoría"));
                        
                        switch (opcion) {
                            case 1:
                                let nuevoNombre = propmt("ingrese el nuevo nombre de su tarea: ");
                                modificarTarea(indice, nuevoNombre);
                                break;
                        
                            case 2: 
                            let nuevaFechaLimite = (propmt("Ingrese la nueva fecha límite paa su tarea: "))
                            modificarTarea (indice, undefined, nuevaFechaLimite);
                            break;

                            case 3: 
                            let nuevoNumeroDeCategoria =parseInt(prompt("Ingrese nuevo número de categoría: "));
                            if(nuevoNumeroDeCategoria >= 0 && nuevoNumeroDeCategoria < categoriasNombres.length){
                                modificarTarea(indice, undefined, undefined, nuevoNumeroDeCategoria);
                            }
                            break;
                            default:
                                break;
                        }

                    }else{
                        console.log("Índice de tarea incorrecto!")
                    }

                    
                    break;

                    case 5:
                        console.log("---LISTA DE TAREAS---");
                        console.log(tareas);
                        break;

                        case 6:
                        mostrarTodasLasCategorias()
                        break;

                        case 7:
                            let nuevaCategoria = prompt("Ingrese el nombre de la nueva Categoría a agregar: ");
                            agregarNuevaCategoriaPorElUsuario(nuevaCategoria);
                        break;

                        case 8:
                            mostrarTodasLasCategorias();
                            let nroCategoria = parseInt(prompt("Ingrese el número de la categoría a filtrar: "));
                            let tareasCategoria = filtrarTareasPorCategoria(nroCategoria);

                            console.log("Tareas de la categoría seleccionada: ");
                            console.log(tareasCategoria);
                            break;

                            case 9:
                                mostrarTodasLasCategorias();
                                let nroCateg = parseInt(prompt("Ingrese el número de la categoría a visualizar: "));
                                contarTareasCompletadasPorCategoria(nroCateg);
                                break;

                            case 10:
                                mostrarTareasNoCompletadas(); 
                                break;



            default:
                console.log("Opción inválida")
                break;
        }
    }
}

        interactuarConUsuario();



// agregarTarea("Pasear al perro", "28-12-24");
// agregarTarea("Comprar cena");
