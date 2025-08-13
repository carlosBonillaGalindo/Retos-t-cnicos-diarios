/*Día 1 – Reto
Problema:
Escribe una función en JavaScript llamada reverseString que reciba un string y devuelva el string invertido sin usar el método reverse() de arrays.

Ejemplo:

reverseString("carlos") // "solrac"
reverseString("frontend") // "dnetnorf"
reverseString("a") // "a"
reverseString("") // ""
Condiciones:

    No puedes usar Array.prototype.reverse().
    Puedes usar bucles (for, while) o recursión.

Criterios de evaluación
    Correctitud (40%)
        Resultado correcto en todos los casos, incluyendo casos especiales (vacío, un carácter, espacios, caracteres especiales).

    Eficiencia (20%)
        Complejidad O(n).
        Sin estructuras extra innecesarias.

    Claridad y legibilidad (20%)
    Variables con nombres descriptivos.
        Indentación clara.
        Pasos lógicos fáciles de seguir.

    Buenas prácticas (20%
        Uso correcto de const y let.
        Función pura.
        Código libre de redundancias.*/

function reverseString (string){
    let stringReversed = '';
    for(i = 1; i <= string.length ;i++){
        stringReversed += string[string.length - i]
    }
    
    return(stringReversed)
}



console.log(reverseString(''));
 