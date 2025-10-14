---
title: "Github Cheatsheet"
permalink: /cheatsheets/cs_github/
---

## Repository & Setup
Initialisiert ein neues Repository im aktuellen Ordner:
```Bash
git init
```
Klont ein bestehendes Repository:
```Bash
git clone <url>
```
Zeigt die aktuellen Remotes:
```Bash
git remote -v
```
Fügt ein Remote hinzu (z. B. GitHub):
```Bash
git remote add origin <url>
```

## Änderungen verwalten
Status prüfen:
```Bash
git status
```
Dateien zur Staging-Area hinzufügen:
```Bash
git add <datei>
git add .       # alle Änderungen
```
Commit erstellen:
```Bash 
git commit -m "Nachricht"
```

## Branches
Neuen Branch erstellen:
```Bash
git branch <name>
```
Zu einem Branch wechseln:
```Bash
git checkout <name>
```
Branch erstellen und wechseln:
```Bash
git checkout -b <name>
```
Branch umbenennen (z. B. in main):
```Bash
git branch -M main
```
