---
title: "Command Line Interface"
permalink: /cli/
---

## Definition: Command Line Interface (CLI)

Ein **Command Line Interface (CLI)** ist eine textbasierte Benutzerschnittstelle, die es ermöglicht, ein Computersystem durch die Eingabe von Befehlen in einer Zeile (engl. *command line*) zu steuern. Im Gegensatz zu grafischen Benutzeroberflächen (GUIs), bei denen der Benutzer durch Symbole, Buttons und Menüs navigiert, erfolgt die Interaktion mit einer CLI über reine Tastatureingaben.

Im universitären Kontext wird die CLI als eine **Abstraktionsebene zwischen Nutzer und Betriebssystemkern (Kernel)** verstanden:

* Der Nutzer formuliert Befehle in einer vordefinierten Syntax.
* Diese werden vom **Shell-Interpreter** (z. B. `bash`, `zsh`, `powershell`) geparst und an das Betriebssystem weitergeleitet.
* Das Betriebssystem verarbeitet die Anweisung und gibt die Ausgabe – oft ebenfalls als Text – zurück.

CLI gilt als **direkter, präziser und skriptbarer Kommunikationskanal** zwischen Mensch und Maschine und bildet die Grundlage vieler automatisierter Prozesse in Informatik, Wissenschaft und Softwareentwicklung.

---

## Grundlegende Handhabung der CLI

Eine CLI wird meist über ein **Terminal** oder eine **Konsole** aufgerufen.

* Unter Linux/macOS: `bash` oder `zsh`
* Unter Windows: `cmd.exe` oder `PowerShell`

Man arbeitet nach dem Muster:

```
befehl [optionen] [argumente]
```

### Beispiel 1: Navigation im Dateisystem

```bash
# Zeigt das aktuelle Verzeichnis an
pwd

# Zeigt den Inhalt des Verzeichnisses
ls

# Wechselt in ein Unterverzeichnis "Dokumente"
cd Dokumente
```

### Beispiel 2: Arbeiten mit Dateien

```bash
# Erstellt eine neue Datei
touch test.txt

# Schreibt Text in eine Datei
echo "Hallo Welt" > test.txt

# Zeigt den Inhalt der Datei an
cat test.txt
```

### Beispiel 3: Kombination von Befehlen (Pipes)

```bash
# Zählt die Anzahl der Zeilen in einer Datei
cat test.txt | wc -l
```

---

## Besonderheiten und Vorteile einer CLI

* **Automatisierung:** Befehle können in **Skripten** zusammengefasst und wiederholt ausgeführt werden.
* **Präzision:** Jeder Befehl macht genau das, was er soll, ohne Umwege über Klicks.
* **Ressourcenschonend:** CLI benötigt keine grafische Oberfläche, läuft daher auch auf Servern oder in Minimalumgebungen.
* **Lernkurve:** Anfangs steil, da man Syntax und Befehle kennen muss – auf lange Sicht aber effizienter.

---

