// function getLargerNumbers(a, b) {
//   let array = [...a]
//   for (let x = 0; x < array.length; x++) {
//     console.log(a[x], 'a[x]')
//     console.log(b[x], 'b[x]')
//     console.log('break')
//     if (a[x] >= b[x]) {
//       continue
//     } else if (a[x] < b[x]) {
//       console.log(a[x], 'a[x]', b[x], 'b[x]')
//       const thisArray = array.filter(item => item !== a[x])
//       thisArray.push(b[x])
//       array = thisArray
//       //       const indexToRemove = array.indexOf(a[x]);
//       //       console.log(indexToRemove, 'indexToRemove')
//       //       array.splice(x, 1)
//     }
//   }
//   return array
// }

// let arr1 = [13, 64, 15, 17, 88]
// let arr2 = [23, 14, 53, 17, 80]

// const newArray = getLargerNumbers(arr1, arr2) // Returns [23, 64, 53, 17, 88]
// console.log(newArray, 'newArray')

function getLargerNumbers(a, b) {
  let array = [...a]
  for (let x = 0; x < array.length; x++) {
    if (a[x] >= b[x]) {
      continue
    } else if (a[x] < b[x]) {
      const thisArray = array.filter(item => item !== a[x])
      thisArray.splice(x, 0, b[x])
      array = thisArray
    }
  }
  return array
}

// let arr1 = [13, 64, 15, 17, 88];
// let arr2 = [23, 14, 53, 17, 80];
let arr1 = [-91, -64, -56, 90, -91]
let arr2 = [84, 78, -28, 0, -37]

const newArray = getLargerNumbers(arr1, arr2) // Returns [23, 64, 53, 17, 88]
console.log(newArray, 'newArray')
