let dia = 'sabado';

if (dia === 'lunes' || dia === 'martes' || dia === 'miércoles' || dia === 'jueves' || dia === 'viernes') {
    console.log("laborable");
} else if (dia === 'sabado' || dia === 'domingo') {
    console.log("fin de semana");
} else {
    console.log("día no válido");
}

