let users = [
  {
    username : 'potato',
    password : '1234'
  }
]

function loginUser() {
  console.log('Log user')
}

function registerUser() {
  console.log('Register user')
  const username = document.getElementById('r-uname').value
  const password = document.getElementById('r-pass').value

  if (!username.length > 13) {
    // Add user if username not more than 13 char
    users.push(
      {
        'username' : username,
        'password' : password
      }
    )
  } else {
    errorDialog('Username should have 13 char only.')
  }
  
}

// Button callers
function goTo(toPage) {
  // Adds the rest of path to the toPage and then go
  console.log(`Go to page ${toPage}`)
}

function openPopup(popupName) {
  if (popupName === 'treet') {
    // show the treet popup
    console.log('Treet called')
  }
}

function openMenu(menuName) {
  if (menuName === 'accounts-menu') {
    // Show options to logout.
    console.log('Profile menu called (to signout)')
  }
}
// ...

function followUser(user) {
  console.log(`Follow user: ${user}`)
}

function errorDialog(message) {
  const dialog = document.getElementById('error-dialog')
}
//

// Cool thing using toggle for the Like btn
function changeState(element) {
  console.log('Like has been pressed.')
  element.classList.toggle("liked")
}

// Disable or enable Treex button based on this input
const treex = document.getElementById("treex")

function treexInputChanged(element) {
  if (element.value !== "") { // Activate Treex
    treex.classList.remove("disabled")
  } else { // Disable Treex
    treex.classList.add("disabled")
  }
  growTreexInput(element) // Resize rows
}
function growTreexInput(element) {
  element.style.height = "5px"
  console.log(element.style.height)
  element.style.height = (element.scrollHeight)+"px"
}