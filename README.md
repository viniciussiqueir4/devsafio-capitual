# devsafio-capitual

O desafio é receber um array multidimensional (ou não), e fazer todas as combinações possíveis com os itens desse array. Caso um item desse array seja, também, um array, os itens desta dimensão não devem ser reunidos (ex.: `[[1,2],[3,4]]` não deve ter `[1,2]`  ou `[3,4]` como parte da solução, mas apenas `[[1,3], [1,4], [2,3], [2,4]]`).
Mais exemplos:

```
const test1 = [1,2,3] // [[1,2,3]]
const test2 = [1, 2, [3, 4]] // [[1,2,3], [1,2,4]]
const test3 = [1, [2,3], [4,5]] // [[1,2,4], [1,2,5], [1,3,4], [1,3,5]]
const test4 = [1, [2,3], [4,5,6]] // [[1,2,4], [1,2,5], [1,2,6], [1,3,4], [1,3,5], [1,3,6]]
const test5 = [1, [2,3], [4,[5,6]]] // [[1,2,4], [1,2,5], [1,2,6], [1,3,4], [1,3,5], [1,3,6]]
```

Critérios:
- Javascript :sorriso_pequeno:
-- A implementação com a menor quantidade de loops vence.
- Array.map, Array.foreach etc também são loops.
- Sem dependências externas

Critérios de desempate:
- Menor número de iterações (2 loops separados vencem de 1 loop dentro de outro loop)
- Data do envio
