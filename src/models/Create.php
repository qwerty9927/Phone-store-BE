<?php
  class Create extends DB{
    function __construct(){
      parent::__construct();
    }
    function process(){
      if(isset($_POST['info']['Password'])){
        $_POST['info']['Password'] = md5($_POST['info']['Password']);
      }
      return $this->insert($_POST['access'], $_POST['info']);
    }
    function createIdCTSP(){
      $count = intval($_POST['info']['SoLuongCD']);
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