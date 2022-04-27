<?php
  class Download{
    function __construct(){

    }
    function uploadImage($params){
      $path = "./img/phone/";
      $tmp = $_FILES['image']['tmp_name'];
      $name = $params[0];
      $path .= $name;
      if(move_uploaded_file($tmp, $path)){
        return true;
      }
      // return $_FILES['image']['name'];
    }
  }
?>