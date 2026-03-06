function contarHistoriaMoto(nombre, edad) {
    let historia = [
        "Todo comenzó cuando " + nombre + ", con " + edad + " años, soñaba con tener su primera moto",
        "El proceso fue difícil porque la universidad ocupaba casi todo su tiempo",
        "Cada vez que estaba cerca de reunir el dinero, surgía algún gasto inesperado",
        "A veces era un libro, otras veces un pago urgente, y el ahorro se desvanecía",
        "Sin embargo, la ilusión nunca desapareció",
        "Con paciencia y esfuerzo, poco a poco fue acercándose a su meta"]

    for (let i = 0; i < historia.length; i++) {
        console.log("Parte " + (i + 1) + ": " + historia[i])}
}

function iniciarPrograma() {
    let nombre = "Thomas"
    let edad = prompt("¿Cuántos años crees que tenía Thomas cuando soñaba con su primera moto?")

    if (!edad) {
        edad = 18}

    let respuesta = prompt("¿Quieres conocer la historia de Thomas? (si/no)")

    if (respuesta.toLowerCase() === "si") {
        contarHistoriaMoto(nombre, edad)
    } else {
        console.log("Está bien, tal vez en otro momento te cuente la historia de Thomas")}
}

iniciarPrograma()