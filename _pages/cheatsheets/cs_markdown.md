---
title: "Markdown Cheatsheet"
permalink: /cheatsheets/markdown/
---

## Überschriften
**Syntax**
```markdown
# H1
## H2
### H3
#### H4
##### H5
###### H6
```
**Ergebnis**
# H1
## H2
### H3
#### H4
##### H5
###### H6

## Textformatierungen
**Syntax**
```markdown
*kursiv*  
_kursiv_  
**fett**  
__fett__  
***fett + kursiv***  
~~durchgestrichen~~  
`inline code`
```

*Ergebnis*
*kursiv*  
_kursiv_  
**fett**  
__fett__  
***fett + kursiv***  
~~durchgestrichen~~  
`inline code`


## Listen

### Ungeordnete Listen

**Syntax**

```markdown
- Punkt 1
- Punkt 2
  - Unterpunkt 2a
  - Unterpunkt 2b
* Sternchen statt Bindestrich
```

**Ergebnis**

* Punkt 1
* Punkt 2

    * Unterpunkt 2a
    * Unterpunkt 2b

- Sternchen statt Bindestrich

### Geordnete Listen

**Syntax**

```markdown
1. Erster
2. Zweiter
   1. Unterpunkt a
   2. Unterpunkt b
```

**Ergebnis**

1. Erster
2. Zweiter

    1. Unterpunkt a
    2. Unterpunkt b

## Links

**Syntax**

```markdown
[Linktext](https://example.com)
```

**Ergebnis**
[Linktext](https://example.com)

## Bilder

**Syntax**

```markdown
![Alt-Text](https://example.com/bild.png)
```

**Ergebnis**
![Alt-Text](https://example.com/bild.png)

## Zitate / Blockquotes

**Syntax**

```markdown
> Dies ist ein Zitat
>> Verschachteltes Zitat
```

**Ergebnis**

> Dies ist ein Zitat
> > Verschachteltes Zitat

## Codeblöcke

### Inline-Code

**Syntax**

```markdown
`print("Hallo Welt")`
```

**Ergebnis**
`print("Hallo Welt")`

### Mehrzeilige Codeblöcke

**Syntax**

````markdown
```python
def hallo():
    print("Hallo Welt")
```
````


**Ergebnis**
```python
def hallo():
    print("Hallo Welt")
````

## Horizontale Linie

**Syntax**

```markdown
---
```

## **Ergebnis**

## Tabellen

**Syntax**

```markdown
| Spalte 1 | Spalte 2 |
|----------|----------|
| A        | B        |
| C        | D        |
```

**Ergebnis**

| Spalte 1 | Spalte 2 |
| -------- | -------- |
| A        | B        |
| C        | D        |

## Fußnoten

**Syntax**

```markdown
Dies ist ein Satz mit einer Fußnote[^1].

[^1]: Dies ist die Fußnote.
```

**Ergebnis**

Dies ist ein Satz mit einer Fußnote[^1].

[^1]: Dies ist die Fußnote.

## Aufgabenlisten / Checklisten

**Syntax**

```markdown
- [x] Erledigt
- [ ] Offen
```

**Ergebnis**

* [x] Erledigt
* [ ] Offen


