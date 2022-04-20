<?php
  class Delete extends DB{
    function __construct(){
      parent::__construct();
    }
    function process($params){
      return $this->delete($_POST['access'], "{$_POST['column']} = {$params[0]}");
    }
  }
?>
