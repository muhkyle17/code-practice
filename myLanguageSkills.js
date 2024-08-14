function myLanguages(results) {
  return Object.entries(results)
    .filter(([key, value]) => value >= 60)
    .sort(([, a], [, b]) => b - a)
    .map(([key]) => key)
}

const getMyLanguages = myLanguages({ Hindi: 60, Dutch: 93, Greek: 71 })
console.log(getMyLanguages, 'getMyLanguages')

// EXPLANATION
// Object.entries(results): This converts the results object into an array of key-value pairs (e.g., [['Hindi', 60], ['Dutch', 93], ['Greek', 71]]).
// .filter(([key, value]) => value >= 60): This filters out any languages with scores less than 60.
// .sort(([, a], [, b]) => b - a): This sorts the remaining entries by their score in descending order. The [, a] and [, b] syntax is used to focus on the values (scores) of the entries.
// .map(([key]) => key): Finally, this extracts the language names (keys) from the sorted entries.
