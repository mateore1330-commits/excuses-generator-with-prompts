let who = ["Mi perro", "Mi gato", "Mi abuela", "Mi vecino"];
let action = ["comió", "rompió", "perdió", "escondió"];
let what = ["mi tarea", "mi teléfono", "mis llaves", "mi billetera"];
let when = ["ayer", "esta mañana", "hace una hora", "el fin de semana pasado"];

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

let excuse = getRandomElement(who) + " " + getRandomElement(action) + " " + getRandomElement(what) + " " + getRandomElement(when);

console.log(excuse);