var store = [{
        "title": "Cheatsheets",
        "excerpt":"Ein Cheatsheet ist eine komprimierte Übersicht zu einem bestimmten Thema.  Es fasst die wichtigsten Befehle, Konzepte oder Abläufe so kurz wie möglich zusammen – wie ein Spickzettel.     Eigenschaften eines Cheatsheets      Kurz und knapp: Fokus auf die Essenz, keine langen Erklärungen.   Strukturiert: Häufig in Tabellen, Listen oder Codeblöcken.   Schneller Zugriff: Zum Nachschlagen während der Arbeit.   Visuell: Manche Cheatsheets enthalten Icons, Diagramme oder Syntax-Hervorhebungen.    ","categories": [],
        "tags": [],
        "url": "/How-To-Wiki/cheatsheets/",
        "teaser": null
      },{
        "title": "Github Cheatsheet",
        "excerpt":"Repository &amp; Setup  Initialisiert ein neues Repository im aktuellen Ordner:  git init  Klont ein bestehendes Repository:  git clone &lt;url&gt;  Zeigt die aktuellen Remotes:  git remote -v  Fügt ein Remote hinzu (z. B. GitHub):  git remote add origin &lt;url&gt;   Änderungen verwalten  Status prüfen:  git status  Dateien zur Staging-Area hinzufügen:  git add &lt;datei&gt; git add .       # alle Änderungen  Commit erstellen:  git commit -m \"Nachricht\"   Branches  Neuen Branch erstellen:  git branch &lt;name&gt;  Zu einem Branch wechseln:  git checkout &lt;name&gt;  Branch erstellen und wechseln:  git checkout -b &lt;name&gt;  Branch umbenennen (z. B. in main):  git branch -M main  ","categories": [],
        "tags": [],
        "url": "/How-To-Wiki/cheatsheets/github/",
        "teaser": null
      },{
        "title": "Markdown Cheatsheet",
        "excerpt":"Überschriften  Syntax  # H1 ## H2 ### H3 #### H4 ##### H5 ###### H6  Ergebnis   H1  H2  H3  H4  H5  H6   Textformatierungen  Syntax  *kursiv*   _kursiv_   **fett**   __fett__   ***fett + kursiv***   ~~durchgestrichen~~   `inline code`   Ergebnis kursiv  kursiv  fett  fett  fett + kursiv  durchgestrichen  inline code   Listen   Ungeordnete Listen   Syntax   - Punkt 1 - Punkt 2   - Unterpunkt 2a   - Unterpunkt 2b * Sternchen statt Bindestrich   Ergebnis      Punkt 1        Punkt 2              Unterpunkt 2a       Unterpunkt 2b           Sternchen statt Bindestrich   Geordnete Listen   Syntax   1. Erster 2. Zweiter    1. Unterpunkt a    2. Unterpunkt b   Ergebnis      Erster        Zweiter              Unterpunkt a       Unterpunkt b           Links   Syntax   [Linktext](https://example.com)   Ergebnis Linktext   Bilder   Syntax   ![Alt-Text](https://example.com/bild.png)   Ergebnis    Zitate / Blockquotes   Syntax   &gt; Dies ist ein Zitat &gt;&gt; Verschachteltes Zitat   Ergebnis      Dies ist ein Zitat         Verschachteltes Zitat       Codeblöcke   Inline-Code   Syntax   `print(\"Hallo Welt\")`   Ergebnis print(\"Hallo Welt\")   Mehrzeilige Codeblöcke   Syntax   ```python def hallo():     print(\"Hallo Welt\") ```   Ergebnis  def hallo():     print(\"Hallo Welt\")   Horizontale Linie   Syntax   ---   Ergebnis     Tabellen   Syntax   | Spalte 1 | Spalte 2 | |----------|----------| | A        | B        | | C        | D        |   Ergebnis                  Spalte 1       Spalte 2                       A       B                 C       D           Fußnoten   Syntax   Dies ist ein Satz mit einer Fußnote[^1].  [^1]: Dies ist die Fußnote.   Ergebnis   Dies ist ein Satz mit einer Fußnote1.   Aufgabenlisten / Checklisten   Syntax   - [x] Erledigt - [ ] Offen     - [ ] Unterpunkt         - [x] Noch ein Unterpunkt   Ergebnis      Erledigt   Offen            Unterpunkt                    Noch ein Unterpunkt                                                Dies ist die Fußnote. &#8617;           ","categories": [],
        "tags": [],
        "url": "/How-To-Wiki/cheatsheets/markdown/",
        "teaser": null
      },{
        "title": "Unterseite 1",
        "excerpt":"Unterseite 1   Das ist die erste Unterseite.  ","categories": [],
        "tags": [],
        "url": "/How-To-Wiki/seite2/sub1/",
        "teaser": null
      },{
        "title": "Unterseite 2",
        "excerpt":"Unterseite 2   Das ist die zweite Unterseite.  ","categories": [],
        "tags": [],
        "url": "/How-To-Wiki/seite2/sub2/",
        "teaser": null
      },{
        "title": "Command Line Interface",
        "excerpt":"Definition: Command Line Interface (CLI)   Ein Command Line Interface (CLI) ist eine textbasierte Benutzerschnittstelle, die es ermöglicht, ein Computersystem durch die Eingabe von Befehlen in einer Zeile (engl. command line) zu steuern. Im Gegensatz zu grafischen Benutzeroberflächen (GUIs), bei denen der Benutzer durch Symbole, Buttons und Menüs navigiert, erfolgt die Interaktion mit einer CLI über reine Tastatureingaben.   Im universitären Kontext wird die CLI als eine Abstraktionsebene zwischen Nutzer und Betriebssystemkern (Kernel) verstanden:      Der Nutzer formuliert Befehle in einer vordefinierten Syntax.   Diese werden vom Shell-Interpreter (z. B. bash, zsh, powershell) geparst und an das Betriebssystem weitergeleitet.   Das Betriebssystem verarbeitet die Anweisung und gibt die Ausgabe – oft ebenfalls als Text – zurück.   CLI gilt als direkter, präziser und skriptbarer Kommunikationskanal zwischen Mensch und Maschine und bildet die Grundlage vieler automatisierter Prozesse in Informatik, Wissenschaft und Softwareentwicklung.     Grundlegende Handhabung der CLI   Eine CLI wird meist über ein Terminal oder eine Konsole aufgerufen.      Unter Linux/macOS: bash oder zsh   Unter Windows: cmd.exe oder PowerShell   Man arbeitet nach dem Muster:   befehl [optionen] [argumente]   Beispiel 1: Navigation im Dateisystem   # Zeigt das aktuelle Verzeichnis an pwd  # Zeigt den Inhalt des Verzeichnisses ls  # Wechselt in ein Unterverzeichnis \"Dokumente\" cd Dokumente   Beispiel 2: Arbeiten mit Dateien   # Erstellt eine neue Datei touch test.txt  # Schreibt Text in eine Datei echo \"Hallo Welt\" &gt; test.txt  # Zeigt den Inhalt der Datei an cat test.txt   Beispiel 3: Kombination von Befehlen (Pipes)   # Zählt die Anzahl der Zeilen in einer Datei cat test.txt | wc -l     Besonderheiten und Vorteile einer CLI      Automatisierung: Befehle können in Skripten zusammengefasst und wiederholt ausgeführt werden.   Präzision: Jeder Befehl macht genau das, was er soll, ohne Umwege über Klicks.   Ressourcenschonend: CLI benötigt keine grafische Oberfläche, läuft daher auch auf Servern oder in Minimalumgebungen.   Lernkurve: Anfangs steil, da man Syntax und Befehle kennen muss – auf lange Sicht aber effizienter.     ","categories": [],
        "tags": [],
        "url": "/How-To-Wiki/cli/",
        "teaser": null
      },{
        "title": "Seite 2",
        "excerpt":"Seite 2   Dies ist Seite 2 im Wiki.  Sie hat zwei Unterseiten.  ","categories": [],
        "tags": [],
        "url": "/How-To-Wiki/seite2/",
        "teaser": null
      },]
