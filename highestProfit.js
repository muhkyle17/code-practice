function minMax(arr) {
  const max = Math.max(...arr)

  return [Math.min(...arr), Math.max(...arr)]
}

const profit = minMax([1, 2, 3, 4, 5])
console.log(profit, 'profit')
