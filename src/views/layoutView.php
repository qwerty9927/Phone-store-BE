<?php
  $rootURL = "http://{$_SERVER['HTTP_HOST']}/mvc_app";
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.0/css/all.css" integrity="sha512-M9yHeAbo9J8KSZVvOi5PEo4WrL6LWxbS+cvh6faIEPPqHQXhxilgCSJ/L2tTqRf73GmI4+tNy8OWSsQuwXc4fw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
  <link rel="stylesheet" href="<?php echo $rootURL; ?>/css/layout.css">
  <link rel="stylesheet" href="<?php echo $rootURL; ?>/css/login.css">
  <link rel="stylesheet" href="<?php echo $rootURL; ?>/css/homePage.css">
  <link rel="stylesheet" href="<?php echo $rootURL; ?>/css/category.css">
  <link rel="stylesheet" href="//code.jquery.com/ui/1.13.1/themes/base/jquery-ui.css">
  <script src="./js/jquery_3.6.0.js"></script>
  <script src="https://code.jquery.com/ui/1.13.1/jquery-ui.js"></script>
  <title>Document</title>
</head>
<body>
<div class="inner_Alert"></div>
<div class="app">
  <div class="header">
    <div class="header_fixed">
      <div class="title">
        <p>Apple</p>
      </div>
      <div class="option">
        <p>Home</p>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="left_content">
      <div class="left_content_fixed">
        <div class="user items">
          <ul>
            <a href="./">
              <li class="btn_home">
                <i class="fa-solid fa-house"></i>
                <p>Home</p>
              </li>
            </a>
            <li class="admin">
              <div class="circle">
                <img src="./assets/img/person_48px.png" alt="">
              </div>
              <p><?php echo $data[3]?></p>
            </li>
          </ul>
        </div>
        <div class="menu items">
          <ul>
            <?php
              foreach($data[0] as $array){
                echo 
                  "<a href='{$data[1][intval($array['MADM']) - 1]}'>
                    <li>
                      <i class='{$data[2][intval($array['MADM']) - 1]}'></i>
                      <p>{$array['TENDM']}</p>
                    </li>
                  </a>";
              }
            ?>
          </ul>
        </div>
        <ul class="logOut">
          <a href="./Logout">
            <li style="color: #fff">
              <i class="fa-solid fa-arrow-right-from-bracket"></i>
              <p>LogOut</p>
            </li>
          </a>
        </ul>
      </div>
    </div>
    <div class="right_content">
      <?php  
        require_once("../src/views/{$view}.php");
      ?>
      </div>
    </div>
  </div>
  <script src="./js/script.js"></script>
  <script src="./js/scriptLayout.js"></script>
</body>
</html>

