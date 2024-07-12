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
