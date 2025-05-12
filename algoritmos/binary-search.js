// Algoritmo de busca binária
const lista = [10, 20, 30, 40, 50, 60];

function binarySearch(lista, alvo) {
  let start = 0;
  let end = lista.length - 1;

  while (start <= end) {
    const middle = Math.floor((start + end) / 2);
    const guess = lista[middle];

    if (guess === alvo) {
      return middle;
    } else if (guess > alvo) {
      end = middle - 1;
    } else if (guess < alvo) {
      start = middle + 1;
    }
  }
}

const numbers = [10, 20, 30, 40, 50, 60];

console.log(binarySearch(numbers, 10));
console.log(binarySearch(numbers, 40));
console.log(binarySearch(numbers, 60));
