<?php
  class Resgister extends Controller{
    function __construct(){
    }

    function renderView(){
      $this->view("layoutView1", "resgisterView", "");
    }

    function handleResgister($params){
      $obj = $this->model("ResgisterModel");
      if($obj->status == false){
        $this->view("", "checkResgister", $obj->getUsername());
      }
    }
  }
?>