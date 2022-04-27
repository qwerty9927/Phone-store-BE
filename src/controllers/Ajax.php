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

    function selectWithCondition($params){
      $obj = $this->model("CallData");
      echo json_encode($obj->selectWithCondition($params));
    }
    
    function selectAll($params){
      $obj = $this->model("CallData");
      echo json_encode($obj->selectAll($params));
    }

    function createData(){
      $obj = $this->model("Create");
      echo json_encode($obj->process());
      if(isset($_POST['secondAccess'])){
        $obj->createIdCTSP();
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

    function upload($params){
      $obj = $this->model("Download");
      echo json_encode($obj->uploadImage($params));
    }
  }
?>
