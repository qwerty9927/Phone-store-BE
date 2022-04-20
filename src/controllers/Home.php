<?php
  class Home extends Controller{
    function __construct(){
      $result = array();
      $data = $this->model("LayoutModel");
      array_push($result, $data->getCategory());
      array_push($result, $data->getStringUrl());
      array_push($result, $data->getStringIcon());
      array_push($result, $data->getUsername());
      $this->view("layoutView", "homeView", $result);
    }
    function add($params){
      print_r($params);
    }
  }
  return new Home;
?>
