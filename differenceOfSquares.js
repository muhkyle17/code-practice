function differenceOfSquares(n) {
  let array = []
  for (let i = n; i >= 1; i--) {
    array.push(i)
  }
  const addedArray = array.reduce((acc, curr) => acc + curr, 0)
  const squaredSum = addedArray ** 2

  const squareEachNumberArray = array.map(num => num ** 2)
  const addedSquaredEachNumberArray = squareEachNumberArray.reduce((acc, curr) => acc + curr, 0)

  return squaredSum - addedSquaredEachNumberArray
}

const number = differenceOfSquares(10)
console.log(number, 'number')
