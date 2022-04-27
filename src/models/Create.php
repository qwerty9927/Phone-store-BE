<?php
  class Create extends DB{
    function __construct(){
      parent::__construct();
    }
    function process(){
      return $this->insert($_POST['access'], $_POST['info']);
    }
    function createIdCTSP(){
      $count = intval($_POST['count']);
      for($i = 0;$i < $count;$i++){
        $imei = uniqid("ip");
        $arr = array(
          "idCD" => $_POST['info']['idCD'],
          "IMEI" => $imei,
          "TrangThai" => 1
        );
        $this->insert($_POST['secondAccess'], $arr);
      }
    }
  }
?>