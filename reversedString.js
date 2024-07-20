// Add reverse method to String prototype
String.prototype.reverse = function () {
  return this.split('').reverse().join('')
}

// Example usage:
const reversed = 'Super awesome string'.reverse()
console.log(reversed, 'reversed') // => "gnirts emosewa repuS"

// Add reverse method to String prototype
String.prototype.reverse2 = function () {
  const array = [...this]
  let reversedArray = []
  for (let i = array.length; i >= 0; i--) {
    reversedArray.push(array[i])
  }
  return reversedArray.join('')
}

const reversed2 = 'Super awesome string'.reverse2()
console.log(reversed2, 'reversed2') // => "gnirts emosewa repuS"

String.prototype.reverse3 = function () {
  let rev = []
  for (let letter of this) {
    rev.unshift(letter)
  }
  return rev.join('')
}

const reversed3 = 'Super awesome string'.reverse3()
console.log(reversed3, 'reversed3') // => "gnirts emosewa repuS"
