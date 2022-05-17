<?php
  class Update extends DB{
    function __construct(){
      parent::__construct();
    }
    function process($params){
     if(isset($_POST['info']['Password'])){
      $_POST['info']['Password'] = md5($_POST['info']['Password']);
     }
      return $this->update($_POST['access'], $_POST['info'], "{$_POST['column']} = {$params[0]}");
    }
  }
?>