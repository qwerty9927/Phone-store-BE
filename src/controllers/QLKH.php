<?php
  class QLKH extends Controller{
    function __construct(){
      $result = array();
      $data = $this->model("LayoutModel");
      array_push($result, $data->getCategory());
      array_push($result, $data->getStringUrl());
      array_push($result, $data->getStringIcon());
      array_push($result, $data->getUsername());
      $this->view("layoutView", "qlkh", $result);
    }
  }
?>