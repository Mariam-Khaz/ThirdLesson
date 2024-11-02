function validPassword(password, username) {
  if (password.length < 8) {
    return false
  } else if (password.includes(" ")) {
    return false
  } else if (password.includes(username)) {
    return false
  } else {
    return true
  }
}

console.log(validPassword("MariamK2024", "MariamK"))
