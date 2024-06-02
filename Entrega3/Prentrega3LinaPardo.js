// PrEntrega3 Lina Paola Pardo Quevedo //

let nombre;
let totalCosto = 0;

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

const diasDisponibles = ["Lunes", "Miércoles", "Viernes"];

function registrarUsuario() {
    nombre = document.getElementById("nombre").value.toLowerCase();
    if (nombre !== "") {
        document.getElementById("register").classList.add("hidden");
        document.getElementById("options").classList.remove("hidden");
        alert(`Gracias por registrarte, ${nombre}`);
    } else {
        alert("Por favor ingresa tu nombre");
    }
}

function calcularCostoServicio(costo) {
    totalCosto += costo;
}

function buscarServicioPorId(id) {
    return servicios.find(servicio => servicio.id === id);
}

function seleccionarDiaDisponibles() {
    let mensaje = "Selecciona un día disponible para la esterilización:";
    diasDisponibles.forEach((dia, index) => {
        mensaje += `\n${index + 1}. ${dia}`;
    });
    let diaSeleccionado = parseInt(prompt(mensaje));
    return diasDisponibles[diaSeleccionado - 1];
}

function seleccionarOpcion(opcion) {
    document.getElementById("details").innerHTML = "";
    document.getElementById("details").classList.remove("hidden");
    switch (opcion) {
        case '1':
            seleccionarEsterilizacion();
            break;
        case '2':
            seleccionarVacunacion();
            break;
        case '3':
            seleccionarDesparasitacion();
            break;
        default:
            break;
    }
}

function seleccionarEsterilizacion() {
    let esterilizaciones = prompt("Selecciona especie de tu mascota para esterilizar: \n1. Felino \n2. Canino \nPresiona X para salir.");
    if (esterilizaciones === "1") {
        let felino = prompt("Ingresa el nombre de tu michi.");
        let servicio = buscarServicioPorId(1);
        calcularCostoServicio(servicio.costo);
        let diaSeleccionado = seleccionarDiaDisponibles();
        alert(`El costo para esterilizar a ${felino} es de $${servicio.costo}. Día seleccionado: ${diaSeleccionado}`);
    } else if (esterilizaciones === "2") {
        let kg = parseFloat(prompt("Ingresa cuánto pesa tu canino"));
        let servicio;
        if (kg <= 10) {
            servicio = buscarServicioPorId(2);
        } else if (kg <= 15) {
            servicio = buscarServicioPorId(3);
        } else if (kg <= 20) {
            servicio = buscarServicioPorId(4);
        } else if (kg <= 25) {
            servicio = buscarServicioPorId(5);
        } else {
            alert("Mayores de 25 Kg no se atienden");
        }
        if (servicio) {
            calcularCostoServicio(servicio.costo);
            let diaSeleccionado = seleccionarDiaDisponibles();
            alert(`El peso de tu mascota es ${kg} kg. El costo es de $${servicio.costo}. Día seleccionado: ${diaSeleccionado}`);
            let nombreCan = prompt("Ingresa el nombre de tu canino:");
            alert(`Gracias ${nombreCan}, ya quedó registrad@`);
        }
    }
}

function seleccionarVacunacion() {
    let vacunacion = prompt("Selecciona una opción: \n1. Canino \n2. Felino \nPresiona X para salir.");
    if (vacunacion === "1" || vacunacion === "2") {
        let servicio = vacunacion === "1" ? buscarServicioPorId(6) : buscarServicioPorId(7);
        calcularCostoServicio(servicio.costo);
        alert(`Gracias ${nombre}, tu mascota queda agendada para vacunación. Costo: $${servicio.costo}`);
    } else {
        alert("Opción inválida para vacunación.");
    }
}

function seleccionarDesparasitacion() {
    let desparasitacion = parseInt(prompt(`Ingrese edad de tu mascota ${nombre}`));
    if (!isNaN(desparasitacion) && desparasitacion > 0) {
        let servicio = buscarServicioPorId(8);
        calcularCostoServicio(servicio.costo);
        alert(`${nombre}, tu mascota queda agendada para desparasitación. Costo: $${servicio.costo}`);
    } else {
        alert("Edad inválida para desparasitación.");
    }
}

function finalizar() {
    alert(`El costo total de los servicios para ${nombre} es de $${totalCosto}. ¡Gracias por visitarnos!`);
    localStorage.setItem('nombre', nombre);
    localStorage.setItem('totalCosto', totalCosto);
}
