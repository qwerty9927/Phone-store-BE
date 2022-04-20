<?php
  class Create extends DB{
    function __construct(){
      parent::__construct();
    }
    function process(){
      return $this->insert($_POST['access'], $_POST['info']);
    }

    function getAll(){
      return $this->select("SELECT * FROM {$_POST['access']} LIMIT {$_POST['startPoint']}, 10");
    }
  }
?>