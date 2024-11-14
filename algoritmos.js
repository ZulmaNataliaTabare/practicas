// Desafio práctico
// Te invitamos a realizar los siguientes ejercicios que nos brindarán habilidades en la manipulación 
// de arrays, strings y objetos. Dichos ejercicios requieren no solo conocimientos técnicos sino también 
// desarrollo lógico, por lo que pondrán a prueba nuestros algoritmos. ¡Manos a la obra!

// 1- BubbleSort: Crea una función que reciba por parámetro un array de números y los ordene 
// de menor a mayor mediante el ordenamiento burbuja.

let array = [9,2,6,7,1,8,4,5,3]

for (let j = 0; j < array.length; j++){
    for (let i = 0; i < array.length; i++){
        if(array [i] > array [i + 1]){
            let temp = array [i];
            array [i] = array [i + 1];
            array [i + 1] = temp;
        }
    }
}
    console.log(array);



// 2- Indicar ordenamiento: Crea una función que reciba por parámetro un array de números e 
// indique si el array se encuentra ordenado de forma ascendente o no.

// 3- Contar la cantidad de veces que aparece un número en un array: Crea una función que 
// reciba por parámetro un número y un array de números, y devuelva la cantidad de veces que 
// aparece ese número en el array utilizando búsqueda lineal.

// 4- Obtener votos: Dado un array con los datos de una encuesta realizada sobre los temas musicales 
// más populares —lo que se tiene en el array son objetos definidos con el nombre de un tema musical 
// y cantidad de votos que obtuvo— crear el array con los datos de 5 temas y una cantidad de votos 
// para cada uno. Los votos obtenidos deben estar desordenados. Una vez creado el array, se deberá 
// escribir un algoritmo que, dado un tema, me informe cuántos votos obtuvo, considerando:
// Resolverlo aplicando búsqueda lineal.
// Resolverlo aplicando búsqueda binaria.


