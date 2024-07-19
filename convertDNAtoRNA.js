const DNAtoRNA = dna => {
  let array = Array.from(dna.toLowerCase())
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 't') {
      array[i] = 'u'
    }
  }
  return array.join('').toUpperCase()
}

const RNA = DNAtoRNA('GCAT')
console.log(RNA, 'RNA')

const DNAtoRNA2 = dna =>
  Array.from(dna.toLowerCase())
    .map(item => (item === 't' ? 'u' : item))
    .join('')
    .toUpperCase()

const RNA2 = DNAtoRNA2('GCAT')
console.log(RNA2, 'RNA2')
