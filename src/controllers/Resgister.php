<?php
  class Resgister extends Controller{
    function __construct(){
      $this->view("", "resgisterView", "");
    }

    function handleResgister($params){
      $obj = $this->model("ResgisterModel");
      if($obj->status == false){
        $this->view("", "checkResgister", $obj->getUsername());
      }
    }
  }
?>