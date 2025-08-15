/*Día 4 – Reto

Problema:
Crea una función compressString que reciba un string y devuelva una versión comprimida contando caracteres consecutivos.

Reglas:

Si la versión comprimida no es más corta que la original, devuelve el string original.
No usar librerías externas.
Distingue entre mayúsculas y minúsculas (case-sensitive).

Ejemplos:

compressString("aaabbc") // "a3b2c1"
compressString("abcd")   // "abcd" (porque "a1b1c1d1" es más largo)
compressString("aAaA")   // "a1A1a1A1"
compressString("")       // ""

Criterios de evaluación

    Correctitud (40%)
        Funciona para strings con caracteres repetidos o no.
        Maneja correctamente strings vacíos y un solo carácter.
        Respeta mayúsculas/minúsculas.

    Eficiencia (20%)
        Complejidad O(n).
        No crea estructuras extra innecesarias.

    Claridad y legibilidad (20%)
        Nombres claros.
        Flujo fácil de seguir.

    Buenas prácticas (20%)
        Uso correcto de const y let.
        Validaciones de entrada.
        Función pura.*/

function compressString(string){
    if (typeof string !== "string") return null
    if (string == "") return("")
    let count = 1;
    let cleanString = string.replace(/\s/g, "");
    let compressedString = [];
    cleanString = cleanString.split("")

    for(let i = 0; i < cleanString.length; i++){
        if(cleanString[i] == cleanString[i+1]){
            count += 1;
        }else{
            compressedString.push(cleanString[i]+count);
            count = 1;
        }        
    }
        
    if(cleanString.join("").length < compressedString.join("").length){
        return string
    }else{
        return compressedString.join("");
    }

}


console.log(compressString(2));
