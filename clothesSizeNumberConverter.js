function sizeToNumber(size) {
  switch (size) {
    case 'xxxxxs':
      return 26
    case 'xxxxs':
      return 28
    case 'xxxs':
      return 30
    case 'xxs':
      return 32
    case 'xs':
      return 34
    case 's':
      return 36
    case 'm':
      return 38
    case 'l':
      return 40
    case 'xl':
      return 42
    case 'xxl':
      return 44
    case 'xxxl':
      return 46
    default:
      return null
  }
}

const number = sizeToNumber('s')
console.log(number, 'number')
