console.log("Willkommen beim Kurs Programmieren lernen mit Pacman.");

var frames = 0;
var mouthOpen = false;

// Pacmans Koordinaten
var pacmanX = 100;
var pacmanY = 100;

// Pacmans Bewegungsrichtung
var pacmanDirection = "right";

// Die Schrittgröße pro Frame in Pixel
var pacmanStepSize = 3;

// Pacmans Größe (Durchmesser in Pixel)
var pacmanSize = 40;

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

    // Zeichne Wände
    drawWalls();

    // Wir lagern das Zeichnen von Pacman in eine Funktion aus
    drawPacman();

    // Auch die Logik für die Bewegung lagern wir aus
    movePacman();
}

/*  Diese Funktion wird aufgerufen, wenn eine Taste gedrückt wurde. 
 *  Die Variable keyCode beinhalted den ASCII Code der Taste.
 */
function keyPressed() {

    // Wenn eine Pfeiltaste gedrückt wurde Pacmans Richtung ändern
    switch (keyCode) {
        case RIGHT_ARROW:
            pacmanDirection = "right";
            break;
        case LEFT_ARROW:
            pacmanDirection = "left";
            break;
        case DOWN_ARROW:
            pacmanDirection = "down";
            break;
        case UP_ARROW:
            pacmanDirection = "up";
            break;
        // Pacman vergrößern (+)
        case 187:
            pacmanSize += 1;
            break;
        // Pacman verkleinern (-)
        case 189:
            pacmanSize -= 1;
            break;
    }
}

/* Diese Funktion kümmert sich um das korrekte Zeichnen von Pacman
 * und berücksichtigt dabei auch die Bewegungsrichtung.
 */
function drawPacman() {
    
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
        switch (pacmanDirection) {
            case "right":
                arc(pacmanX, pacmanY, pacmanSize, pacmanSize, PI / 4, PI * (7 / 4), PIE);
                break;
            case "left":
                arc(pacmanX, pacmanY, pacmanSize, pacmanSize, PI * (5 / 4), PI * (3 / 4), PIE);
                break;
            case "down":
                arc(pacmanX, pacmanY, pacmanSize, pacmanSize, PI * (3 / 4), PI / 4, PIE);
                break;
            case "up":
                arc(pacmanX, pacmanY, pacmanSize, pacmanSize, PI * (7 / 4), PI * (5 / 4), PIE);
                break;
        }
    }
    else {
        circle(pacmanX, pacmanY, pacmanSize);
    }
}

/* Diese Funktion kümmert sich um Pacmans Bewegung und
 * dass er nicht aus dem Bild läuft.
 */
function movePacman() {
    // Bewege Pacman um die Schrittgröße (Pixel) in die aktuelle Richtung
    switch (pacmanDirection) {
        case "right":
            pacmanX += pacmanStepSize;
            break;
        case "left":
            pacmanX -= pacmanStepSize;
            break;
        case "down":
            pacmanY += pacmanStepSize;
            break;
        case "up":
            pacmanY -= pacmanStepSize;
            break;
    }

    // Prüfe, ob Pacman aus dem Bild läuft und setze ihn
    // ggf. auf die gegenüber liegende Seite
    if (pacmanX > width + pacmanSize / 2) {
        pacmanX = 0 - pacmanSize / 2;
    }
    else if (pacmanX < 0 - pacmanSize / 2) {
        pacmanX = width + pacmanSize / 2;
    }
    else if (pacmanY > height + pacmanSize / 2) {
        pacmanY = 0 - pacmanSize / 2;
    }
    else if (pacmanY < 0 - pacmanSize / 2) {
        pacmanY = height + pacmanSize / 2;
    }
}

/* Diese Funktion zeichnet die Wände auf unsere Spielfläche
  */
function drawWalls() {
    // Wir setzen die Farbe auf Blau
    let blue = color("blue");

    // Setze die Füllung auf die eben definierte Farbe Blau
    fill(blue);

    rect(width / 2 - 20, 100, 20, height - 200);
}