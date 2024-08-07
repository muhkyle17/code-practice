const doubleChar = str => {
  const stringArray = str.split('')
  let doubledArray = []
  for (let i = 0; i < stringArray.length; i++) {
    doubledArray.push(stringArray[i], stringArray[i])
  }
  return doubledArray.join('')
}

const doubled = doubleChar('String')
console.log(doubled, 'doubled')

const doubleChar2 = str => {
  let doubledArray = []
  str.split('').map(item => doubledArray.push(item, item))
  return doubledArray.join('')
}

const doubled2 = doubleChar2('String')
console.log(doubled2, 'doubled2')

const doubleChar3 = str => {
  return str
    .split('')
    .map(char => char + char)
    .join('')
}

const doubled3 = doubleChar3('String')
console.log(doubled3, 'doubled3')

const doubleChar4 = str =>
  str
    .split('')
    .map(char => char + char)
    .join('')

const doubled4 = doubleChar4('String')
console.log(doubled4, 'doubled4')
