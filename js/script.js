function numberGenerator(min, max) {
  localMin = min;
  localMax = max - min + 1;
  return Math.floor(Math.random() * (localMax - localMin)) + localMin;
}
console.log(numberGenerator(0, 10));

// ----------------------------------------------------------------
function es1() {

  // Creare un array di oggetti: ogni oggetto descriverà
  // una bici da corsa con le seguenti proprietà: nome e peso.
  // Stampare a schermo la bici con peso minore.

  let biciDaCorsa = [
    {
      "nome": "atala",
      "peso": 1
    },
    {
      "nome": "montana",
      "peso": 2
    },
    {
      "nome": "bianchi",
      "peso": 3
    }

  ]; // FINE let BICI

  let biciLeggera = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < biciDaCorsa.length; i++) {
    const bici = biciDaCorsa[i];
    let {nome, peso} = bici;

    if (peso < biciLeggera) {
      biciLeggera = peso;
    }

  }
  console.log("bici più leggera pesa" + " " + biciLeggera);
} // FINE FUNZIONE ES 1

function es2() {
  // Creare un array di oggetti di squadre di calcio.
  // Ogni squadra avrà diverse proprietà:
  // nome, punti fatti, falli subiti.
  // Nome sarà l'unica proprietà da compilare,
  // le altre saranno tutte settate a 0.

  // Generare numeri random al posto degli 0 nelle proprietà:
    // punti fatti e falli subiti

    // Usando la destrutturazione creiamo un nuovo array
    // i cui elementi contengono solo nomi e falli subiti
    // e stampiamo tutto in console.

let teams = [
 {
    "name": "Cosenza FC",
    "score": 0,
    "penalties": 0
  },
  {
    "name": "San Giovanni in Fiore FC",
    "score": 0,
    "penalties": 0
  },
  {
    "name": "Belvedere Marittimo FC",
    "score": 0,
    "penalties": 0
  },
  {
    "name": "Bisignano FC",
    "score": 0,
    "penalties": 0
  },
  {
    "name": "Amantea FC",
    "score": 0,
    "penalties": 0
  },
  {
    "name": "Rogliano FC",
    "score": 0,
    "penalties": 0
  },
  {
    "name": "Diamante FC",
    "score": 0,
    "penalties": 0
  },
  {
    "name": "Casali del Manco FC",
    "score": 0,
    "penalties": 0
  },
  {
    "name": "Lago FC",
    "score": 0,
    "penalties": 0
  },
  {
    "name": "Camigliatello Silano FC",
    "score": 0,
    "penalties": 0
  },
 ];

 for (let i = 0; i < teams.length; i++) {
   const team = teams[i];
   let randomScore = numberGenerator(0, 20);
   let randomFauls = numberGenerator(0, 30);
   team["score"] = randomScore;
   team["penalties"] = randomFauls;
 }
 console.log(teams);

 for (let i = 0; i < teams.length; i++) {
 document.getElementById("lol").innerHTML += teams[i].name + " Gol fatti:  " +  teams[i].score + " Gambe rotte:  " + teams[i].penalties + "<br />";
 }
 const resArr = [];
 for (let i = 0; i < teams.length; i++) {
  const team = teams[i];
  let {score, penalties} = team;

  let resObj = {score, penalties};
  resArr.push(resObj);
 }
 console.log(teams, resArr);

} // FINE FUNZIONE ES2

// ------------------------------------------------------
function init () {
  es1();
  es2();

} // FINE FUNZIONE INIT

$(document).ready(init);
