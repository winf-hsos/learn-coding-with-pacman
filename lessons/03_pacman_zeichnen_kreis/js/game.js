console.log("Willkommen beim Kurs Programmieren lernen mit Pacman.");

/* Diese Funktion wird einmal beim Laden der Webseite aufgerufen. */
function setup() {

    // Mit der Funktion createCanvas können wir eine neue Zeichenfläche erstellen
    var canvas = createCanvas(800, 600);

    // Wir wollen die Zeichenfläche an eine bestimmte Stelle im HTML-Baum platzieren
    canvas.parent("canvas");

    // Wir wollen einen schwarzen Hintergrund
    background("#000000");
   
    // Wir setzen die Farbe auf Gelb
    let yellow = color("#FFFF00");

    // Setze die Füllung auf die eben definierte Farbe Gelb
    fill(yellow);

    // Wir wollen keinen Rand für den Kreis
    noStroke();

    // Zeichne einen Kreis an der Position x = 100 und y = 100
    // Der Kreis hat einen Radius von 40 Pixel
    circle(100, 100, 40);
    
}
