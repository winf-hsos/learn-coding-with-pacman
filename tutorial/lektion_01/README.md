# Lektion 1: Das Projekt aufsetzen

## Was brauchen wir?

Bevor wir uns mit den ersten Schritten der Programmierung beschäftigen, müssen wir unsere Programmierumgebung einrichten. Eine Programmierumgebung besteht im Kern aus wenigen Komponenten:

1. Ein Texteditor, in dem wir unsere Programme schreiben.
2. Eine Verzeichnisstruktur, mit der wir unsere Programmdateien organisieren.

Dazu kommen, abhängig vom konkreten Softwareprojekt, oft noch weitere Komponenten für das z. B. das Kompilieren, für Qualitätschecks oder das Verpacken der Anwendungen vor der Auslieferung. In unserem Fall benötigen wir keine weiteren Komponenten, weshalb wir darauf in diesem Tutorial nicht weiter eingehen werden.

## Welche Sprachen nutzen wir?

Wir erstellen in diesem Tutorial ein Pacman-Spiel als Online-Variante, die vollständig im Browser läuft. Damit sind für uns die verwendeten Sprachen durch den Browser vorgegeben: 

1. HTML, um sichtbare Elemente auf einer Webseite anzuzeigen
2. CSS, um die sichtbaren Elemente zu gestalten (Farbe, Schriftart, Abstände u.v.m).
3. Javascript, für die Programmierlogik.

Von diesen 3 Sprachen steht in diesem Tutorial **Javascript** im Vordergrund. Javascript ist von den drei genannten Sprachen die einzige *Programmiersprache*. Die anderen beiden Sprachen sind sogenannte *Auszeichnungssprachen*. Das bedeuetet, wir *beschreiben* mit HTML und CSS die Struktur (Bereiche, Überschriften, Absätze), die Inhalte (Textabschnitte, Bilder, Links, Listen) und das Aussehen (Farben, Schriftarten) von Dokumenten (hier: Webseiten). Mit diesen Sprachen lassen sich keine Programme schreiben, die nach einer bestimmten Logik eine Reihe von Befehlen ausführen.

## Die Datei- und Ordnerstruktur

In jeder Lektion dieses Tutorials findet ihr einen bestimmten Stand des Spiels. Dabei ist die Struktur immer gleich. Folgende Dateien und Ordner findet ihr in jedem Ordner. Unten am Beispiel der ersten Lektion:

```
lektion_01/
├── css/
│   └── style.css
├── js/
│   └── game.js
└── index.html
```

Im Order `css/` legen wir alle Dateien ab, in denen wir mit der Sprache CSS (Cascading Style Sheets) das Aussehen unserer Webseite beschreiben. Dieses Datei wird eine untergeordnete Rolle spielen, wir legen sie aber von Beginn an in unserem Projekt an.

Im Order `js/` legen wir alle Dateien ab, in denen wir mit Javascript die Programmlogik unseres Spiels definieren. In der ersten Lektion ist dort nur eine Datei `game.js`. In späteren Lektionen werden hier weitere Dateien mit der Endung `.js` hinzukommen, weil wir ein komplexes Programm sinnvoll in kleine Module unterteilen. Das machen wir, um die Übersichtlichkeit und die Wartbarkeit unseres Codes besser zu erhöhen.

Im Root-Ordner jeder Lektion liegt die `index.html`. Das ist der Einstieg in unser Spiel, das der Benutzer später im Browser öffnet. In dieser Datei ist mittels HTML beschrieben, welche Elemente wir auf unserer Startseite des Spiels anzeigen wollen. Darunter fallen zum Beispiel die Spielfläche selbst, aber auch informative Texte zum Spiel oder die Anzeige der aktuellen Punktzahl und Leben des Spielers während des Spiels.

## Das Webseite öffnen





