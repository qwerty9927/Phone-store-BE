function checkLogin(){
  const username = document.querySelector('input[name = "Username"]')
  const password = document.querySelector('input[name = "Password"]')
  const wanningUser = document.querySelector('.username_log span')
  const wanningPass = document.querySelector('.password_log span')
  if(username.value == ""){
    wanningUser.innerText = "Nhập tài khoản"
    return false
  } else {
    wanningUser.innerText = ""
  }
  if(password.value == ""){
    wanningPass.innerText = "Nhập mật khẩu"
    return false
  } else {
    wanningPass.innerText = ""
  }
  return true
}
