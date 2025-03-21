export const configurazione = {
  testo: "a",

  dimensione: 0.8,
  interlinea: 0.7,

  allineamento: "centro",
  percorsoFont: "./assets/InputMonoCondensed-BoldItalic.ttf",

  sensibilitàMicrofonoBase: 1,
  densitàPuntiBase: 1,

  nascondiInterfaccia: true,
};

/**
 * Disegna punto
 * Metti qui quello che vuoi disegnare per ogni punto della font!
 *
 * @typedef {Object} Ingredienti
 * @property {number} x - La coordinata x del punto
 * @property {number} y - La coordinata y del punto
 * @property {number} angolo - L'angolo della curva della font in quel punto
 * @property {number} indice - Il numero del punto nella sequenza (0, 1, 2, 3, ...)
 * @property {number} unita - Unita' di misura: corrisponde al 10% della dimensione più piccola della finestra (larghezza o altezza)
 * @property {number} volume - Il volume del microfono - Varia da 0 a 1
 * @property {number} frameCount - Il numero di frame passati dall'avvio del programma
 * @property {number} [alpha] - Device orientation alpha angle (z-axis rotation) - Varia da 0 a 360
 * @property {number} [beta] - Device orientation beta angle (front-to-back tilt) - Varia da -90 a 90
 * @property {number} [gamma] - Device orientation gamma angle (left-to-right tilt) - Varia da -90 a 90
 *
 * @param {Ingredienti} ingredienti
 */
export function disegnaPunto({
  x,
  y,
  angolo,
  indice,
  unita,
  volume,
  frameCount,
  alpha = 0,
  beta = 0,
  gamma = 0,
}) {
  push();
  translate(x, y);

  //if (indice % 3 == 0) {
  //fill(255, 153, 214);
  //} else if (indice % 3 == 1) {
  //fill(255, 0, 0);
  //}

  if (indice % 2 == 0) {
    fill(255, 153, 214);
  } else if (indice % 2 == 1) {
    fill(255, 0, 0);
  }

  // let larghezza = 50;
  let larghezza = map(sin(frameCount * 2), -1, 1, 70, 150);
  let parla = map(volume * 2, 0, 1, 10, 100);

  //lombrico

  //strokeWeight(3.5);
  //stroke(255, 0, 0);
  //fill(255, 153, 214);
  stroke(0);
  circle(0, 0, larghezza);

  //occhi

  push();

  fill(255);
  noStroke();
  ellipse(-10, -5, 12, 20);

  fill(255);
  noStroke();
  ellipse(+10, -5, 12, 20);

  fill(0);
  ellipse(-10, -5, 6, 20);

  fill(0);
  ellipse(+10, -5, 6, 20);

  fill(0);
  circle(0, +15, parla);

  pop();

  pop();
}

/**
 * Carica le risorse necessarie
 * Esempio: carica immagini, suoni, ecc.
 */
export function caricamentoRisorse() {}

/**
 * Imposta le impostazioni iniziali
 * Esempio: impostazioni di frame rate, misura degli angoli, ecc.
 */
export function impostazioni() {
  frameRate(30);
  angleMode(DEGREES);
  rectMode(CENTER);
}

/**
 * Disegna sotto i punti
 * @param {function} disegnaTesto - La funzione che disegna il testo
 */
export function sotto(disegnaTesto) {
  background(200);

  // [INFO] Rimuovi il commento per disegnare il testo
  fill(200);
  disegnaTesto();
}

/**
 * Disegna sopra i punti
 * @param {function} disegnaTesto - La funzione che disegna il testo
 */
export function sopra(disegnaTesto) {
  // [INFO] Rimuovi il commento per disegnare il testo
  // fill("black");
  // disegnaTesto();
}
