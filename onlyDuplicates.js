function onlyDuplicates(str) {
  const arr = str.split('')
  const newArr = []

  for (let i = 0; i < arr.length; i++) {
    let count = 0

    for (let j = 0; j < arr.length; j++) {
      if (arr[j] == arr[i]) {
        count++
      }
    }

    console.log(count, 'count')
    if (count >= 2) {
      newArr.push(arr[i])
    }
  }

  return newArr.join('')
}

const duplicates = onlyDuplicates('abccdefee')
console.log(duplicates, 'duplicates')

function onlyDuplicates2(str) {
  const arr = str.split('')
  const results = []

  for (let i = 0; i < arr.length; i++) {
    console.log(arr.indexOf(arr[i]), arr[i], 'arr.indexOf(arr[i])')
    console.log(arr.lastIndexOf(arr[i]), arr[i], 'arr.lastIndexOf(arr[i])')
    if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
      results.push(arr[i])
    }
  }

  return results.join('')
}

const duplicates2 = onlyDuplicates2('abccdefee')
console.log(duplicates2, 'duplicates2')
