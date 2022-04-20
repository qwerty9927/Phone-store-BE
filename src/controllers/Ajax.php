<?php
  class Ajax extends Controller{
    function search($params){
      $obj = $this->model("CallData");
      echo json_encode($obj->search());
    }

    function nextCode($params){
      $obj = $this->model("CallData");
      echo json_encode($obj->nextCode());
    }

    function createData(){
      $obj = $this->model("Create");
      if($obj->process()){
        echo json_encode($obj->getAll());
      }
    }
    
    function updateData($params){
      $obj = $this->model("Update");
      echo json_encode($obj->process($params));
    }

    function deleteData($params){
      $obj = $this->model("Delete");
      echo json_encode($obj->process($params));
    }
  }
?>