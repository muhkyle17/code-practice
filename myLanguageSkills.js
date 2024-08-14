function myLanguages(results) {
  return Object.entries(results)
    .filter(([key, value]) => value >= 60)
    .sort(([, a], [, b]) => b - a)
    .map(([key]) => key)
}

const getMyLanguages = myLanguages({ Hindi: 60, Dutch: 93, Greek: 71 })
console.log(getMyLanguages, 'getMyLanguages')
