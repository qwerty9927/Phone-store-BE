<?php
  class ResgisterModel extends DB{
    private $username;
    private $password;
    public $status = false;
    function __construct(){
      parent::__construct();
      if(isset($_POST['submit'])){
        $this->username = $_POST['Username'];
        $this->password = $_POST['Password'];
        $sql = "SELECT * FROM TAIKHOAN WHERE Username = '{$this->username}' AND Password = '{$this->password}' AND MAQUYEN != 'KH'";
        $result = $this->select($sql);
        if($result){
          $_SESSION['username'] = $this->username;
          $_SESSION['role'] = $result[0]['MAQUYEN'];
          if(!empty($_POST['check'])){
            setcookie("PHPSESSID", session_id(), time() + (3600 * 24), "/");
          }
          $this->status = true;
          header("Location: http://localhost/mvc_app/Home");
        }
      }
    }
    function getUsername(){
      return $this->username;
    }
  }
?>