//PreEntrega1 Lina Paola Pardo Quevedo //


    alert("Bienvenido a Jornada Sanitarias para Mascotas");

let nombre = prompt("Ingresa tu nombre").toLowerCase();
let totalCosto = 0;

if (nombre !== "") {
    alert("Gracias por registrarte, " + nombre);
}

function calcularCostoServicio(costo) {
    totalCosto += costo;
}

let opcion = prompt("Selecciona una de las opciones: \n1. Esterilizaciones \n2. Vacunación \n3. Desparasitación \nPresiona X para salir.");
console.log('op',opcion);
while (opcion !== "X") {
    console.log('opw',opcion);
    if (opcion === "1") {
        let esterilizaciones = prompt("Selecciona especie de tu mascota para esterilizar: \n1. Felino \n2. Canino \nPresiona X para salir.")

       console.log('esteri',esterilizaciones);
            if (esterilizaciones === "1") {
                let felino = prompt("Ingresa el nombre de tu michi.");
                calcularCostoServicio(55000);
                alert("El costo para esterilizar a " + felino + " es de $55.000");
            } else if (esterilizaciones === "2") {
                let kg = parseFloat(prompt("Ingresa cuánto pesa tu canino"));
                console.log('kg', kg);

                if (kg <= 10) {
                    calcularCostoServicio(80000);
                    alert("El peso de tu mascota es " + kg + " kg. El costo es de $80.000");
                } else if (kg <= 15) {
                    calcularCostoServicio(90000);
                    alert("El peso de tu mascota es " + kg + " kg. El costo es de $90.000");
                } else if (kg <= 20) {
                    calcularCostoServicio(100000);
                    alert("El peso de tu mascota es " + kg + " kg. El costo es de $100.000");
                } else if (kg <= 25) {
                    calcularCostoServicio(140000);
                    alert("El peso de tu mascota es " + kg + " kg. El costo es de $140.000");
                } else {
                    alert("Mayores de 25 Kg no se atienden ");
                }
                let nombreCan = prompt("Ingresa el nombre de tu canino:");
                alert("Gracias " + nombreCan + ",  ya quedó registrad@");
            

        }
    } else if (opcion === "2") {
        let vacunacion = parseInt(prompt("Selecciona una opción: \n1. Canino \n2. Felino \nPresiona X para salir."));
        console.log(vacunacion);
        
        if (vacunacion === 1 || vacunacion === 2) {
            calcularCostoServicio(50000);
            alert("Gracias " + nombre + ", tu mascota queda agendada para vacunación. Costo: $50.000");
        } else {
            alert("Opción inválida para vacunación.");
        }
    } else if (opcion === "3") {
        let desparasitacion = parseInt(prompt("Ingrese edad de tu mascota " + nombre));
        console.log(desparasitacion);
        
        if (!isNaN(desparasitacion) && desparasitacion > 0) {
            calcularCostoServicio(10000);
            alert(nombre + ", tu mascota queda agendada para desparasitación. Costo: $10.000");
        } else {
            alert("Edad inválida para desparasitación.");
        }
    }

    opcion = prompt("Selecciona una de las opciones: \n1. Esterilizar \n2. Vacunar \n3. Desparasitación \nPresiona X para salir.");
}

alert("El costo total de los servicios para " + nombre + " es de $" + totalCosto + ". ¡Gracias por visitarnos!");

