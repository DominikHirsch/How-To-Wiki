---
title: "04 – Lösung"
permalink: /tools-and-technologies/cli/cli_ex_04_solution/
---

## Lösung

```bash
echo -e "1\n2\n3\n4\n5" > zahlen.txt
cat zahlen.txt | wc -l
echo "6" >> zahlen.txt
grep -E "^[4-6]$" zahlen.txt
```
