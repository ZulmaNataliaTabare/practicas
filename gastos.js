

// let gastos = [   

// [10,20,30,40,50,60,70], 
// [30,10,50,40,20,70,60], 
// [70,60,50,40,30,20,10], 
// [60,70,50,30,40,10,20]

// ]

// console.table(gastos);

// // Gastos de toda la semana: Crear una función que nos sirva para obtener 
// // el total de gastos de una semana específica. 
// // Recordemos que cada fila representa una semana. 
// // El número de semana deberá recibirse por parámetro.

// function gastosDeTodaLaSemana(semana) {

//     total = 0;

//     for (let index = 0; index < gastos[semana-1].length; index++) {
//         total += gastos[semana-1][index]; 
//     }

//     console.log(`El gasto total de la semana es: $${total}`);
    
// }

// gastosDeTodaLaSemana([1]);


// // Gastos de un día de la semana: Crea una función que nos sirva para obtener el total de gastos 
// // de un día específico de la semana. 
// // Por ejemplo, del gasto de todos los martes del mes, 
// // o el gasto de todos los sábados del mes. El número correspondiente 
// // al día deberá recibirse por parámetro. Recuerda que el número de día 
// // es determinado por las columnas.


// function GastosDeUnDíaDeLaSemana(dia){

//     total = 0;

// for (let semana = 0; semana < gastos.length; semana++) {
//     total += gastos[semana][dia];
//     }
//     return total;
// }


// GastosDeUnDíaDeLaSemana(1)

// // Gasto total: Crea una función que nos sirva para obtener 
// // el valor total de gastos de todo un mes. 
// // La función deberá retornar dicho valor.


// function gastoTotal() {

//     total = 0;

//     for (let semana = 0; semana < gastos.length; semana++) {
//     for(let dia = 0; dia < gastos[semana].length;dia++){
//         total += gastos [semana][dia]; 
//     };
// }
//         return total;    
// }

// let totalGastos = gastoTotal();
// console.log(totalGastos);




let persona = {
    nombre: "Ezequiel",
    apellido: "Diaz",
    edad: 30,
    coloresFavoritos : ["Azul", "Rojo"],
    
    saludar : function() {
    return "Hola, ¿cómo estás? " + this.nombre;
}
};


let saludoRecibido = persona.saludar();
console.log (saludoRecibido)