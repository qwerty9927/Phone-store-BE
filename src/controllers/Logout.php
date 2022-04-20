<?php
  class Logout{
    function __construct(){
      unset($_SESSION['username']);
      header("Location: http://localhost/mvc_app/");
    }
  }
?>