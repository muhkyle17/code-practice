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

// Example usage:
const reversed2 = 'Super awesome string'.reverse2()
console.log(reversed2, 'reversed2') // => "gnirts emosewa repuS"
