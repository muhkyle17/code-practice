function goodVsEvil(good, evil) {
  good = good.split(' ')
  evil = evil.split(' ')

  let goodWorth = [1, 2, 3, 3, 4, 10]
  let evilWorth = [1, 2, 2, 2, 3, 5, 10]

  let addGood = good.map((number, index) => number * goodWorth[index])
  let addEvil = evil.map((number, index) => number * evilWorth[index])

  console.log(addGood, 'addGood')
  console.log(addEvil, 'addEvil')

  let goodSide = addGood.reduce((acc, curr) => acc + curr)
  let evilSide = addEvil.reduce((acc, curr) => acc + curr)

  if (goodSide > evilSide) {
    return 'Battle Result: Good triumphs over Evil'
  } else if (goodSide < evilSide) {
    return 'Battle Result: Evil eradicates all trace of Good'
  } else {
    return 'Battle Result: No victor on this battle field'
  }
}
