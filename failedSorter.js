Array.prototype.sort = function () {
  for (let i = 0; i < this.length - 1; i++)
    for (let j = i + 1; j < this.length; j++)
      this[i] > this[j] && ([this[i], this[j]] = [this[j], this[i]])

  return this
}

const sorted = [9, 7, 2, 4, 5, 3, 6, 8, 1].sort()
console.log(sorted, 'sorted')
