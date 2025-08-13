/* Problema:
Escribe una función llamada findMostFrequent que reciba un array y devuelva el elemento que más veces se repite.
Si hay empate, devuelve cualquiera de los que más se repiten.

Ejemplo:

js

findMostFrequent([1, 2, 2, 3, 1, 2]) // 2
findMostFrequent(["a", "b", "a", "c", "b", "a"]) // "a"
findMostFrequent([true, false, true, true]) // true

Condiciones
No puedes usar librerías externas.
Debe funcionar con cualquier tipo de dato (números, strings, booleanos, etc.).
Maneja el caso de array vacío devolviendo null.

Criterios de evaluación
    Correctitud (40%)
        Funciona para todos los casos de prueba, incluidos casos especiales (array vacío, todos diferentes, empate).

    Eficiencia (20%)
        Complejidad O(n) o O(n log n) aceptable.
        Evitar recorrer el array más veces de lo necesario.

    Claridad y legibilidad (20%)
        Variables con nombres claros.
        Código ordenado y fácil de leer.
    
    Buenas prácticas (20%)
        Uso correcto de const y let.                            
        Validaciones de entrada.
        Función pura. */

function findMostFrequent (receivedArray){
    if(typeof(receivedArray)== 'object'){ 
        if(receivedArray.length === 0){
            return null
        }
        else{
            let mostFreqElem = '';
            let contMFE = 0;

            for(let i = receivedArray.length-1; i >= 0; i-- ){
                if(receivedArray[i] != mostFreqElem){
                    let cont = 0;
                    
                    for(let j= receivedArray.length-1; j>=0; j--){
                        if(receivedArray[i] == receivedArray[j]){
                            cont += 1;
                        }  
                    }
                    if(cont >= contMFE){
                        mostFreqElem = receivedArray[i];
                        contMFE = cont;      
                    }
                }
            }
            return(mostFreqElem)
        }
    }else{
        return null
    }
}

console.log(findMostFrequent())