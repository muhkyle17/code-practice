function countRedBeads(n) {
  let count = 0
  for (let i = 0; i < n; i++) {
    if (i + 1 > 1) {
      count = count + 2
    }
  }
  return count
}

const redBeadsCount = countRedBeads(3)
console.log(redBeadsCount, 'redBeadsCount')

function countRedBeads2(n) {
  return n < 2 ? 0 : 2 * n - 2
}

const redBeadsCount2 = countRedBeads2(3)
console.log(redBeadsCount2, 'redBeadsCount')
