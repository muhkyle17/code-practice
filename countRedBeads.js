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
