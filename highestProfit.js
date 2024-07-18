const minMax = arr => [Math.min(...arr), Math.max(...arr)]

const profit = minMax([1, 2, 3, 4, 5])
console.log(profit, 'profit')

const minMax2 = arr => {
  let min = arr[0]
  let max = arr[0]

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i]
    } else if (arr[i] > max) {
      max = arr[i]
    }
  }
  return [min, max]
}

const profit2 = minMax2([1, 2, 3, 4, 5])
console.log(profit2, 'profit2')
