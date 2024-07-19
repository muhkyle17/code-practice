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
