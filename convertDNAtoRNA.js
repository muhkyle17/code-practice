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
