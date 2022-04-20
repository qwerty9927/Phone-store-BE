<?php
  class Controller{
    function model($model){
      require_once("../src/models/{$model}.php");
      return new $model;
    }

    function view($layout, $view, $data){
      if($layout == ""){
        require_once("../src/views/{$view}.php");
      } else {
        require_once("../src/views/{$layout}.php");
      }
    }
  }
?>