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
