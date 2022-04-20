<?php
  class App{
    private $controller = "Home";
    private $action = "";
    private $params = [];
    function __construct(){
      $arrURL = $this->URLprocess();
      
      //Handle controler
      if(isset($_SESSION['username'])){
        if($arrURL && file_exists("../src/controllers/{$arrURL[0]}.php")){
          $this->controller = $arrURL[0];
          unset($arrURL[0]);
        }
      } else {
        $this->controller = "Resgister";
      }
      require_once("../src/controllers/{$this->controller}.php");
      $this->controller = new $this->controller;

      //Handle action
      if(isset($arrURL[1])){
        if(method_exists($this->controller, $arrURL[1])){
          $this->action = $arrURL[1];
          unset($arrURL[1]);
        }
      }

      //Handle params
      $this->params = $arrURL ? array_values($arrURL) : [];
      
      call_user_func([$this->controller, $this->action], $this->params);
    }
    function URLprocess(){
      if(isset($_GET['url'])){
        return explode("/", $_GET['url']);
      } else {
        return false;
      }
    }
  }
?>