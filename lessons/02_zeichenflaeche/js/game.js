console.log("Willkommen beim Kurs Programmieren lernen mit Pacman.");

/* Diese Funktion wird einmal beim Laden der Webseite aufgerufen. */
function setup() {

    // Mit der Funktion createCanvas können wir eine neue Zeichenfläche erstellen
    var canvas = createCanvas(800, 600);

    // Wir wollen die Zeichenfläche an eine bestimmte Stelle im HTML-Baum platzieren
    canvas.parent('canvas');

    // Wir wollen einen schwarzen Hintergrund
    background("#000000");
}
