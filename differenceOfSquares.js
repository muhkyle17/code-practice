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

function differenceOfSquares2(n) {
  let array = []
  for (let i = n; i >= 1; i--) {
    array.push(i)
  }
  const squareOfSum = array.reduce((acc, curr) => acc + curr, 0) ** 2
  const sumOfSqaures = array.map(num => num ** 2).reduce((acc, curr) => acc + curr, 0)

  return squareOfSum - sumOfSqaures
}

const number2 = differenceOfSquares2(10)
console.log(number2, 'number2')
