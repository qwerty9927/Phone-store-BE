<?php
  class Update extends DB{
    function __construct(){
      parent::__construct();
    }
    function process($params){
      return $this->update($_POST['access'], $_POST['info'], "{$_POST['column']} = {$params[0]}");
    }
  }
?>