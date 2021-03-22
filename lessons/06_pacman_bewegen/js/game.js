console.log("Willkommen beim Kurs Programmieren lernen mit Pacman.");

var frames = 0;
var mouthOpen = false;

// Pacmans Koordinaten
var pacmanX = 100;
var pacmanY = 100;

/* Diese Funktion wird einmal beim Laden der Webseite aufgerufen. */
function setup() {

    // Mit der Funktion createCanvas können wir eine neue Zeichenfläche erstellen
    var canvas = createCanvas(800, 600);

    // Wir wollen die Zeichenfläche an eine bestimmte Stelle im HTML-Baum platzieren
    canvas.parent("canvas");
}

/*  Diese Funktion wird pro Sekunde 30 Mal aufgerufen. 
 *  Wir verwenden sie, um die Elemente unseres Spiels zu zeichnen 
 */
function draw() {

    // Zähle die Anzahl Frames
    frames++;

    // Lösche die Zeichenfläche
    clear();

    // Setze den Hintergrund wieder auf Schwarz
    background("#000000");

    // Wir setzen die Farbe auf Gelb
    let yellow = color("yellow");

    // Setze die Füllung auf die eben definierte Farbe Gelb
    fill(yellow);

    // Wir wollen keinen Rand für den Kreis
    noStroke();

    // Alle 50 Frames soll der Mund auf und zu gehen
    if (frames % 20 === 0) {
        mouthOpen = !mouthOpen;
    }

    // Auf Basis der Variable entscheiden wir, welche Version wir zeichnen müssen (Kreis oder Bogen)
    // Wir verwenden hier die globalen Variablen für Pacman's Koordinaten
    if (mouthOpen) {
        arc(pacmanX, pacmanY, 40, 40, PI / 8, 2 * PI - PI / 8, PIE);
    }
    else {
        circle(pacmanX, pacmanY, 40);
    }

    // Bewege Pacman 1 Pixel nach rechts
    pacmanX += 1;
}
