<?php
  class CheckUser extends DB{
    function process($params){
      $sql = "SELECT * FROM {$params[0]} WHERE {$_POST['column']} = '{$params[1]}'";
      if(count($this->select($sql)) > 0){
        return true;
      }
      return false;
    }
  }
?>