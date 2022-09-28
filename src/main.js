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
  if (menuName === 'profile') {
    // Show options to logout.
    console.log('Profile menu called (to signout)')
  }
}
// ...

function errorDialog(message) {
  const dialog = document.getElementById('error-dialog')
}
