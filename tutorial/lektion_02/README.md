# Lektion 2 - Die Zeichenfläche für das Spiel erstellen

Unsere HTML-Seite in der `index.html` hat bisher lediglich eine Überschrift. Für unser Spiel benötigen wir im ersten Schritt eine Fläche, auf der sich die Action abspielen soll und auf der sich Pacman und die Monster frei bewegen können. Wir werden diese Fläche in den folgenden Lektionen verwenden, um nach und nach die Elemente des Spiels zu zeichnen und zu animieren. Daz gehören neben Pacman auch die Monster, sämtliche unbewegliche Gegenstände wie Wände, und auch kleinen Punkte, die Pacman fressen muss.

In HTML 5, was der aktuelle Standard ist, gibt es für diesen Anwendungsfall ein Element mit dem Namen *Canvas*. Genauer gesagt können wir den `<canvas>`-Tag verwenden, um eine Zeichenfläche mit einer bestimmten Breite und Höhe auf unserer Webseite zu plaztieren. Mit bestimmten bereitgetellten Funktionen können wir anschließend fast beliebige Formen darauf zeichnen. Dafür verwenden wir Javascript.

```html
<!-- Ein Canvas in HD-TV-Größe als Zeichenfläche für unser Spiel -->
<canvas width="1280" height="720">
```