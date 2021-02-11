# Lektion 1: Das Projekt aufsetzen

- [Zurück zur Übersicht der Lektionen](../../README.md#die-lektionen)
- [Zur nächsten Lektion](../lektion_02/README.md)

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

Von diesen 3 Sprachen steht in diesem Tutorial **Javascript** im Vordergrund. Javascript ist von den drei genannten Sprachen die einzige *Programmiersprache*. Die anderen beiden Sprachen sind sogenannte *Auszeichnungssprachen*. Das bedeuetet, wir *beschreiben* mit HTML und CSS die Struktur (Bereiche, Überschriften, Absätze), die Inhalte (Textabschnitte, Bilder, Links, Listen) und das Aussehen (Farben, Schriftarten) von Dokumenten (hier: Webseiten). Mit diesen Sprachen lassen sich keine Programme schreiben, die nach einer bestimmten Logik eine Reihe von Befehlen ausführen. Das können wir im Browser nur mit Javascript.

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

## Die Webseite öffnen

Um eine Webseite im Browser anzuzeigen, benötigen wir einen sogenannten Webserver. Ich empfehle euch im Folgenden 2 Optionen, um die Lektionen dieses Tutorials im Browser zu öffnen und gleichzeitig euren eigenen Code schreiben zu können. Die erste Variante basiert auf der Plattform [Glitch](https://glitch.com/) und läuft vollständig in der Cloud. Das bedeutet, ihr müsst keine Software auf eurem Rechner installieren und könnt direkt loslegen. Wenn ihr eine lokale Entwicklung bevorzugt, empfehle ich euch die Installation von [Visual Studio Code](https://code.visualstudio.com/) und die Verwendung der [Live-Server Erweiterung](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).

### Glitch

Ihr könnt euch einen kostenlosen Glitch-Account erstellen und gleich loslegen. Sobald ihr bei Glitch angemeldet seid erzeugt ihr einfach ein neues Projekt über den "New Project" Button in der oberen rechten Ecke. Dort wählt ihr ganz unten "Import from Github" aus. Es öffnet sich ein Fenster-Popup, in dem nach der URL eures Git-Repositories gefragt wird. Diese bekommt ihr direkt von der Github-Webseite dieses Tutorials. Um es einfach zu machen habe ich die URL für euch kopiert. Fügt den folgenden Wert in das Eingabefeld ein:

```
https://github.com/winf-hsos/learn-coding-with-pacman.git
```

Klickt anschließend auf "OK" und die Dateien für dieses Tutorial werden mit allen Lektionen in eurer neues Glitch-Projekt importiert.

![Ein Projekt in Glitch aus Github importieren](../../resources/images/glitch_import_from_github.gif)

Nach dem Import befindet ihr euch in der Projektansicht. Auf der linken Seite seht ihr die Verzeichnisse und Dateien in eurem Projekt. In der Mitte befindet sich der Code-Editor, in dem ihr Dateien öffnen und bearbeiten könnt. Um das Ergebnis einer bestimmten Lektion zu sehen klickt ihr auf den "Show"-Button und wählt "Next to The Code". Es öffnet sich ein weiterer Bereich am rechten Rand des Bildschirms, in dem eine Vorschau einer HTML-Datei angezeigt werden kann. Um die Vorschau für Lektion 1 zu sehen, müsst ihr euch zunächst durch die Ordnerstruktur klicken. Sobald ihr im Ordner `tutorials/lektion_01` seid, sollte eine Verschau der `index.html`, die sich in diesem Ordner befindet, angezeigt werden.

![Eine Webseite in Glitch anzeigen](../../resources/images/glitch_preview_website.gif)

### Visual Studio Code

Eine Anleitung für Visual Studio Code folgt bald.

- [Zurück zur Übersicht der Lektionen](../../README.md#die-lektionen)
- [Zur nächsten Lektion](../lektion_02/README.md)
