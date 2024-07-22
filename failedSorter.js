Array.prototype.sort = function () {
  for (let i = 0; i < this.length - 1; i++) {
    for (let j = i + 1; j < this.length; j++) {
      // Log the current elements being compared
      console.log(`Comparing this[${i}] = ${this[i]} and this[${j}] = ${this[j]}`)

      if (this[i] > this[j]) {
        // Swap the elements if they are in the wrong order
        ;[this[i], this[j]] = [this[j], this[i]]

        // Log the elements after swapping
        console.log(`Swapped: this[${i}] = ${this[i]} and this[${j}] = ${this[j]}`)
      }
    }
  }
  return this
}

// Example usage
const sorted = [9, 7, 2, 4, 5, 3, 6, 8, 1].sort()
console.log(sorted, 'sorted')
