function friend(friends) {
  return friends.filter(friend => friend.length === 4)
}

const friends = friend(['Ryan', 'Kieran', 'Mark'])
console.log(friends, 'friends')
