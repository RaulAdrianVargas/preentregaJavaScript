
alert("Bienvenido al programa de compatibilidad sanguinea")

let presentacion = prompt("Ingresa un nombre de usuario, por favor");

let identificar = true 
let intentos = 1

do{

    let usuario = prompt("Ingresar tu nombre (solo tenes " + (4 - intentos) + " intentos).")

    if( usuario == null){
        break
    }

    if( usuario == presentacion && intentos <= 3){
        alert("Bienvenido " + usuario + " has ingresado con exito")
        identificar = false
    }
    else{
        intentos++
        if (intentos > 3){
            alert("No sos bienvenido")
            break
        }
    }

}while (identificar)


function programaJs(){

let start = confirm("¿Quiere ingresar al programa?");
let intento = 0

while (start == true && intento < 3) {
    let pregunta = prompt("¿Cuál es tu grupo y factor? (Ej. a+ ab- 0-, etc.");

    let preguntaMinusculas = pregunta.toLowerCase();

    if (preguntaMinusculas == "0-" || preguntaMinusculas == "o-") {
        alert("Tu sangre es extremadamente valiosa, sos donante universal. Lo único malo es que solo podes recibir sangre de tu mismo grupo y factor");
    } else if (preguntaMinusculas == "0+" || preguntaMinusculas == "o+") {
        alert("Tu sangre es muy valiosa, podes donar a todos los grupos siempre y cuando sean de factor rh positivo. Si necesitas recibir donaciones, necesitas sangre 0+ y/o 0-");
    } else if (preguntaMinusculas == "a+") {
        alert("Tu sangre es bastante valiosa, podes donar a cualquier persona del grupo y factor a+ y ab+. A su vez, si necesitas un transplante, podes recibir sangre de los grupos a+, a-, 0+ y 0-");
    } else if (preguntaMinusculas == "a-") {
        alert("Tu sangre es muy valiosa, podes donar a cualquier persona del grupo y factor a y ab independientemente del factor rh. Si necesitas una donacion, necesitas sangre del tipo a- y/o 0-");
    } else if (preguntaMinusculas == "b+") {
        alert("Tu sangre es muy valiosa, podes donar a cualquier persona del grupo y factor b+ y ab+. Si necesitas una donacion, necesitas sangre del grupo b+, b-, 0+ o 0-");
    } else if (preguntaMinusculas == "b-") {
        alert("Tu sangre es muy valiosa, podes donar a cualquier persona del grupo y factor b y ab. Si necesitas una donacion, necesitas sangre del grupo b- o 0-");
    } else if (preguntaMinusculas == "ab+") {
        alert("Tu sangre es muy valiosa, podes donar unicamente a personas del grupo ab+. Si necesitas una donacion, cualquier persona podria donarte");
    } else if (preguntaMinusculas == "ab-") {
        alert("Tu sangre es muy valiosa, podes donar a personas del grupo ab, ya sea rh positivo o negativo. Si necesitas una donacion, necesitas sangre de cualquier grupo que sea de rh negativo");
    } else {
        alert("Perdon, no es lo que se pidió");
    }
    intento++
    if (intento < 3){
        start = confirm("¿Quiere hacer otra consulta?"+ "Le quedan " + (3 - intento) + " intentos")
    }
}
    alert("Gracias por pasarse por esta app");

}

programaJs()


