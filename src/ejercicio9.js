let nota = 'LA';
let numeroMIDI;

if (nota === 'DO') {
    numeroMIDI = 60;
} else if (nota === 'RE') {
    numeroMIDI = 62;
} else if (nota === 'MI') {
    numeroMIDI = 64;
} else if (nota === 'FA') {
    numeroMIDI = 65;
} else if (nota === 'SOL') {
    numeroMIDI = 67;
} else if (nota === 'LA') {
    numeroMIDI = 69;
} else if (nota === 'SI') {
    numeroMIDI = 71;
} else {
    numeroMIDI = 'nota desconocida';
}

console.log(numeroMIDI);
