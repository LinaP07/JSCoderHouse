//PrEntrega2 Lina Paola Pardo Quevedo //

alert("Bienvenido a Jornada Sanitarias para Mascotas")

let nombre = prompt("Ingresa tu nombre").toLowerCase()
let totalCosto = 0;

if (nombre !== "") {
    alert("Gracias por registrarte, " + nombre)
}

function calcularCostoServicio(costo) {
    totalCosto += costo;
}

const servicios = [
    { id: 1, tipo: "Esterilización", especie: "Felino", costo: 55000 },
    { id: 2, tipo: "Esterilización", especie: "Canino", pesoMax: 10, costo: 80000 },
    { id: 3, tipo: "Esterilización", especie: "Canino", pesoMax: 15, costo: 90000 },
    { id: 4, tipo: "Esterilización", especie: "Canino", pesoMax: 20, costo: 100000 },
    { id: 5, tipo: "Esterilización", especie: "Canino", pesoMax: 25, costo: 140000 },
    { id: 6, tipo: "Vacunación", especie: "Canino", costo: 50000 },
    { id: 7, tipo: "Vacunación", especie: "Felino", costo: 50000 },
    { id: 8, tipo: "Desparasitación", costo: 10000 }
];

const veterinarios = [
    { id: 1, nombre: "Dr. López", especialidad: "Cirugía", disponibilidad: ["Esterilización"], costoAdicional: 20000 },
    { id: 2, nombre: "Dra. Martínez", especialidad: "Vacunación", disponibilidad: ["Vacunación", "Desparasitación"], costoAdicional: 15000 },
    { id: 3, nombre: "Dr. González", especialidad: "General", disponibilidad: ["Esterilización", "Vacunación", "Desparasitación"], costoAdicional: 10000 }
];

const diasDisponibles = ["Lunes", "Miércoles", "Viernes"]

function buscarVeterinariosPorServicio(servicio) {
    return veterinarios.filter(veterinario => veterinario.disponibilidad.includes(servicio))
}

function buscarServicioPorId(id) {
    return servicios.find(servicio => servicio.id === id);
}

function seleccionarDiaDisponibles() {
    let mensaje = "Selecciona un día disponible para la esterilización:\n";
    diasDisponibles.forEach((dia, index) => {
        mensaje += (index + 1) + ". " + dia + "\n";
    });
    let diaSeleccionado = parseInt(prompt(mensaje));
    return diasDisponibles[diaSeleccionado - 1];
}


function buscarDiaPorNombre(nombreDia) {
    return diasDisponibles.find(dia => dia.toLowerCase() === nombreDia.toLowerCase())
}


function filtrarDiasPorSubcadena(subcadena) {
    return diasDisponibles.filter(dia => dia.toLowerCase().includes(subcadena.toLowerCase()))
}

let opcion = prompt("Selecciona una de las opciones: \n1. Esterilización \n2. Vacunación \n3. Desparasitación \nPresiona X para salir.")

while (opcion !== "X") {
    if (opcion === "1") {
        let esterilizaciones = prompt("Selecciona especie de tu mascota para esterilizar: \n1. Felino \n2. Canino \nPresiona X para salir.")

        if (esterilizaciones === "1") {
            let felino = prompt("Ingresa el nombre de tu michi.")
            let servicio = buscarServicioPorId(1);
            calcularCostoServicio(servicio.costo);
            let diaSeleccionado = seleccionarDiaDisponibles();
            alert("El costo para esterilizar a " + felino + " es de $" + servicio.costo + ". Día seleccionado: " + diaSeleccionado)
        } else if (esterilizaciones === "2") {
            let kg = parseFloat(prompt("Ingresa cuánto pesa tu canino"))
            let servicio;

            if (kg <= 10) {
                servicio = buscarServicioPorId(2)
            } else if (kg <= 15) {
                servicio = buscarServicioPorId(3)
            } else if (kg <= 20) {
                servicio = buscarServicioPorId(4)
            } else if (kg <= 25) {
                servicio = buscarServicioPorId(5)
            } else {
                alert("Mayores de 25 Kg no se atienden")
            }

            if (servicio) {
                calcularCostoServicio(servicio.costo);
                let diaSeleccionado = seleccionarDiaDisponibles()
                alert("El peso de tu mascota es " + kg + " kg. El costo es de $" + servicio.costo + ". Día seleccionado: " + diaSeleccionado);
                let nombreCan = prompt("Ingresa el nombre de tu canino:")
                alert("Gracias " + nombreCan + ", ya quedó registrad@")
            }
        }
    } else if (opcion === "2") {
        let vacunacion = prompt("Selecciona una opción: \n1. Canino \n2. Felino \nPresiona X para salir.")

        if (vacunacion === "1" || vacunacion === "2") {
            let servicio = vacunacion === "1" ? buscarServicioPorId(6) : buscarServicioPorId(7);
            calcularCostoServicio(servicio.costo);
            alert("Gracias " + nombre + ", tu mascota queda agendada para vacunación. Costo: $" + servicio.costo)
        } else {
            alert("Opción inválida para vacunación.")
        }
    } else if (opcion === "3") {
        let desparasitacion = parseInt(prompt("Ingrese edad de tu mascota " + nombre))

        if (!isNaN(desparasitacion) && desparasitacion > 0) {
            let servicio = buscarServicioPorId(8)
            calcularCostoServicio(servicio.costo)
            alert(nombre + ", tu mascota queda agendada para desparasitación. Costo: $" + servicio.costo)
        } else {
            alert("Edad inválida para desparasitación.");
        }
    }

    opcion = prompt("Selecciona una de las opciones: \n1. Esterilización \n2. Vacunación \n3. Desparasitación \nPresiona X para salir.")
}


let diaBuscado = prompt("Ingrese el nombre del día que desea buscar:")
let resultadoBusqueda = buscarDiaPorNombre(diaBuscado)
if (resultadoBusqueda) {
    alert("Día encontrado: " + resultadoBusqueda)
} else {
    alert("Día no encontrado")
}

let subcadena = prompt("Ingrese una subcadena para filtrar los días disponibles:")
let diasFiltrados = filtrarDiasPorSubcadena(subcadena)
if (diasFiltrados.length > 0) {
    alert("Días encontrados: " + diasFiltrados.join(", "))
} else {
    alert("No se encontraron días con esa subcadena")
}

alert("El costo total de los servicios para " + nombre + " es de $" + totalCosto + ". ¡Gracias por visitarnos!")
