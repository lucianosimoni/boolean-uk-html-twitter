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

  users.push(
    {
      'username' : username,
      'password' : password
    }
  )
}

registerUser()