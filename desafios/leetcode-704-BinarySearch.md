# 🧠 Desafio LeetCode - 704. Binary Search

**Nível:** Easy  
[Acesse o Desafio](https://leetcode.com/problems/binary-search)

## 📝 Descrição

Dado um array de inteiros ordenado `nums` (sem elementos duplicados) e um número inteiro `target`, retorne o **índice** de `target` se ele estiver presente no array. Caso contrário, retorne `-1`.

Você deve implementar o algoritmo utilizando a **Busca Binária**, com complexidade **O(log n)**.

---

## 📥 Exemplo 1

**Entrada:**

```js
nums = [-1, 0, 3, 5, 9, 12];
target = 9;
```

**Saída:**

```
4
```

**Explicação:** O número 9 está no índice 4.

---

## 📥 Exemplo 2

**Entrada:**

```js
nums = [-1, 0, 3, 5, 9, 12];
target = 2;
```

**Saída:**

```
-1
```

**Explicação:** O número 2 não está presente no array.

---

## ✅ Restrições

- `1 <= nums.length <= 10^4`
- `-10^4 < nums[i], target < 10^4`
- Todos os valores de `nums` são únicos.
- `nums` está ordenado em ordem crescente.

---

## 🚀 Resolução

A solução utiliza o algoritmo de **Busca Binária**, ideal para arrays ordenados. A ideia é reduzir pela metade o intervalo de busca a cada iteração, comparando o valor do meio do array com o `target`.

### 📌 Código em JavaScript

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    const middle = Math.floor((start + end) / 2);
    const guess = nums[middle];

    if (guess === target) {
      return middle;
    } else if (guess > target) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }

  return -1;
};
```
