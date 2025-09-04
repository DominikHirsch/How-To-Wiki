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
        "excerpt":" 🎉 custom-sidebar.html geladen!   Definition: Command Line Interface (CLI)   Ein Command Line Interface (CLI) ist eine textbasierte Benutzerschnittstelle, die es ermöglicht, ein Computersystem durch die Eingabe von Befehlen in einer Zeile (engl. command line) zu steuern. Im Gegensatz zu grafischen Benutzeroberflächen (GUIs), bei denen der Benutzer durch Symbole, Buttons und Menüs navigiert, erfolgt die Interaktion mit einer CLI über reine Tastatureingaben.   Im universitären Kontext wird die CLI als eine Abstraktionsebene zwischen Nutzer und Betriebssystemkern (Kernel) verstanden:      Der Nutzer formuliert Befehle in einer vordefinierten Syntax.   Diese werden vom Shell-Interpreter (z. B. bash, zsh, powershell) geparst und an das Betriebssystem weitergeleitet.   Das Betriebssystem verarbeitet die Anweisung und gibt die Ausgabe – oft ebenfalls als Text – zurück.   CLI gilt als direkter, präziser und skriptbarer Kommunikationskanal zwischen Mensch und Maschine und bildet die Grundlage vieler automatisierter Prozesse in Informatik, Wissenschaft und Softwareentwicklung.     Grundlegende Handhabung der CLI   Eine CLI wird meist über ein Terminal oder eine Konsole aufgerufen.      Unter Linux/macOS: bash oder zsh   Unter Windows: cmd.exe oder PowerShell   Man arbeitet nach dem Muster:   befehl [optionen] [argumente]   Beispiel 1: Navigation im Dateisystem   # Zeigt das aktuelle Verzeichnis an pwd  # Zeigt den Inhalt des Verzeichnisses ls  # Wechselt in ein Unterverzeichnis \"Dokumente\" cd Dokumente   Beispiel 2: Arbeiten mit Dateien   # Erstellt eine neue Datei touch test.txt  # Schreibt Text in eine Datei echo \"Hallo Welt\" &gt; test.txt  # Zeigt den Inhalt der Datei an cat test.txt   Beispiel 3: Kombination von Befehlen (Pipes)   # Zählt die Anzahl der Zeilen in einer Datei cat test.txt | wc -l     Besonderheiten und Vorteile einer CLI      Automatisierung: Befehle können in Skripten zusammengefasst und wiederholt ausgeführt werden.   Präzision: Jeder Befehl macht genau das, was er soll, ohne Umwege über Klicks.   Ressourcenschonend: CLI benötigt keine grafische Oberfläche, läuft daher auch auf Servern oder in Minimalumgebungen.   Lernkurve: Anfangs steil, da man Syntax und Befehle kennen muss – auf lange Sicht aber effizienter.     Wichtige CLI-Befehle für die Übungen   Für die Praxisphase sollen die Studierenden folgende Befehle beherrschen:                  Kategorie       Befehle       Zweck                               Navigation       pwd, ls, cd, mkdir, rmdir       Verzeichnisstruktur verstehen, navigieren                         Dateien       touch, echo, cat, rm, cp, mv       Dateien erstellen, lesen, löschen, kopieren, verschieben                         Information &amp; Suche       wc, grep, find       Textanalyse und Suche in Dateien                         Kombination &amp; Pipes       `                                       | , &gt;,»`       Befehle verknüpfen, Ausgaben umleiten                         Systeminfos       whoami, date, uptime       Grundlegende Systeminformationen abfragen                      Hinweis: In den Übungen wird auf diese Befehle zurückgegriffen. Ziel ist es, Sicherheit im Umgang mit dem Terminal zu entwickeln.    ","categories": [],
        "tags": [],
        "url": "/How-To-Wiki/tools-and-technologies/cli/",
        "teaser": null
      },{
        "title": "01 – Navigation",
        "excerpt":"Aufgabe      Zeige das aktuelle Verzeichnis an.   Erstelle ein neues Verzeichnis namens Semester1.   Wechsle in das Verzeichnis Semester1.   Erstelle darin zwei Unterverzeichnisse: Woche1 und Woche2.   Wechsle wieder zurück ins Ausgangsverzeichnis.      Tipp: Nutze die Befehle pwd, mkdir und cd.   ","categories": [],
        "tags": [],
        "url": "/How-To-Wiki/tools-and-technologies/cli/cli_ex_01/",
        "teaser": null
      },{
        "title": "CLI Übung 01 – Lösung",
        "excerpt":"Lösung   pwd mkdir Semester1 cd Semester1 mkdir Woche1 Woche2 cd ..  ","categories": [],
        "tags": [],
        "url": "/How-To-Wiki/tools-and-technologies/cli/cli_ex_01_solution/",
        "teaser": null
      },{
        "title": "02 – Dateien",
        "excerpt":"Aufgabe      Erstelle eine Datei notizen.txt.   Schreibe den Text “Hallo Studierende!” in die Datei.   Zeige den Inhalt der Datei an.   Lösche die Datei wieder.      Tipp: Nutze touch, echo, cat und rm.   ","categories": [],
        "tags": [],
        "url": "/How-To-Wiki/tools-and-technologies/cli/cli_ex_02/",
        "teaser": null
      },{
        "title": "02.2 – Test",
        "excerpt":"Test  ","categories": [],
        "tags": [],
        "url": "/How-To-Wiki/tools-and-technologies/cli/cli_ex_02_02/",
        "teaser": null
      },{
        "title": "02.2 – Lösung",
        "excerpt":"Test  ","categories": [],
        "tags": [],
        "url": "/How-To-Wiki/tools-and-technologies/cli/cli_ex_02_02_solution/",
        "teaser": null
      },{
        "title": "02 – Lösung",
        "excerpt":"Lösung   touch notizen.txt echo \"Hallo Studierende!\" &gt; notizen.txt cat notizen.txt rm notizen.txt  ","categories": [],
        "tags": [],
        "url": "/How-To-Wiki/tools-and-technologies/cli/cli_ex_02_solution/",
        "teaser": null
      },{
        "title": "03 – Kopieren und Verschieben",
        "excerpt":"Aufgabe      Erstelle eine Datei projekt.txt.   Kopiere die Datei nach projekt_backup.txt.   Verschiebe die Originaldatei in ein Verzeichnis Woche1.   Zeige den Inhalt von Woche1 an.      Tipp: Nutze touch, cp, mv, ls.   ","categories": [],
        "tags": [],
        "url": "/How-To-Wiki/tools-and-technologies/cli/cli_ex_03/",
        "teaser": null
      },{
        "title": "03 – Lösung",
        "excerpt":"Lösung   touch projekt.txt cp projekt.txt projekt_backup.txt mv projekt.txt Woche1/ ls Woche1/  ","categories": [],
        "tags": [],
        "url": "/How-To-Wiki/tools-and-technologies/cli/cli_ex_03_solution/",
        "teaser": null
      },{
        "title": "04 – Pipes und Weiterleitungen",
        "excerpt":"Aufgabe      Erstelle eine Datei zahlen.txt mit den Zahlen 1 bis 5, jeweils in einer Zeile.   Zähle die Anzahl der Zeilen in der Datei.   Hänge die Zahl 6 an die Datei an.   Zeige alle Zahlen größer 3.      Tipp: Nutze echo, &gt;, &gt;&gt;, cat, wc -l, grep.   ","categories": [],
        "tags": [],
        "url": "/How-To-Wiki/tools-and-technologies/cli/cli_ex_04/",
        "teaser": null
      },{
        "title": "04 – Lösung",
        "excerpt":"Lösung   echo -e \"1\\n2\\n3\\n4\\n5\" &gt; zahlen.txt cat zahlen.txt | wc -l echo \"6\" &gt;&gt; zahlen.txt grep -E \"^[4-6]$\" zahlen.txt  ","categories": [],
        "tags": [],
        "url": "/How-To-Wiki/tools-and-technologies/cli/cli_ex_04_solution/",
        "teaser": null
      },{
        "title": "05 – Mini-Projekt",
        "excerpt":"Aufgabe      Erstelle ein Verzeichnis Semester2.   Wechsle in Semester2 und erstelle Unterverzeichnisse Woche1, Woche2.   Lege in jedem Unterverzeichnis eine Datei aufgabe.txt an.   Schreibe in jede Datei den Text “Übung abgeschlossen”.   Zeige den Inhalt von Semester2/Woche2/aufgabe.txt an.      Tipp: Nutze mkdir, cd, touch, echo, cat.   ","categories": [],
        "tags": [],
        "url": "/How-To-Wiki/tools-and-technologies/cli/cli_ex_05/",
        "teaser": null
      },{
        "title": "05 – Lösung",
        "excerpt":"Lösung   mkdir Semester2 cd Semester2 mkdir Woche1 Woche2 touch Woche1/aufgabe.txt Woche2/aufgabe.txt echo \"Übung abgeschlossen\" &gt; Woche1/aufgabe.txt echo \"Übung abgeschlossen\" &gt; Woche2/aufgabe.txt cat Woche2/aufgabe.txt  ","categories": [],
        "tags": [],
        "url": "/How-To-Wiki/tools-and-technologies/cli/cli_ex_05_solution/",
        "teaser": null
      },{
        "title": "Seite 2",
        "excerpt":"Seite 2   Dies ist Seite 2 im Wiki.  Sie hat zwei Unterseiten.  ","categories": [],
        "tags": [],
        "url": "/How-To-Wiki/seite2/",
        "teaser": null
      },{
        "title": "Tools and Technologies",
        "excerpt":"Übersicht   In diesem Kapitel werden die zentralen Tools und Technologien vorgestellt, die du benötigst, um dein eigenes Wiki zu erstellen. Ziel ist es, dir eine solide Grundlage zu geben, bevor wir in die Praxisphase starten.   Die Unterverzeichnisse in diesem Kapitel enthalten jeweils detaillierte Informationen, Tutorials und Übungen zu den einzelnen Tools:      01_cli/ – Command Line Interface (CLI)            Einführung in die textbasierte Steuerung von Computersystemen       Übungen zur Navigation, Dateiverwaltung und Kombination von Befehlen           02_obsidian_IDE/ – Obsidian            Vorstellung der Notiz-Software und ihrer Vorteile für Wiki-Strukturen       Übungen zum Erstellen, Verlinken und Organisieren von Inhalten           03_markdown/ – Markdown            Grundlegende Auszeichnungssprache für Texte in Wikis       Übungen zu Überschriften, Listen, Links, Tabellen und Formatierungen           04_git/ – Git            Versionskontrolle und Zusammenarbeit über Git und GitHub       Übungen zu Branches, Commits, Push/Pull und Konfliktlösungen             Warum diese Tools?   1. Command Line Interface (CLI)     Direkter und präziser Zugriff auf das System   Grundlage für Automatisierung und Skripte   Ermöglicht das Arbeiten auf Servern oder minimalen Umgebungen   2. Obsidian     Leistungsstarkes Werkzeug für die Verwaltung von Notizen   Unterstützt Verlinkungen zwischen Seiten und Hierarchien   Ideal, um die Struktur eines Wikis zu planen und Inhalte vorzubereiten   3. Markdown     Leicht verständliche Auszeichnungssprache   Plattformunabhängig und kompatibel mit Jekyll/Wiki-Systemen   Ermöglicht schnelle, saubere Formatierung von Inhalten   4. Git     Versionskontrolle für Zusammenarbeit und Nachvollziehbarkeit   Ermöglicht paralleles Arbeiten in Teams   Integration mit GitHub Pages für die Veröffentlichung des Wikis     Ziel dieser Einführung   Bevor wir in die Praxisphase starten, sollst du ein Verständnis dafür entwickeln:      Welche Werkzeuge wir einsetzen   Warum wir sie einsetzen   Wie die einzelnen Kapitel des Wikis strukturiert sind   Diese Informationen helfen dir, gezielt in die Übungen einzusteigen und dein Wiki effizient aufzubauen.  ","categories": [],
        "tags": [],
        "url": "/How-To-Wiki/tools-and-technologies/",
        "teaser": null
      },]
