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

function myLanguages2(results) {
  let myLanguagesArray = []

  // Step 1: Filter languages with a score of at least 60
  for (const [key, value] of Object.entries(results)) {
    if (value >= 60) {
      myLanguagesArray.push([key, value]) // Store as [language, score] pairs
    }
  }

  // Step 2: Sort the array by the scores in descending order
  for (let i = 0; i < myLanguagesArray.length - 1; i++) {
    for (let j = i + 1; j < myLanguagesArray.length; j++) {
      if (myLanguagesArray[i][1] < myLanguagesArray[j][1]) {
        // Swap the elements
        let temp = myLanguagesArray[i]
        myLanguagesArray[i] = myLanguagesArray[j]
        myLanguagesArray[j] = temp
      }
    }
  }

  // Step 3: Extract only the language names from the sorted array
  let sortedLanguages = []
  for (let i = 0; i < myLanguagesArray.length; i++) {
    sortedLanguages.push(myLanguagesArray[i][0])
  }

  return sortedLanguages
}

const getMyLanguages2 = myLanguages2({ Hindi: 60, Dutch: 93, Greek: 71 })
console.log(getMyLanguages, 'getMyLanguages')
