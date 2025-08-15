
/*Día 3 – Reto

Problema:
Crea una función isAnagram que reciba dos strings y devuelva true si son anagramas (tienen las mismas letras con la misma cantidad de repeticiones, sin importar el orden), o false en caso contrario.

Ejemplos:

isAnagram("listen", "silent") // true
isAnagram("rail safety", "fairy tales") // true
isAnagram("hello", "world") // false
isAnagram("Ana", "nAa") // true

Condiciones

Ignorar mayúsculas/minúsculas.

Ignorar espacios.

Solo letras, no te preocupes por signos de puntuación.

Si alguno no es string, devolver false.

Criterios de evaluación

    Correctitud (40%)
        Funciona para todos los casos, incluyendo espacios y mayúsculas/minúsculas.
        Devuelve false para tipos de datos incorrectos.

    Eficiencia (20%)
        Idealmente O(n) o O(n log n).
        Sin procesos innecesarios.

    Claridad y legibilidad (20%)
        Nombres de variables claros.
        Pasos lógicos fáciles de seguir.

    Buenas prácticas (20%)
        Uso correcto de const y let.
        Validaciones de entrada.
        Función pura.*/


function isAnagram(string1, string2){
    
    let char = string1[0];
    let regex = new RegExp(char, "i");
    let cont = 0;

    while(cont < string1.length  ){
        if(char != ' '  ){
            if(regex.test(string2) ){
                string2 = string2.replace(char, "");
                char = string1[cont + 1];
                regex = new RegExp(char, "i")

            }else{
                return false;
            }
        }
        cont++;
      
    }
    return true

}

console.log(isAnagram("Ana", "nAa"));