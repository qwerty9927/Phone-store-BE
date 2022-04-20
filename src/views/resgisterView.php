<div class="login_page">
  <div class="login form">
    <h2 class="title_form">Login</h2>
    <form action="./Resgister/handleResgister" method="POST" onsubmit="return checkLogin()">
      <div class="username_log">
        <div class="input">
          <i class="fa-solid fa-user"></i>
          <input type='text' placeholder='Username' name='Username'>
        </div>
        <span></span>
      </div>
      <div class="password_log">
        <div class="input">
          <i class="fa-solid fa-lock"></i>
          <input type="password" placeholder="Password" name="Password">
        </div>
        <span></span>
      </div>
      <div class="checkBox">
        <input type="checkbox" name="check[]">
        <p style="color: #fff">Remember me</p>
      </div>
      <div class="btn_submit">
        <input type="submit" value="Sign In" name="submit">
      </div>
    </form>
  </div>
</div>
<script src = "./js/scriptLogin.js"></script>
