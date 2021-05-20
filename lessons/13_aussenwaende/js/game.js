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

// Eine globale Variable für die Liste aller Wände
var walls = []

/* Diese Funktion wird einmal beim Laden der Webseite aufgerufen. */
function setup() {

    // Mit der Funktion createCanvas können wir eine neue Zeichenfläche erstellen
    var canvas = createCanvas(800, 600);

    // Wir wollen die Zeichenfläche an eine bestimmte Stelle im HTML-Baum platzieren
    canvas.parent("canvas");

    // Wir initialisieren 3 parallele Wände und fügen sie der globalel Liste hinzu
    for (var i = width / 4; i < width; i += width / 4) {
        wall = { x: i, y: 100, width: 20, height: height - 200 }
        walls.push(wall);
    }

    // Wir fügen Außenwände hinzu
    var wallTop = { x: 0, y: 0, width: width, height: 20 };
    var wallBottom = { x: 0, y: height - 20, width: width, height: 20 };
    var wallLeft = { x: 0, y: 20, width: 20, height: height - 2 * 20 };
    var wallRight = { x: width - 20, y: 20, width: 20, height: height - 2 * 20 };

    walls.push(wallTop);
    walls.push(wallBottom);
    walls.push(wallLeft);
    walls.push(wallRight);
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

    // Prüfen, ob es mit dem nächsten Schritt zur Kollision käme
    var collides = checkCollisions();

    // Bewege Pacman nur, wenn kein Kollision entsteht
    if (!collides)
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
            return false;
        case LEFT_ARROW:
            pacmanDirection = "left";
            return false;
        case DOWN_ARROW:
            pacmanDirection = "down";
            return false;
        case UP_ARROW:
            pacmanDirection = "up";
            return false;
        // Pacman vergrößern (+)
        case 187:
            pacmanSize += 1;
            break;
        // Pacman verkleinern (-)
        case 189:
            pacmanSize -= 1;
            break;
    }

    return false;
}

/* Diese Funktion kümmert sich um das korrekte Zeichnen von Pacman
 * und berücksichtigt dabei auch die Bewegungsrichtung.
 */
function drawPacman() {

    // Wir setzen die Farbe auf Gelb
    let yellow = color("#FFFF00");

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

    for (var i = 0; i < walls.length; i++) {
        // Zeichne eine Wand als Rechteck und nutze das neue Objekt für die Wand
        rect(walls[i].x, walls[i].y, walls[i].width, walls[i].height);
    }

}

/* Diese Funktion prüft, ob es mit der nächsten Bewegung eine Kollision
 * zwischen Pacman und der Wand gibt 
 */
function checkCollisions() {

    // Bestimme Pacmans neue Koordinaten, wenn er sich weiter bewegen würde
    var pacmanNewX = pacmanX, pacmanNewY = pacmanY;

    switch (pacmanDirection) {
        case "right":
            pacmanNewX = pacmanX + pacmanStepSize;
            break;
        case "left":
            pacmanNewX = pacmanX - pacmanStepSize;
            break;
        case "down":
            pacmanNewY = pacmanY + pacmanStepSize;
            break;
        case "up":
            pacmanNewY = pacmanY - pacmanStepSize;
            break;
    }

    // Prüfe für alle Wände in der Liste, ob Kollisionen auftreten
    for (var i = 0; i < walls.length; i++) {

        var wall = walls[i];

        // Prüfe, ob die neuen Koordinaten mit der Wand kollidieren würden
        if (wall.x < pacmanNewX + pacmanSize / 2 &&
            wall.x + wall.width > pacmanNewX - pacmanSize / 2 &&
            wall.y < pacmanNewY + pacmanSize / 2 &&
            wall.y + wall.height > pacmanNewY - pacmanSize / 2) {

            return true;
        }
    }

    // Wenn nach der Schleife noch nicht beendet (return) wurde, dann 
    // gibt es keine Kollisionen

    return false;
}