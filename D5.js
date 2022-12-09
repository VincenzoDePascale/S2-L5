/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];

//console.log(pets);

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

//pets.sort();

//console.log(pets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

//for (let i = pets.length - 1; i >= 0; i--) {
//  console.log(pets[i]);
//}

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

//console.log("prima", pets);
//pets.push(pets[0]);
//pets.shift();
//console.log("dopo", pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

//console.log("prima", cars);

for (let i = 0; i < cars.length; i++) {
  cars[i].licensePlate = true;
}

//console.log("dopo", cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

//console.log("prima", cars);

let carPlus = {
  brand: "Volkswagen2",
  model: "Polo2",
  color: "black2",
  trims: ["life2", "style2", "r-line2"],
  licensePlate: false,
};

cars.push(carPlus);

//console.log("dopo", cars);

//console.log("prima", cars);
for (let i = 0; i < cars.length; i++) {
  cars[i].trims.splice(cars[i].trims.length - 1, 1);
}
//console.log("dopo", cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];

//console.log(justTrims);

for (let i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims[1]);
}
//console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

let displayColor = null;

for (let i = 0; i < cars.length; i++) {
  //console.log("run", [i], cars[i].color);
  if (
    cars[i].color === "blue" ||
    cars[i].color === "black" ||
    cars[i].color === "black2"
  ) {
    displayColor = "Fizz";
  } else {
    displayColor = "Buzz";
  }
  //console.log("run", [i], displayColor);
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];

let i = 0;
while (numericArray[i - 1] !== 32) {
  //console.log(numericArray[i]);
  i++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/

const charactersArray = ["g", "n", "u", "z", "d"];
console.log(charactersArray);
const alfabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const charactersPositions = [];
console.log(charactersPositions);

for (let i = 0; i < charactersArray.length; i++) {
  for (let a = 0; a < alfabet.length; a++) {
    switch (true) {
      case charactersArray[i] === alfabet[a]:
        charactersPositions.push(a + 1);
    }
  }
}

console.log("after", charactersPositions);
