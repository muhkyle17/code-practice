// Add reverse method to String prototype
String.prototype.reverse = function () {
  return this.split('').reverse().join('')
}

// Example usage:
const reversed = 'Super awesome string'.reverse()
console.log(reversed, 'reversed') // => "gnirts emosewa repuS"
