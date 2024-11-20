// ----------LESSON 3 --------------------

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


// --------- LESSON 4 ---------------

const target = Math.floor (Math.random()*10) +1
function guessNumberGame () {
  let guess = null
  while (guess !== target) {
  guess = parseFloat (prompt("Guess a number between 1 and 10"))
    if (guess === target) {
    alert("You guessed correctly")
    }
    else if (guess < target) {
      alert("You've guessed to low")
      console.log (`${target}`)
    }
    else if (guess > target) {
      alert("You've guessed to high")
      console.log (`${target}`)
    }
    else {
      alert ("Error")
    }
  }

}

guessNumberGame ()
