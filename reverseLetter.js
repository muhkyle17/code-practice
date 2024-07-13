function reverseLetter(str) {
  return str
    .replace(/[^a-zA-Z]/g, '')
    .split('')
    .reverse()
    .join('')
}

const reversed = reverseLetter('krishan')
console.log(reversed, 'reversed')
