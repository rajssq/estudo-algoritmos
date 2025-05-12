# Anotações sobre Busca Binária

> A **pesquisa binária** é um algoritmo eficiente para encontrar um item em **uma lista ordenada**. Ela funciona dividindo a lista ao meio repetidamente e comparando o valor central com o valor buscado.
> No **pior caso**, o número de comparações necessárias é proporcional ao **logaritmo de base 2** do número de elementos da lista, ou seja, **log₂(n)**.

Isso acontece porque:

- A cada tentativa, **metade dos elementos é descartada**.
- Então, se a lista tem `n` elementos, o número de vezes que você pode dividi-la por 2 até restar apenas 1 elemento é `log₂(n)`.

## Como isso seria aplicado em um código JavaScript?

👉 [Busca Binária na Prática com JS](/algoritmos/binary-search.js)

> Durante a elaboração desse script resolvi fazer algumas anotações parte por parte do código para fixar meus conhecimentos sobre JS.

### 📌 Uso de **.length**

Na minha lista: `const lista = [10, 20, 30, 40, 50, 60];` tenho 6 elementos. O índice correspondentes ao primeiro elemento é 0 e do ultimo é 5.

`let end = lista.length - 1;`

- Ao utilizar isso estamos definindo **"Comece a busca no último índice da lista, que é igual a colocação dele na lista - 1"**, ou seja, 6 - 1 = 5.

### 📌 Uso de **Match.floor**

`Math.floor((start + end) / 2)`

- Basicamente calcula o índice do meio entre os limites start e end da busca.

1. `start + end`: soma os índices atuais onde a busca começa e termina.

2. `/ 2`: divide por 2 para pegar o meio do intervalo.

3. `Math.floor(...)`: arredonda para baixo (caso o resultado seja decimal), porque índices precisam ser inteiros.

### 📌 O que faz `const guess = lista[middle];`

Ela pega o valor do meio da lista atual e guarda na variável guess.

> “Pegue o valor do meio da lista agora e vamos ver se ele é o número que queremos.”

### Por que isso é importante?

Na busca binária, a cada tentativa, você:

1. Calcula o índice do meio.

2. Acessa o elemento naquele índice → é isso que `lista[middle]` faz.

3. Compara esse valor com o número que você está procurando (o alvo).
